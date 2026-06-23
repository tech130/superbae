'use client';

import React, { useState, useEffect, useCallback } from 'react';
import './allinone.css';

const CARDS = [
    { src: '/images/allinone/card-1.png', alt: 'Tracker' },
    { src: '/images/allinone/card-2.png', alt: 'Club' },
    { src: '/images/allinone/card-3.png', alt: 'Journal' },
    { src: '/images/allinone/card-4.png', alt: 'Wardrobe' },
    { src: '/images/allinone/card-5.png', alt: 'Gifitable' },
];

// 5 positions: -2, -1, 0, +1, +2 relative to center
const POSITIONS = [-2, -1, 0, 1, 2];

const AllInOneApp: React.FC = () => {
    const [centerIndex, setCenterIndex] = useState(2); // which card is at the center

    const advance = useCallback(() => {
        setCenterIndex((prev) => (prev + 1) % CARDS.length);
    }, []);

    useEffect(() => {
        const interval = setInterval(advance, 1200);
        return () => clearInterval(interval);
    }, [advance]);

    // Given a position slot (-2 to +2), compute which card goes there
    const getCardForSlot = (slot: number) => {
        const index = (centerIndex + slot + CARDS.length * 10) % CARDS.length;
        return CARDS[index];
    };

    const positionClass = (slot: number) => {
        switch (slot) {
            case -2: return 'aio-card--far-left';
            case -1: return 'aio-card--near-left';
            case  0: return 'aio-card--center';
            case  1: return 'aio-card--near-right';
            case  2: return 'aio-card--far-right';
            default: return '';
        }
    };

    return (
        <section className="aio-section" id="all-in-one">
            <h2 className="aio-title">All in one App</h2>

            <div className="aio-fan-container">
                {POSITIONS.map((slot) => {
                    const card = getCardForSlot(slot);
                    return (
                        <div
                            key={slot}
                            className={`aio-fan-card ${positionClass(slot)}`}
                            onClick={() => {
                                if (slot !== 0) {
                                    // shift center so clicked card becomes center
                                    setCenterIndex((centerIndex + slot + CARDS.length) % CARDS.length);
                                }
                            }}
                        >
                            <img
                                src={card.src}
                                alt={card.alt}
                                className="aio-fan-card-img"
                                draggable={false}
                            />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default AllInOneApp;
