"use client";

import React, { useState, useEffect } from "react";
import './hero.css'

const Hero: React.FC = () => {
    const [rotation, setRotation] = useState(0);

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
                                        <h1 className="h1" style={{ fontSize: '48px' }}>
                                            The <span className="gradient-text">Ultimate</span> Digital Planner<br />  for Women
                                        </h1>
                                    </div>
                                </div>
                                <div className="row row-center-horizontal">
                                    <div className="col-12">
                                        <p className="hero-color-secondary">
                                            Make Every Day Better. Your entire life, organized in One App
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

                                <button className="join-btn">
                                    Join for ₹2500
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
    );
};

export default Hero;