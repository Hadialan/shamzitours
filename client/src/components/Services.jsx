import React, { useState } from 'react';

const serviceData = [
    { 
        id: 1,
        title: "UMRA SERVICE", 
        text: "Easy steps with us", 
        img: "/images/makkah.jpg", 
        alt: "Umrah Service",
        icon: "fa-kaaba"
    },
    { 
        id: 2,
        title: "VISIT VISA", 
        text: "Getting fast through our easy services", 
        img: "/images/mix.jpg", 
        alt: "Visit Visa",
        icon: "fa-passport"
    },
    { 
        id: 3,
        title: "EMBASSY ATTESTATION", 
        text: "We provide all embassy attestations", 
        img: "/images/embassy.jpg", 
        alt: "Embassy Attestation",
        icon: "fa-stamp"
    },
    { 
        id: 4,
        title: "PASSPORT SERVICES", 
        text: "We support you to take passport easily", 
        img: "/images/Untitled-1.jpg", 
        alt: "Passport Services",
        icon: "fa-id-card"
    },
    { 
        id: 5,
        title: "SPECIAL STUDENTS FARE", 
        text: "Special Students Fare available to any countries", 
        img: "/images/vissa.jpg", 
        alt: "Student Fare",
        icon: "fa-graduation-cap"
    },
    { 
        id: 6,
        title: "FLIGHT TICKETS", 
        text: "Try to get your ticket with best price", 
        img: "/images/aircraft-cabin-5535467_1920.jpg", 
        alt: "Flight Tickets",
        icon: "fa-plane"
    }
];

const Services = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <section className="services-section">
            <div className="services-header">
                <h1 className="Services">Our Premium Services</h1>
                <p className="services-subtitle">Discover what we offer to make your travel seamless</p>
            </div>
            <div className="services-container">
                {serviceData.map((service) => (
                    <div 
                        className={`service-card ${hoveredCard === service.id ? 'hovered' : ''}`} 
                        key={service.id}
                        onMouseEnter={() => setHoveredCard(service.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <div className="service-image-wrapper">
                            <img src={service.img} className="service-img" alt={service.alt} />
                            <div className="service-icon">
                                <i className={`fas ${service.icon}`}></i>
                            </div>
                        </div>
                        <div className="service-body">
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-text">{service.text}</p>
                            <button className="service-btn">Learn More</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
