"use client";

import React, { useState, useEffect } from "react";
import './hero.css';

const StickyPlanCard: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

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
                        <span className="plan-card-price">₹1299</span>
                    </div>
                    <button className="plan-card-btn">Get Plan</button>
                </div>
                <div className="plan-card-divider"></div>
                <div className="plan-card-footer">
                    100% money-back &middot; Live in 24 hrs &middot; 100% indexed
                </div>
            </div>
        </div>
    );
};

export default StickyPlanCard;
