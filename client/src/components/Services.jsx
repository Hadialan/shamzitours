import React from 'react';

const serviceData = [
    { title: "UMRA SERVICE", text: "Easy steps with us", img: "/images/makkah.jpg", alt: ".makkah.." },
    { title: "VISIT VISA", text: "Getting fast through our easy services", img: "/images/mix.jpg", alt: "..." },
    { title: "EMBASSY ATTESTION", text: "We provide all embassy attestations", img: "/images/embassy.jpg", alt: "..." },
    { title: "PASSPORT SERVICES", text: "We support you to take passport easily", img: "/images/Untitled-1.jpg", alt: "..." },
    { title: "SPECIAL STUDENTS FARE", text: "Special Students Fare available to any countries", img: "/images/vissa.jpg", alt: "..." },
    { title: "FLIGHT TICKETS", text: "Try to get your ticket with best price", img: "/images/aircraft-cabin-5535467_1920.jpg", alt: "..." }
];

const Services = () => {
    return (
        <>
            <div>
                <h1 className="Services">SERVICES</h1>
            </div>
            <div className="container mt-5">
                <div className="row">
                    {serviceData.map((service, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card">
                                <img src={service.img} className="card-img-top" alt={service.alt} />
                                <div className="card-body">
                                    <h5 className="card-title">{service.title}</h5>
                                    <p className="card-text">{service.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Services;
