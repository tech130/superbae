import React from 'react';
import './StopSwitching.css';

const StopSwitching: React.FC = () => {
    return (
        <section className="ss-section" id="stop-switching">
            {/* ---- Text Content ---- */}
            <div className="ss-content">
                <span className="ss-badge">Stop Switching Between Apps</span>

                <h2 className="ss-heading">
                    Plan. Journal. Track. Organise.
                </h2>

                <p className="ss-subtitle">
                    Everything you need to stay on top of life, together in one place.
                </p>

                <a href="#" className="ss-download-btn">
                    Download App
                    <div className='ss-arrow'>
                        <img src="/images/lifestyle/arrow.svg" alt="arrow" className='ss-arrow-svg' />
                    </div>
                </a>
            </div>

            {/* ---- Product Collage ---- */}
            <div className="ss-collage">
                {/* Tumbler - far left */}
                <div className="ss-product ss-product--tumbler">
                    <img
                        src="/images/lifestyle/tumbler.png"
                        alt="Tumbler"
                        loading="lazy"
                    />
                </div>

                {/* Sunglasses - top left area */}
                <div className="ss-product ss-product--sunglasses">
                    <img
                        src="/images/lifestyle/sunglasses.png"
                        alt="Sunglasses"
                        loading="lazy"
                    />
                </div>

                {/* Lipstick - between tumbler and scrunchie */}
                <div className="ss-product ss-product--lipstick">
                    <img
                        src="/images/lifestyle/lipstick.png"
                        alt="Lipstick"
                        loading="lazy"
                    />
                </div>

                {/* Scrunchie - bottom left */}
                <div className="ss-product ss-product--scrunchie">
                    <img
                        src="/images/lifestyle/scrunchie.png"
                        alt="Scrunchie"
                        loading="lazy"
                    />
                </div>

                {/* iPhone - center */}
                <div className="ss-product ss-product--iphone">
                    <img
                        src="/images/lifestyle/iphone.png"
                        alt="iPhone"
                        loading="lazy"
                    />
                </div>

                {/* Apple Watch - right of center (placeholder) */}
                <div className="ss-product ss-product--watch">
                    <img
                        src="/images/lifestyle/watch.png"
                        alt="Watch"
                        loading="lazy"
                    />
                </div>

                {/* Sunscreen - top right (placeholder) */}
                <div className="ss-product ss-product--sunscreen">
                    <img
                        src="/images/lifestyle/sunscreen.png"
                        alt="Sunscreen"
                        loading="lazy"
                    />
                </div>

                {/* Perfume - right (placeholder) */}
                <div className="ss-product ss-product--perfume">
                    <img
                        src="/images/lifestyle/perfume.png"
                        alt="Perfume"
                        loading="lazy"
                    />
                </div>

                {/* Headphones - far right top (placeholder) */}
                <div className="ss-product ss-product--headphones">
                    <img
                        src="/images/lifestyle/headphone.png"
                        alt="Headphones"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
};

export default StopSwitching;
