import React from 'react';
import logo from '../images/logo.jpg'; // Adjust the path if necessary

const HomePage = () => {
  return (
    <div className="home-page">
            <img src={logo} alt="School Logo" className="header-logo" />
            <h1>Welcome to Our St. Joseph High School Samayanallur</h1>
            <p>Providing quality education for over 50 years.</p>
    </div>
  );
};

export default HomePage;
