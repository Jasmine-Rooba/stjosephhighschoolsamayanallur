import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
        <NavLink className="navbar-brand" to="/" exact>School</NavLink>
        <button className={`navbar-toggler ${isOpen ? 'open' : ''}`} type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
      <div className={`full-screen-menu ${isOpen ? 'open' : ''}`}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/about" exact activeClassName="active" onClick={toggleMenu}>About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/academics" exact activeClassName="active" onClick={toggleMenu}>Academics</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/admissions" exact activeClassName="active" onClick={toggleMenu}>Admissions</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/faculty" exact activeClassName="active" onClick={toggleMenu}>Faculty</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/students" exact activeClassName="active" onClick={toggleMenu}>Students</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/gallery" exact activeClassName="active" onClick={toggleMenu}>Gallery</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact" exact activeClassName="active" onClick={toggleMenu}>Contact</NavLink>
          </li>
        </ul>
      </div>
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
};

export default Navbar;
