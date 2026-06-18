import React, { useState, useEffect } from 'react';
import './hero.css';

const PhoneImage: React.FC = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setRotation(currentScroll * 0.05);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="hero_phone-section">
      <div className="hero_phone-container">
        {/* Phone mockup */}
        <div
          data-video="playpause"
          className="hero_phone"
          style={{
            transform: `perspective(1000px) translate3d(0px, 9px, 0px) rotateY(${rotation}deg)`,
            opacity: 1,
            visibility: "inherit",
            transition: "transform 0.1s ease-out",
            transformStyle: "preserve-3d",
          }}
        >
          <img loading="eager" src="/images/phone-bg.png" alt="Mobile-banner" />
        </div>
      </div>
    </div>
  );
};

export default PhoneImage;
