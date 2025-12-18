import React from 'react';

const LogoCarousel = () => {
    // Note: Paths adjusted for public folder
    const logos = [
        "/images/brand png/Air-India-Logo.png",
        "/images/brand png/Air-Arabia-logo.png",
        "/images/brand png/Qatar-Airways-Logo.png",
        "/images/brand png/Saudi-Arabian-Airlines-Logo.png",
        "/images/brand png/SpiceJet-Logo.png",
        "/images/brand png/668e60a9847a2841c9ada842 (1).png",
        "/images/brand png/expess.png",
        "/images/brand png/salamair.png"
    ];

    return (
        <div className="carousel-container">
            <div className="carousel-track">
                {/* Double the logos to create seamless loop */}
                {logos.concat(logos).map((logo, index) => (
                    <img key={index} src={logo} alt={`Brand ${index}`} />
                ))}
            </div>
        </div>
    );
};

export default LogoCarousel;
