import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="socialIcons">
          <a href="#"><i className="fa-brands fa-facebook"></i></a>
          <a href="mailto:infoshamzitours@gmail.com"><i className="fa-brands fa-google-plus"></i></a>
          <a href="https://wa.me/+919633896904"><i className="fa-brands fa-whatsapp"></i></a>
          <a href="https://www.instagram.com/shamzitours?igsh=NHEwa29qdm5tbDR6"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-x"></i></a>
        </div>
        <div className="footerNav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/destinations">Destinations</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/connect">Connect</a></li>
          </ul>
        </div>
        <div className="footerBottom">
          <p>Copyright &copy;Shamzi Tours&travels 2025 DUBAI I INDIA <br /> <span className="designer">Designed by Goldenberry</span></p>
          <p id="phone"><i className="fa fa-phone"></i><a href="tel:+919633896904" style={{ color: '#a39f9f', textDecoration: 'none' }}>+919633896904</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
