import React from 'react';
import '../styles/ScrollAnimations.css';

const ScrollAnimations = ({ name }) => {
  return (
    <div className="rotating-heart-container">
      <img
        src={`/gifs/${name}`}
        alt="Spinning Heart"
        className="rotating-heart-img"
      />
    </div>
  );
};

export default ScrollAnimations;
