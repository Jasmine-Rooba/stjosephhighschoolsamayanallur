import React from 'react';
import logo from '../images/logo.jpg'; // Adjust the path if necessary
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
  return (
    <div className="home-page">
      <div>
        <h1>St. Joseph's High School Samayanallur</h1>
        <h6>பிறர் பணி புரி சுரர் முடி தறி</h6>
      </div>
      <div className="box box-two">
        <div className="highlight-container">
          <img src={logo} alt="logo" className="highlight-image"/>
          <p className="name-box">REV.FR.MARTIN JOSEPH </p>
          <p className="name-box2">CORRESPONDENT</p>
        </div>
      </div>
      <div className="box box-three">
        <div className="highlight-container">
          <img src={logo} alt="logo" className="highlight-image"/>
          <p className="name-box">LAWRENCE EDWIN BABU.G </p>
          <p className="name-box2">HEAD MASTER</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
