"use client";

import React, { useState, useEffect } from "react";
import './hero.css';
import { useCurrency } from '@/context/CurrencyContext';
import OtpModal from '@/components/otp/OtpModal';

const StickyPlanCard: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showOtp, setShowOtp] = useState(false);
    const { getPrice } = useCurrency();



    const loadScript = (src: string) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;

            script.onload = () => {
                resolve(true);
            };

            script.onerror = () => {
                resolve(false);
            };

            document.body.appendChild(script);
        });
    };

    const handlePayment = async () => {

        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load");
            return;
        }

        // Create order
        const orderData = await fetch("/api/create-order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                amount: 1299,
            }),
        });

        const order = await orderData.json();

        const options = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
            amount: order.amount,
            currency: order.currency,
            name: "My Store",
            description: "Test Transaction",
            order_id: order.id,

            handler: async function (response: Record<string, unknown>) {
                alert("Payment Successful");

                console.log(response);
            },

            prefill: {
                name: "John Doe",
                email: "john@example.com",
                contact: "9999999999",
            },

            theme: {
                color: "#3399cc",
            },
        };

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const paymentObject = new (window as any).Razorpay(options);

        paymentObject.open();

    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;

            if (scrollTop <= 50) {
                // Hidden when fully top
                setIsVisible(false);
            } else if (scrollTop + windowHeight >= docHeight - 50) {
                // Hidden when fully bottom
                setIsVisible(false);
            } else {
                // Visible when scrolling up or down in the middle
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Call initially to set correct state
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div
                className="hero_sticky-plan-card"
                style={{
                    opacity: isVisible ? 1 : 0,
                    visibility: isVisible ? 'visible' : 'hidden',
                    transition: 'opacity 0.3s ease, visibility 0.3s ease',
                    pointerEvents: isVisible ? 'auto' : 'none'
                }}
            >
                <div className="plan-card-content">
                    <div className="plan-card-main">
                        <div className="plan-card-info">
                            <span className="plan-card-subtitle">Get My Plan</span>
                            <span className="plan-card-price">{getPrice('plan')}</span>
                        </div>
                        <button className="plan-card-btn" onClick={() => setShowOtp(true)}>Get Plan</button>
                    </div>
                    <div className="plan-card-divider"></div>
                    <div className="plan-card-footer">
                        100% money-back &middot; Live in 24 hrs &middot; 100% indexed
                    </div>
                </div>
            </div>

            {/* OTP Verification Modal */}
            <OtpModal
                isOpen={showOtp}
                onClose={() => setShowOtp(false)}
                onVerified={() => {
                    setShowOtp(false);
                    handlePayment();
                }}
            />
        </>
    );
};

export default StickyPlanCard;
