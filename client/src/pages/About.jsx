import React from 'react';
import ContentSection from '../components/ContentSection';

const About = () => {
    return (
        <div className="container mt-5">
            <h1>About Shamzi Tours</h1>
            <p className="lead">Your trusted partner in travel and exploration.</p>
            
            <ContentSection 
                img="/images/brand png/vecteezy_top-view-of-travel-planning_1979257.jpg"
                title="Who We Are"
                text="Shamzi Tours is a premier travel agency dedicated to providing top-notch travel experiences. From flight bookings to visa assistance, holiday packages, and pilgrimage services, we cover it all. Our mission is to make travel accessible, affordable, and enjoyable for everyone."
            />

            <ContentSection 
                reverse={true}
                img="/images/shamzi.jpg" 
                title="Our Vision"
                text="To become the leading travel solution provider globally, known for our reliability, customer-centric approach, and innovative travel packages. We believe that travel is not just about moving from one place to another, but about creating lifelong memories."
            />
            
             <div className="text-center mt-5 mb-5 p-4 bg-light rounded">
                <h3>Our Core Values</h3>
                <div className="row mt-4">
                    <div className="col-md-4">
                        <i className="fas fa-check-circle fa-2x mb-2 text-success"></i>
                        <h5>Integrity</h5>
                        <p>We are transparent and honest in all our dealings.</p>
                    </div>
                    <div className="col-md-4">
                        <i className="fas fa-heart fa-2x mb-2 text-danger"></i>
                        <h5>Passion</h5>
                        <p>We are passionate about travel and delivering joy.</p>
                    </div>
                    <div className="col-md-4">
                        <i className="fas fa-users fa-2x mb-2 text-primary"></i>
                        <h5>Customer First</h5>
                        <p>Your satisfaction is our top priority.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
