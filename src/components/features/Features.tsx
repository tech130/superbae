import React from 'react';
import './features.css';
import Image from 'next/image';

const Features: React.FC = () => {
    const featuresData = [
        {
            id: 'club',
            title: 'Club',
            description: 'Discover events, make friends, and grow through communities you Love',
            imageSrc: '/images/mobile/iphone-15-pro.png',
        },
        {
            id: 'journal',
            title: 'Journal',
            description: 'Record your memories, reflections, and daily moments in one place',
            imageSrc: '/images/mobile/iphone-15-pro-1.png',
        },
        {
            id: 'wardrobe',
            title: 'Wardrobe',
            description: 'Organize your outfits, and always know exactly what to Wear',
            imageSrc: '/images/mobile/iphone-15-pro-2.png',
        }
    ];

    return (
        <section className="features-section">
            <div className="features-header">
                <h2 className="features-title">Everything You Need, All in One <br /> Place</h2>
                <p className="features-subtitle">Your lifestyle, simplified and beautifully managed</p>
            </div>

            <div className="features-grid">
                {featuresData.map((feature) => (
                    <div key={feature.id} className="feature-column">
                        <h3 className="feature-title">{feature.title}</h3>
                        <p className="feature-description">{feature.description}</p>
                        <div className="feature-image-wrapper">
                            <Image
                                src={feature.imageSrc}
                                alt={`${feature.title} feature`}
                                className="feature-image"
                                loading="lazy"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
