import React, { useState } from 'react';
import './Gallery.css';
import { getGalleryImages, getSportsMeetImages, getAnnualDayImages,getSportsDayImages } from './helpers/imageHelpers'; // Import both helper functions

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null); // State for the selected image
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const galleryImages = getGalleryImages(); // Get images for the gallery section
  const sportsMeetImages = getSportsMeetImages(); // Get images for the sports meet section
  const annualDayImages = getAnnualDayImages();
  const sportsDayImages = getSportsDayImages();

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      <h6>READING NOVEL FEST 2023</h6>
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <img 
              src={image} 
              alt={`Gallery Image ${index + 1}`} 
              onClick={() => openModal(image)} // Open modal on click
            />
          </div>
        ))}
      </div>

      <h6>SPORTS MEET MARS 2023</h6>
      <div className="gallery-grid">
        {sportsMeetImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <img 
              src={image} 
              alt={`Sports Meet Image ${index + 1}`} 
              onClick={() => openModal(image)} // Open modal on click
            />
          </div>
        ))}
      </div>

       <h6>ANNUAL DAY</h6>
      <div className="gallery-grid">
        {annualDayImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <img 
              src={image} 
              alt={`Annual Day Image ${index + 1}`} 
              onClick={() => openModal(image)} // Open modal on click
            />
          </div>
        ))}
      </div>

       <h6>SPORTS DAY</h6>
      <div className="gallery-grid">
        {sportsDayImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <img 
              src={image} 
              alt={`Sports Day Image ${index + 1}`} 
              onClick={() => openModal(image)} // Open modal on click
            />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            <img src={selectedImage} alt="Selected" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
