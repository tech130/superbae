"use client"; // optional – remove if you don't need client‑side features

import React from "react";
import Image from "next/image";
import "./features.css"; // keep your existing styles

interface Feature {
    id: string;
    title: string;
    description: string;
    imageSrc: string;
}

const Features: React.FC = () => {
    const featuresData: Feature[] = [
        {
            id: "club",
            title: "Club",
            description:
                "Discover events, make friends, and grow through communities you Love",
            imageSrc: "/images/mobile/iPhone-15-pro.png",
        },
        {
            id: "journal",
            title: "Journal",
            description:
                "Record your memories, reflections, and daily moments in one place",
            imageSrc: "/images/mobile/iPhone-15-pro-1.png",
        },
        {
            id: "wardrobe",
            title: "Wardrobe",
            description:
                "Organize your outfits, and always know exactly what to Wear",
            imageSrc: "/images/mobile/iPhone-15-pro-2.png",
        },
    ];

    return (
        <section className="features-section">
            <div className="features-header">
                <h2 className="features-title">
                    Everything You Need, All in One <br /> Place
                </h2>
                <p className="features-subtitle">
                    Your lifestyle, simplified and beautifully managed
                </p>
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
                                width={300}        // adjust based on your design
                                height={600}       // adjust based on your design
                                className="feature-image" // keep your existing class
                                style={{ width: "100%", height: "auto" }} // makes it responsive
                                loading="lazy"     // keep lazy loading (or remove if you want)
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;