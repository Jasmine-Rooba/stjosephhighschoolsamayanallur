// src/components/Gallery.js
import React from 'react';
import './Gallery.css'; // Import the CSS file for styling

// Import images
import logo from '../images/logo.jpg';
import josephimage from '../images/josephimage.jpg';


const Gallery = () => {
  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <div className="gallery-grid">
        <img src={logo} alt="Gallery Image 1" className="gallery-item" />
        <img src={josephimage} alt="Gallery Image 2" className="gallery-item" />
      </div>
    </div>
  );
};

export default Gallery;
