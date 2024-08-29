// src/components/Footer.js
import React from 'react';
import { AiFillPhone } from 'react-icons/ai';   // Phone icon
import { FaInstagram, FaYoutube } from 'react-icons/fa';  // Instagram and YouTube icons
import { MdEmail } from 'react-icons/md';  // Email icon
import { Link } from 'react-router-dom';
import footerImage from '../images/josephimage.jpg';
import { NavLink } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={footerImage} alt="School Logo" className="footer-logo" />
        <p>ST. JOSEPH HIGH SCHOOL SAMAYANALLUR</p>
        <ul className="footer-data">
          <p>Contact Us</p>
          <p><AiFillPhone /> +91 9942698742</p> {/* Phone number with icon */}
          <p><MdEmail /> stjosephhighschool054@gmail.com</p> {/* Email with icon */}
          <p>St. Joseph High School Samayanallur</p>
          <p>Madurai 625402</p>
        </ul>
        <div className="social-icons">
          <a href="https://www.instagram.com/stjosephhighschoolsamayanallur" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.youtube.com/@StJosephHighSchoolSamayanallur" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={24} />
          </a>
        </div>
        <div className="footer-line"></div> {/* Line under the image */}
        <p>&copy; {new Date().getFullYear()} St. Joseph High School Samayanallur. All rights reserved.</p>
        <ul className="footer-nav">
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms-of-service">Terms of Service</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
