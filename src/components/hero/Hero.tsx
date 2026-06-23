"use client";

import React, { useState, useEffect } from "react";
import './hero.css'
import { useCurrency } from '@/context/CurrencyContext';
import OtpModal from '@/components/otp/OtpModal';

const Hero: React.FC = () => {
    const [rotation, setRotation] = useState(0);
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
                amount: 2500,
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
            // Adjust the multiplier (e.g., 0.05) to control rotation speed
            const currentScroll = window.scrollY;
            setRotation(currentScroll * 0.05);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <section className="hero_section section-3" style={{ backgroundColor: '#ffffff' }}>


                <div className="w-layout-blockcontainer hero_container container w-container">


                    <div className="u-p-relative u-z-index-2">
                        <div className="container-2">
                            {/* ----- NEW PLANNER CONTENT ----- */}
                            <div className="u-vflex-center-top u-vgap-24">
                                {/* Headline & subheadline */}
                                <div className="u-vflex-center-top u-vgap-16 u-align-center u-w-100">
                                    <div className="row row-center-horizontal">
                                        <div className="col-12">
                                            <h1 className="h1">
                                                The <span className="gradient-text">Ultimate</span> Digital Planner<br />  for Women
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="row row-center-horizontal">
                                        <div className="col-12">
                                            <p className="hero-color-secondary">
                                                Make every day better. Your entire life, organized in one app.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* App store buttons */}
                                <div className="download-card">
                                    <div className="store-buttons">
                                        <a href="#" className="store-btn">
                                            <div className="store-icon">
                                                <img src="/images/appstore.svg" alt="App Store" />
                                            </div>
                                            <div>
                                                <small>For iOS</small>
                                                <span>App Store</span>
                                            </div>
                                        </a>

                                        <a href="#" className="store-btn">
                                            <div className="store-icon">
                                                <img src="/images/playstore.svg" alt="Google Play" />
                                            </div>
                                            <div>
                                                <small>For Android</small>
                                                <span>Google Play</span>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="card-divider">
                                        <span>Get it on</span>
                                    </div>

                                    <button onClick={() => setShowOtp(true)} className="join-btn">
                                        Join for {getPrice('join')}
                                    </button>
                                </div>



                            </div>
                        </div>

                        {/* ----- PHONE & WATCH SECTION (copied from your original) ----- */}
                        <div className="hero_bottom">
                            <div className="hero_phone-section">
                                <div className="hero_phone-container">
                                    {/* Phone mockup */}
                                    <div
                                        data-video="playpause"
                                        className="hero_phone"
                                        style={{
                                            // transform: `perspective(1000px) translate3d(0px, 9px, 0px) rotateY(${rotation}deg)`,
                                            opacity: 1,
                                            visibility: "inherit",
                                            transition: "transform 0.1s ease-out",
                                            transformStyle: "preserve-3d",
                                        }}
                                    >
                                        <img
                                            loading="eager"
                                            src="/images/phone-bg.png"
                                            alt="Mobile-banner"
                                            className=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

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

export default Hero;