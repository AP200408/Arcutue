import React from 'react';
import '../styles/ImageModal.css';

const ImageModal = ({ imageSrc, onClose }) => {
  if (!imageSrc) return null;

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>X</button>
        <img src={imageSrc} alt="Magnified view" />
      </div>
    </div>
  );
};

export default ImageModal;
