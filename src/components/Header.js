import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
            <li>
              <NavLink
                exact
                to="/"
                activeClassName="active"
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                activeClassName="active"
                onClick={toggleMenu}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/academics"
                activeClassName="active"
                onClick={toggleMenu}
              >
                Academics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admissions"
                activeClassName="active"
                onClick={toggleMenu}
              >
                Admissions
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faculty"
                activeClassName="active"
                onClick={toggleMenu}
              >
                Faculty
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/students"
                activeClassName="active"
                onClick={toggleMenu}
              >
                Students
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                activeClassName="active"
                onClick={toggleMenu}
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                activeClassName="active"
                onClick={toggleMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="menu-icon"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
