import React from 'react';
import './boardsection.css';

const BoardSection: React.FC = () => {
    const floatingCards = [
        { id: 'c1', className: 'bs-float bs-float--tl1', title: 'Riding a bike...', lines: 3 },
        { id: 'c2', className: 'bs-float bs-float--tl2', title: 'Riding a bike...', lines: 2 },
        { id: 'c3', className: 'bs-float bs-float--tr1', title: 'Riding a bike...', lines: 2 },
        { id: 'c4', className: 'bs-float bs-float--tr2', title: 'Riding a bike...', lines: 3 },
        { id: 'c5', className: 'bs-float bs-float--ml', title: 'Rocket Board', lines: 2, label: 'Rocket Board' },
        { id: 'c6', className: 'bs-float bs-float--ml2', title: 'Habit List', lines: 2, label: 'Habit List' },
        { id: 'c7', className: 'bs-float bs-float--mr1', title: 'Inspiration Board', lines: 2, label: 'Inspiration Board' },
        { id: 'c8', className: 'bs-float bs-float--bl1', title: 'Riding a bike...', lines: 3 },
        { id: 'c9', className: 'bs-float bs-float--bl2', title: 'Adventure Board', lines: 2, label: 'Adventure Board' },
        { id: 'c10', className: 'bs-float bs-float--br1', title: 'Future Goals', lines: 2, label: 'Future Goals' },
        { id: 'c11', className: 'bs-float bs-float--br2', title: 'Riding a bike...', lines: 2 },
    ];

    return (
        <section className="bs-section">
            <div className="bs-inner">
                {/* Left Text */}
                <div className="bs-left">
                    <h2 className="bs-title">Board Section</h2>
                    <p className="bs-subtitle">
                        Save What Inspires You Today And<br />
                        Visualize What You're Building For<br />
                        Tomorrow.
                    </p>
                </div>

                {/* Right — Phone + Floating Cards */}
                <div className="bs-right">
                    {/* Concentric Arc Background */}
                    <div className="bs-arcs">
                        <div className="bs-arc bs-arc--1"></div>
                        <div className="bs-arc bs-arc--2"></div>
                        <div className="bs-arc bs-arc--3"></div>
                    </div>

                    {/* Floating mini-cards */}
                    {floatingCards.map((card) => (
                        <div key={card.id} className={`bs-mini-card ${card.className}`}>
                            {card.label && (
                                <div className="bs-mini-label">{card.label}</div>
                            )}
                            {!card.label && (
                                <div className="bs-mini-title">{card.title}</div>
                            )}
                            <div className="bs-mini-lines">
                                {Array.from({ length: card.lines }).map((_, i) => (
                                    <div key={i} className="bs-mini-line" style={{ width: `${75 - i * 15}%` }}></div>
                                ))}
                            </div>
                            <div className="bs-mini-dots">
                                <span className="bs-dot bs-dot--red"></span>
                                <span className="bs-dot bs-dot--blue"></span>
                                <span className="bs-dot bs-dot--green"></span>
                            </div>
                        </div>
                    ))}

                    {/* Centre Phone Mockup */}
                    <div className="bs-phone">
                        <div className="bs-phone-notch"></div>
                        <div className="bs-phone-screen">
                            {/* Profile Header */}
                            <div className="bs-profile-header">
                                <div className="bs-avatar">
                                    <div className="bs-avatar-img">JF</div>
                                </div>
                                <div className="bs-profile-info">
                                    <div className="bs-profile-name">Jasmin Fernandes</div>
                                    <div className="bs-profile-icons">✏️ 🔗 📸</div>
                                </div>
                            </div>
                            {/* About */}
                            <div className="bs-phone-section-label">About</div>
                            <div className="bs-phone-text">
                                A passionate and curious individual who enjoys learning, creating, and exploring new opportunities. Known for positive mindset, strong work ethic...
                            </div>
                            {/* Gallery */}
                            <div className="bs-phone-section-label">Gallery</div>
                            <div className="bs-gallery-tabs">
                                <span className="bs-tab bs-tab--active">All</span>
                                <span className="bs-tab">Photos</span>
                                <span className="bs-tab">Videos</span>
                                <span className="bs-tab">Boards</span>
                            </div>
                            <div className="bs-gallery-grid">
                                <div className="bs-gallery-item bs-gallery-item--blue"></div>
                                <div className="bs-gallery-item bs-gallery-item--sky"></div>
                                <div className="bs-gallery-item bs-gallery-item--ocean"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BoardSection;
