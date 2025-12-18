import React, { useState } from 'react';

const Connect = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for contacting us! We will get back to you shortly.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="container mt-5 mb-5">
            <h1 className="text-center mb-4">Connect With Us</h1>
            
            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="p-4 bg-white shadow rounded h-100">
                        <h3>Get in Touch</h3>
                        <p>Have questions? We'd love to hear from you.</p>
                        
                        <div className="mt-4">
                            <p><i className="fas fa-map-marker-alt me-2 text-danger"></i> Dubai | India</p>
                            <p><i className="fas fa-phone me-2 text-success"></i> <a href="tel:+919633896904" className="text-dark text-decoration-none">+919633896904</a></p>
                            <p><i className="fas fa-envelope me-2 text-primary"></i> <a href="mailto:infoshamzitours@gmail.com" className="text-dark text-decoration-none">infoshamzitours@gmail.com</a></p>
                        </div>

                        <div className="mt-4">
                             <h5>Follow Us</h5>
                             <div className="socialIcons" style={{justifyContent: 'flex-start'}}>
                                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                                <a href="https://wa.me/+919633896904"><i className="fa-brands fa-whatsapp"></i></a>
                                <a href="https://www.instagram.com/shamzitours?igsh=NHEwa29qdm5tbDR6"><i className="fa-brands fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mb-4">
                    <div className="p-4 bg-white shadow rounded h-100">
                        <h3>Send us a Message</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Subject</label>
                                <input type="text" className="form-control" name="subject" value={formData.subject} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Message</label>
                                <textarea className="form-control" rows="4" name="message" value={formData.message} onChange={handleChange} required></textarea>
                            </div>
                            <button type="submit" className="btn btn-dark w-100">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Connect;
