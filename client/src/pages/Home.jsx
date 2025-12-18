import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import LogoCarousel from '../components/LogoCarousel';
import ContentSection from '../components/ContentSection';

const Home = () => {
  return (
    <>
      <Hero />
      
      {/* Contact Bar - migrated from .contact div */}
      <div className="contact-bar">
          <p><i className="fa fa-phone"></i><a href="tel:+919633896904">+919633896904</a></p>
          <p><i className="fa-brands fa-instagram"></i><a href="https://www.instagram.com/shamzitours?igsh=NHEwa29qdm5tbDR6">@shamzitours</a></p>
          <p><i className="fa fa-envelope"></i><a href="mailto:infoshamzitours@gmail.com">infoshamzitours@gmail.com</a></p>
      </div>

      <Services />

      <LogoCarousel />

      <img className="slide-img" src="/images/brand png/—Pngtree—tourism travel lighthouse cloud_925651.jpg" alt="" style={{width: '100%', height: 'auto'}} />

      <ContentSection 
        img="/images/brand png/vecteezy_top-view-of-travel-planning_1979257.jpg"
        title={<>Discover new inspiration for <br />your next journey</>}
        text={<>Whether it's beautiful destinations or thrilling experiences,<br /> ignite your wanderlust and discover new <br />reasons to travel and explore.</>}
      />

      <div className="container" style={{background: 'none', padding: 0, width: '100%', maxWidth: '100%'}}>
         {/* Original had container wrapping this, but ContentSection has its own container style */}
        <ContentSection 
            reverse={true}
            img="/images/brand png/vecteezy_summer-vacation-nature-travel-beautiful-summer-landscape_6684243.JPG"
            title={<>Live with no excuses and <br />travel with no regrets</>}
            text={<>bringing your dream destinations closer to you with our meticulously curated itineraries. <br /> Our services are designed for every kind of <br /> traveler—not just travel but an experience.</>}
        />
      </div>


      <div className="quote">
        <h2>"The world is a book, and those who do not travel read only one page." </h2>
        <p> Every place visited adds a new chapter to life’s story.</p>
      </div>

      <div className="shamzi">
        <img src="/images/Shamzi1.png" alt="Shamzi Tours" />
      </div>
    </>
  );
};

export default Home;
