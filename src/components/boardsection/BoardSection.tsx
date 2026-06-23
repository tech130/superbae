import React from 'react';
import './boardsection.css';

const BoardSection: React.FC = () => {
    const floatingCards = [
        { id: 'c1', className: 'bs-float bs-float--tl1', title: 'Riding a bike...', content: 'Plan your goals & dreams', lines: 2 },
        { id: 'c2', className: 'bs-float bs-float--tl2', title: 'Daily Journal', content: 'Capture your thoughts', lines: 2 },
        { id: 'c3', className: 'bs-float bs-float--tr1', title: 'Track Progress', content: 'Stay on top of habits', lines: 2 },
        { id: 'c4', className: 'bs-float bs-float--tr2', title: 'Vision Board', content: 'Visualise your future', lines: 2 },
        { id: 'c5', className: 'bs-float bs-float--ml', label: 'Mood Board', content: 'Log how you feel every day', lines: 2 },
        { id: 'c6', className: 'bs-float bs-float--ml2', label: 'Dream Board', content: 'Pin the life you are building', lines: 2 },
        { id: 'c7', className: 'bs-float bs-float--mr1', label: 'Fantasy Board', content: 'Curate your wildest what-ifs', lines: 2 },
        { id: 'c8', className: 'bs-float bs-float--bl1', label: 'Achievement Board', content: 'Celebrate every win you earn', lines: 2 },
        { id: 'c9', className: 'bs-float bs-float--bl2', label: 'Idea Board', content: 'Spark & save brilliant ideas', lines: 2 },
        { id: 'c10', className: 'bs-float bs-float--br1', title: 'Self Care', content: 'Small steps, big wins', lines: 2 },
        { id: 'c11', className: 'bs-float bs-float--br2', title: 'Mood Check', content: 'How are you feeling today?', lines: 2 },
    ];


    return (
        <section className="bs-section">
            <div className="bs-inner">
                {/* Left Text */}
                <div className="bs-left">
                    <h2 className="bs-title">Shape Your Vision</h2>
                    <p className="bs-subtitle">
                        Save inspirations, plan your goals, organize your dreams,
                        <br />
                        and curate everything that motivates you—
                        <br />
                        beautifully and privately.
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
                        <div key={card.id} className={`bs-mini-card ${'className' in card ? card.className : ''}`}>
                            {/* Label (purple heading) or title */}
                            {'label' in card && card.label ? (
                                <div className="bs-mini-label">{card.label}</div>
                            ) : (
                                <div className="bs-mini-title">{card.title}</div>
                            )}
                            {/* Subtitle text */}
                            {'content' in card && card.content && (
                                <div className="bs-mini-content">{card.content}</div>
                            )}
                            {/* Decorative line bars */}
                            <div className="bs-mini-lines">
                                {Array.from({ length: card.lines }).map((_, i) => (
                                    <div key={i} className="bs-mini-line" style={{ width: `${72 - i * 14}%` }}></div>
                                ))}
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
