import React from 'react';
import '../styles/ScrollAnimations.css';

const ScrollAnimations = ({ name }) => {
  const isGif = name.endsWith('.gif');
  return (
    <div className="rotating-heart-container">
      <img
        src={isGif ? `/gifs/${name}` : `/images/${name}`}
        alt={name}
        className="rotating-heart-img"
      />
    </div>
  );
};

export default ScrollAnimations;
