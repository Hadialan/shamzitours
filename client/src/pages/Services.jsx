import React from 'react';
import ServicesComponent from '../components/Services'; // Reusing the component we made

const Services = () => {
  return (
    <div className="page-container">
      <div className="container mt-5">
        <h1>Our Services</h1>
        <p className="lead">We provide a wide range of travel services to make your journey comfortable and memorable.</p>
        <hr />
      </div>
      
      {/* Reusing the Services component from Home */}
      <ServicesComponent />

      <div className="container mt-5 mb-5">
        <h3>Why Choose Us?</h3>
        <ul>
            <li>24/7 Customer Support</li>
            <li>Best Price Guarantee</li>
            <li>Experienced Travel Agents</li>
            <li>Customized Tour Packages</li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
