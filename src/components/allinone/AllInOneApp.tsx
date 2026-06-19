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

const AllInOneApp: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const advance = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % CARDS.length);
    }, []);

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(advance, 2500);
        return () => clearInterval(interval);
    }, [isPaused, advance]);

    const getCardIndex = (offset: number) => {
        return (activeIndex + offset + CARDS.length) % CARDS.length;
    };

    const positionClass = (offset: number) => {
        switch (offset) {
            case -1:
                return 'aio-fan-card--left';
            case 0:
                return 'aio-fan-card--center';
            case 1:
                return 'aio-fan-card--right';
            default:
                return '';
        }
    };

    return (
        <section className="aio-section" id="all-in-one">
            <h2 className="aio-title">All in one App</h2>

            <div
                className="aio-fan-container"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {[-1, 0, 1].map((offset) => {
                    const index = getCardIndex(offset);
                    const card = CARDS[index];

                    return (
                        <div
                            className={`aio-fan-card ${positionClass(offset)}`}
                            key={`pos-${offset}`}
                            onClick={() => {
                                if (offset !== 0) {
                                    setActiveIndex(index);
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
