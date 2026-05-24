import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
    return (
        <div className="hero">
            <Navbar />
            <div className="hero-content">
                <h1 className="animate-fade-in-up">Fly High, <br />Pay Low!</h1>
                <p className="animate-fade-in-up delay-1">Discover the Cheapest <br />Flight Tickets Today!</p>
                <div className="hero-buttons animate-fade-in-up delay-2">
                    <a href="/services" className="btn-primary">Explore Services</a>
                    <a href="/destinations" className="btn-secondary">Browse Destinations</a>
                </div>
            </div>
            <div className="scroll-indicator">
                <span></span>
            </div>
        </div>
    );
};

export default Hero;
