import React, { useState } from 'react';

const LogoCarousel = () => {
    const logos = [
        { src: "/images/brand png/Air-India-Logo.png", name: "Air India" },
        { src: "/images/brand png/Air-Arabia-logo.png", name: "Air Arabia" },
        { src: "/images/brand png/Qatar-Airways-Logo.png", name: "Qatar Airways" },
        { src: "/images/brand png/Saudi-Arabian-Airlines-Logo.png", name: "Saudi Airlines" },
        { src: "/images/brand png/SpiceJet-Logo.png", name: "SpiceJet" },
        { src: "/images/brand png/668e60a9847a2841c9ada842 (1).png", name: "Emirates" },
        { src: "/images/brand png/expess.png", name: "Express" },
        { src: "/images/brand png/salamair.png", name: "Salam Air" }
    ];
    
    const [isPaused, setIsPaused] = useState(false);
    
    return (
        <section className="partners-section">
            <h2 className="partners-title">Our Trusted Airline Partners</h2>
            <div 
                className="carousel-container"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div className={`carousel-track ${isPaused ? 'paused' : ''}`}>
                    {logos.concat(logos).map((logo, index) => (
                        <div key={index} className="carousel-item">
                            <img src={logo.src} alt={logo.name} />
                            <span className="logo-tooltip">{logo.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogoCarousel;
