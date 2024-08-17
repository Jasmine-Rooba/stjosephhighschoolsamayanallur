import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg'; // Adjust the path if necessary
import './Header.css';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
       <img src={logo} alt="School Logo" className="header-logo" />
        <h1 className="logo">St.Joseph High School Samayanallur</h1>
        <nav className="nav">
          <ul className={menuOpen ? 'show-menu' : ''}>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
            <li><Link to="/academics" onClick={toggleMenu}>Academics</Link></li>
            <li><Link to="/admissions" onClick={toggleMenu}>Admissions</Link></li>
            <li><Link to="/faculty" onClick={toggleMenu}>Faculty</Link></li>
            <li><Link to="/students" onClick={toggleMenu}>Students</Link></li>
            <li><Link to="/gallery" onClick={toggleMenu}>Gallery</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
          </ul>
        </nav>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span className="menu-icon"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
