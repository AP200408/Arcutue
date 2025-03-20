import React from 'react';
import '../styles/Grid.css';

const images = [
  '/images/grid1.jpg',
  '/images/grid2.jpg',
  '/images/grid6.jpg',
  '/images/grid3.jpg',
  '/images/grid7.jpg',
  '/images/grid4.jpg',
  '/images/grid8.jpg',
  '/images/grid5.jpg',
];

const Grid = () => {
  return (
    <div className="masonry">
      {images.map((src, index) => (
        <div className="masonry-item" key={index}>
          <img src={src} alt={`Masonry ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default Grid;
