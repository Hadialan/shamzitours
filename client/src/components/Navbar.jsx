import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <ul className="nav-bar">
                <li className="logo">
                    <Link to="/">
                        <img src="/images/Untitled-1.png" alt="shamzi" className="logo" />
                    </Link>
                </li>
                
                {/* Mobile Menu Icon */}
                <div onClick={toggleMenu} className="open-menu">
                    <i className="fas fa-bars"></i>
                </div>

                <div className={`menu ${isOpen ? 'active' : ''}`}>
                    <li onClick={() => setIsOpen(false)}><Link to="/">Home</Link></li>
                    <li onClick={() => setIsOpen(false)}><Link to="/services">Services</Link></li>
                    <li onClick={() => setIsOpen(false)}><Link to="/destinations">Destinations</Link></li>
                    <li onClick={() => setIsOpen(false)}><Link to="/about">About</Link></li>
                    <li onClick={() => setIsOpen(false)}><Link to="/connect">Connect</Link></li>
                    
                    <div onClick={toggleMenu} className="close-menu">
                        <i className="fas fa-times"></i>
                    </div>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;
