import React from 'react';
import './allinone.css';

const AllInOneApp: React.FC = () => {
    return (
        <section className="aio-section">
            <h2 className="aio-title">All in one App</h2>

            <div className="aio-cards">
                {/* ===== CLUB CARD ===== */}
                <div className="aio-card aio-card--club">
                    <img
                        src="/images/club-card-bg.png"
                        alt="Club - Group of friends"
                        className="aio-card-bg"
                    />
                    <div className="aio-card-overlay"></div>
                    <div className="aio-card-label">Club</div>

                    {/* Music Event Mini-card */}
                    <div className="aio-club-event">
                        <img
                            src="/images/music-event-thumb.png"
                            alt="Music Night"
                            className="aio-club-event-img"
                        />
                        <div className="aio-club-event-info">
                            <span className="aio-club-event-tag">Music</span>
                            <span className="aio-club-event-heart">♡</span>
                            <div className="aio-club-event-title">Music Night</div>
                            <div className="aio-club-event-meta">
                                <span>📍 Mumbai</span>
                                <span>📅 17 Mar</span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="aio-club-bottom">
                        <div className="aio-club-bottom-avatar">
                            <span className="aio-club-bottom-avatar-dot">👤</span>
                        </div>
                        <span className="aio-club-bottom-text">Best brunch spots in Chennai?</span>
                        <div className="aio-club-bottom-plus">+</div>
                    </div>
                </div>

                {/* ===== JOURNAL CARD ===== */}
                <div className="aio-card aio-card--journal">
                    <img
                        src="/images/journal-card-bg.png"
                        alt="Journal - Woman with phone"
                        className="aio-card-bg"
                    />
                    <div className="aio-card-overlay"></div>
                    <div className="aio-card-label">Journal</div>

                    {/* Journal Entry Card */}
                    <div className="aio-journal-entry">
                        <div className="aio-journal-time">
                            <span className="aio-journal-dot"></span>
                            11:50
                        </div>
                        <div className="aio-journal-heading">
                            A Day of Growth And Gratitude
                        </div>
                        <div className="aio-journal-text">
                            I journaled about surfing last night, whenever that
                            happens, I know it&apos;s going to have a great day on
                            the water. Small rituals...
                        </div>
                        <div className="aio-journal-thumbs">
                            <div className="aio-journal-thumb" style={{ background: 'linear-gradient(135deg, #d4a574, #8B6914)' }}></div>
                            <div className="aio-journal-thumb" style={{ background: 'linear-gradient(135deg, #e8c9a0, #c4956a)' }}></div>
                            <div className="aio-journal-thumb" style={{ background: 'linear-gradient(135deg, #a0c4e8, #6a8fb4)' }}></div>
                        </div>
                    </div>

                    {/* Detail card at bottom */}
                    <div className="aio-journal-detail">
                        <div className="aio-journal-detail-icon">📝</div>
                        <div>
                            <div className="aio-journal-detail-label">File of a lifetime</div>
                            <div className="aio-journal-detail-title">Consultant</div>
                        </div>
                    </div>
                </div>

                {/* ===== WARDROBE CARD ===== */}
                <div className="aio-card aio-card--wardrobe">
                    <img
                        src="/images/wardrobe-card-bg.png"
                        alt="Wardrobe - Fashion"
                        className="aio-card-bg"
                    />
                    <div className="aio-card-overlay"></div>
                    <div className="aio-card-label">Wardrobe</div>

                    {/* Floating wardrobe items */}
                    <div className="aio-wardrobe-items">
                        <div className="aio-wardrobe-price">00</div>
                        <div style={{ marginTop: '48px' }}></div>
                        <div className="aio-wardrobe-item">👡</div>
                        <div className="aio-wardrobe-item--circle" style={{ background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ fontSize: '24px' }}>👗</span>
                        </div>
                        <div className="aio-wardrobe-item">👜</div>
                        <div className="aio-wardrobe-item">💍</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllInOneApp;
