import React, { useState, useEffect } from 'react';
import ImageSlider from './ImageSlider';
import logo from '../images/logo.jpg';
import photo2 from '../images/photo2.jpg';
import photo4 from '../images/photo4.jpg';
import photo5 from '../images/photo5.jpg';
import photo6 from '../images/photo6.jpg';
import photo7 from '../images/photo7.jpg';
import photo8 from '../images/photo8.jpg';
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
  const images = [
    photo2,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8
  ];

  const [dateTime, setDateTime] = useState(new Date());
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    // Simulate a count, this could be replaced with a real API call
    setCount(150); // Example: Replace 150 with a real count
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-page">
      <div>
        <h1>St. Joseph's High School Samayanallur</h1>
        <h6>பிறர் பணி புரி சுரர் முடி தறி</h6>
      </div>
      <section className="slider-section">
        <h2>School Images</h2>
        <ImageSlider images={images} />
      </section>
      <div className="box box-two">
        <div className="highlight-container">
          <img src={logo} alt="logo" className="highlight-image" />
          <p className="name-box">REV.FR.MARTIN JOSEPH</p>
          <p className="name-box2">CORRESPONDENT</p>
        </div>
      </div>
      <div className="box box-three">
        <div className="highlight-container">
          <img src={logo} alt="logo" className="highlight-image" />
          <p className="name-box">LAWRENCE EDWIN BABU.G</p>
          <p className="name-box2">HEAD MASTER</p>
        </div>
        </div>
         {/* 3 Card Panel */}
        <div className="card-panel">
          <div className="card">
            <h3>Date & Time</h3>
            <p>{dateTime.toLocaleString()}</p>
          </div>
          <div className="card">
            <h3>Opening Hours</h3>
            <p>Mon - Fri: 9:00 AM - 3:30 PM</p>
            <p>Sat: 9:00 AM - 1:00 PM</p>
          </div>
          <div className="card">
            <h3>Student Count</h3>
            <p></p>
          </div>
      </div>
    </div>
  );
};

export default HomePage;
