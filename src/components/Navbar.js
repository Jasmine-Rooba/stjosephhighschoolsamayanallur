import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // Custom CSS for the mobile view

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <Link className="navbar-brand" to="/">School</Link>
        <button className={`navbar-toggler ${isOpen ? 'open' : ''}`} type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
      <div className={`full-screen-menu ${isOpen ? 'open' : ''}`}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/about" onClick={toggleMenu}>About Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/academics" onClick={toggleMenu}>Academics</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admissions" onClick={toggleMenu}>Admissions</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/faculty" onClick={toggleMenu}>Faculty</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/students" onClick={toggleMenu}>Students</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/gallery" onClick={toggleMenu}>Gallery</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact" onClick={toggleMenu}>Contact Us</Link>
          </li>
        </ul>
      </div>
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
};

export default Navbar;
