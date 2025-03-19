import React from 'react';
import '../styles/CupidArrow.css';

const CupidArrow = () => {
  return (
    <div className="cupid-arrow">
      <svg width="50" height="50" viewBox="0 0 64 64">
        <line x1="0" y1="32" x2="64" y2="32" stroke="#ff6f91" strokeWidth="4" />
        <polygon points="64,32 50,22 50,42" fill="#ff6f91" />
      </svg>
    </div>
  );
};

export default CupidArrow;
