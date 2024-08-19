import React from 'react';
import ImageSlider from './ImageSlider'
import logo from '../images/logo.jpg';
import photo1 from '../images/photo1.jpg';
import photo2 from '../images/photo2.jpg';
import photo3 from '../images/photo3.jpg';
import photo4 from '../images/photo4.jpg';
import photo5 from '../images/photo5.jpg';
import photo6 from '../images/photo6.jpg';
import photo7 from '../images/photo7.jpg';
import photo8 from '../images/photo8.jpg';
import photo9 from '../images/photo9.jpg';

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
