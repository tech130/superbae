"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from '@/lib/firebase';
import type { ConfirmationResult } from 'firebase/auth';
import { useCurrency } from '@/context/CurrencyContext';
import './OtpModal.css';

interface OtpModalProps {
    isOpen: boolean;
    onClose: () => void;
    onVerified: () => void;
}

const OtpModal: React.FC<OtpModalProps> = ({ isOpen, onClose, onVerified }) => {
    const [step, setStep] = useState<'phone' | 'otp' | 'success'>('phone');
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
    const { getDialCode, currency } = useCurrency();
    const dialCode = getDialCode();
    const otpRefs = useRef<(HTMLInputElement | null)[]>([]);
    const modalRef = useRef<HTMLDivElement>(null);
    const recaptchaContainerRef = useRef<HTMLDivElement>(null);
    const recaptchaVerifierRef = useRef<RecaptchaVerifier | null>(null);

    // Reset on open
    useEffect(() => {
        if (isOpen) {
            setStep('phone');
            setPhone('');
            setOtp(['', '', '', '', '', '']);
            setIsLoading(false);
            setError('');
            setConfirmationResult(null);
        }
    }, [isOpen]);

    // Setup invisible reCAPTCHA
    useEffect(() => {
        if (isOpen && step === 'phone' && recaptchaContainerRef.current) {
            // Clean up previous verifier
            if (recaptchaVerifierRef.current) {
                recaptchaVerifierRef.current.clear();
                recaptchaVerifierRef.current = null;
            }

            try {
                recaptchaVerifierRef.current = new RecaptchaVerifier(auth, recaptchaContainerRef.current, {
                    size: 'invisible',
                    callback: () => {
                        // reCAPTCHA solved
                    },
                });
            } catch {
                // Verifier already exists
            }
        }

        return () => {
            if (recaptchaVerifierRef.current) {
                try {
                    recaptchaVerifierRef.current.clear();
                } catch {
                    // ignore cleanup errors
                }
                recaptchaVerifierRef.current = null;
            }
        };
    }, [isOpen, step]);

    // Close on outside click
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                if (step !== 'success') onClose();
            }
        };
        if (isOpen) document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [isOpen, onClose, step]);

    // Close on Escape
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && step !== 'success') onClose();
        };
        if (isOpen) document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, [isOpen, onClose, step]);

    const handleGetOtp = useCallback(async () => {
        if (phone.length < 10) return;
        setIsLoading(true);
        setError('');

        try {
            const phoneNumber = `${dialCode}${phone}`;

            if (!recaptchaVerifierRef.current) {
                throw new Error('reCAPTCHA not ready. Please try again.');
            }

            const result = await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifierRef.current);
            setConfirmationResult(result);
            setStep('otp');
            setTimeout(() => otpRefs.current[0]?.focus(), 100);
        } catch (err: unknown) {
            const firebaseError = err as { code?: string; message?: string };
            console.error('OTP send error:', firebaseError);

            if (firebaseError.code === 'auth/too-many-requests') {
                setError('Too many attempts. Please try again later.');
            } else if (firebaseError.code === 'auth/invalid-phone-number') {
                setError('Invalid phone number. Please check and try again.');
            } else if (firebaseError.code === 'auth/quota-exceeded') {
                setError('SMS quota exceeded. Please try again later.');
            } else {
                setError(firebaseError.message || 'Failed to send OTP. Please try again.');
            }

            // Reset reCAPTCHA for retry
            if (recaptchaVerifierRef.current) {
                try {
                    recaptchaVerifierRef.current.clear();
                } catch {
                    // ignore
                }
                recaptchaVerifierRef.current = null;
            }

            // Recreate reCAPTCHA
            if (recaptchaContainerRef.current) {
                try {
                    recaptchaVerifierRef.current = new RecaptchaVerifier(auth, recaptchaContainerRef.current, {
                        size: 'invisible',
                    });
                } catch {
                    // ignore
                }
            }
        } finally {
            setIsLoading(false);
        }
    }, [phone, dialCode]);

    const verifyOtp = useCallback(async (otpCode: string) => {
        if (!confirmationResult) return;

        setIsLoading(true);
        setError('');

        try {
            await confirmationResult.confirm(otpCode);
            setStep('success');
            // Auto-proceed after success animation
            setTimeout(() => {
                onVerified();
            }, 2200);
        } catch (err: unknown) {
            const firebaseError = err as { code?: string; message?: string };
            console.error('OTP verify error:', firebaseError);

            if (firebaseError.code === 'auth/invalid-verification-code') {
                setError('Invalid OTP. Please try again.');
            } else if (firebaseError.code === 'auth/code-expired') {
                setError('OTP expired. Please request a new one.');
            } else {
                setError(firebaseError.message || 'Verification failed. Please try again.');
            }

            // Clear OTP inputs for retry
            setOtp(['', '', '', '', '', '']);
            setTimeout(() => otpRefs.current[0]?.focus(), 100);
            setIsLoading(false);
        }
    }, [confirmationResult, onVerified]);

    const handleOtpChange = (index: number, value: string) => {
        if (!/^\d*$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value.slice(-1);
        setOtp(newOtp);
        setError('');

        // Auto-focus next
        if (value && index < 5) {
            otpRefs.current[index + 1]?.focus();
        }

        // Auto-verify when all 6 digits entered
        const filled = newOtp.every((d) => d !== '');
        if (filled) {
            const otpCode = newOtp.join('');
            verifyOtp(otpCode);
        }
    };

    const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            otpRefs.current[index - 1]?.focus();
        }
    };

    const handleOtpPaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
        const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
        if (pasted.length === 0) return;

        const newOtp = [...otp];
        for (let i = 0; i < pasted.length && i < 6; i++) {
            newOtp[i] = pasted[i];
        }
        setOtp(newOtp);

        const nextEmpty = newOtp.findIndex((d) => d === '');
        if (nextEmpty !== -1) {
            otpRefs.current[nextEmpty]?.focus();
        } else {
            otpRefs.current[5]?.focus();
            // Auto-verify
            const otpCode = newOtp.join('');
            verifyOtp(otpCode);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="otp-overlay">
            <div className="otp-modal" ref={modalRef}>
                {/* Invisible reCAPTCHA container */}
                <div ref={recaptchaContainerRef} id="recaptcha-container" />

                {/* Close button */}
                {step !== 'success' && (
                    <button className="otp-modal__close" onClick={onClose} aria-label="Close">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                        </svg>
                    </button>
                )}

                {/* === STEP 1: Phone Input === */}
                {step === 'phone' && (
                    <div className="otp-step otp-step--phone">
                        <div className="otp-modal__icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#d14e9a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                        </div>
                        <h3 className="otp-modal__title">Verify Your Number</h3>
                        <p className="otp-modal__subtitle">Enter your phone number to receive a verification code</p>

                        <div className="otp-phone-input">
                            <span className="otp-phone-input__prefix">{dialCode}</span>
                            <input
                                type="tel"
                                className="otp-phone-input__field"
                                placeholder="Enter phone number"
                                value={phone}
                                onChange={(e) => {
                                    setPhone(e.target.value.replace(/\D/g, '').slice(0, 10));
                                    setError('');
                                }}
                                maxLength={10}
                                autoFocus
                                onKeyDown={(e) => { if (e.key === 'Enter') handleGetOtp(); }}
                            />
                        </div>

                        {error && <p className="otp-error">{error}</p>}

                        <button
                            className={`otp-btn otp-btn--primary ${phone.length < 10 ? 'otp-btn--disabled' : ''}`}
                            onClick={handleGetOtp}
                            disabled={phone.length < 10 || isLoading}
                        >
                            {isLoading ? (
                                <span className="otp-btn__spinner" />
                            ) : (
                                'Get OTP'
                            )}
                        </button>
                    </div>
                )}

                {/* === STEP 2: OTP Input === */}
                {step === 'otp' && (
                    <div className="otp-step otp-step--otp">
                        <div className="otp-modal__icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#d14e9a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                        </div>
                        <h3 className="otp-modal__title">Enter OTP</h3>
                        <p className="otp-modal__subtitle">
                            Sent to <strong>{dialCode} {phone.slice(0, 3)}***{phone.slice(-2)}</strong>
                        </p>

                        <div className="otp-digits" onPaste={handleOtpPaste}>
                            {otp.map((digit, i) => (
                                <input
                                    key={i}
                                    ref={(el) => { otpRefs.current[i] = el; }}
                                    type="text"
                                    inputMode="numeric"
                                    className={`otp-digit ${digit ? 'otp-digit--filled' : ''}`}
                                    value={digit}
                                    onChange={(e) => handleOtpChange(i, e.target.value)}
                                    onKeyDown={(e) => handleOtpKeyDown(i, e)}
                                    maxLength={1}
                                    autoComplete="one-time-code"
                                />
                            ))}
                        </div>

                        {error && <p className="otp-error">{error}</p>}

                        {isLoading && (
                            <div className="otp-verifying">
                                <span className="otp-btn__spinner" />
                                <span>Verifying...</span>
                            </div>
                        )}

                        <div className="otp-step__actions">
                            <button
                                className="otp-btn otp-btn--text"
                                onClick={() => {
                                    setStep('phone');
                                    setError('');
                                    setOtp(['', '', '', '', '', '']);
                                }}
                                disabled={isLoading}
                            >
                                ← Change number
                            </button>
                            <button
                                className="otp-btn otp-btn--text"
                                onClick={() => {
                                    setOtp(['', '', '', '', '', '']);
                                    setError('');
                                    handleGetOtp();
                                }}
                                disabled={isLoading}
                            >
                                Resend OTP
                            </button>
                        </div>
                    </div>
                )}

                {/* === STEP 3: Success Animation === */}
                {step === 'success' && (
                    <div className="otp-step otp-step--success">
                        <div className="otp-success">
                            {/* Sparkle particles */}
                            {Array.from({ length: 12 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="otp-sparkle"
                                    style={{
                                        '--sparkle-angle': `${i * 30}deg`,
                                        '--sparkle-delay': `${i * 0.05}s`,
                                        '--sparkle-distance': `${60 + Math.random() * 40}px`,
                                    } as React.CSSProperties}
                                />
                            ))}
                            {/* Ring burst */}
                            <div className="otp-success__ring" />
                            {/* Checkmark */}
                            <div className="otp-success__circle">
                                <svg className="otp-success__check" viewBox="0 0 52 52">
                                    <path
                                        className="otp-success__check-path"
                                        fill="none"
                                        stroke="#fff"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14 27l7.8 7.8L38 17"
                                    />
                                </svg>
                            </div>
                        </div>
                        <h3 className="otp-modal__title otp-modal__title--success">Verified!</h3>
                        <p className="otp-modal__subtitle">Redirecting to payment...</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OtpModal;
