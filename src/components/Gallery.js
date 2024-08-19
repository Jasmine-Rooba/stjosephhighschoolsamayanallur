import React, { useState } from 'react';
import './Gallery.css';

// Import images
import bookFest from '../images/bookfest.jpg';
import photo1 from '../images/photo1.jpg';
import photo2 from '../images/photo2.jpg';
import photo3 from '../images/photo3.jpg';
import photo4 from '../images/photo4.jpg';
import photo5 from '../images/photo5.jpg';
import photo6 from '../images/photo6.jpg';
import photo7 from '../images/photo7.jpg';
import photo8 from '../images/photo8.jpg';
import photo9 from '../images/photo9.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null); // State for the selected image
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const images = [
    bookFest,
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9
  ];

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
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img 
              src={image} 
              alt={`Gallery Image ${index + 1}`} 
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
