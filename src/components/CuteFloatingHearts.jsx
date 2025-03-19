import React from 'react';
import '../styles/CuteFloatingHearts.css';

const CuteFloatingHearts = () => {
  // Create an array of hearts with randomized styles
  const hearts = Array.from({ length: 20 }).map((_, i) => ({
    left: Math.random() * 100,
    delay: Math.random() * 8,
    size: Math.random() * 20 + 20
  }));

  return (
    <div className="floating-hearts">
      {hearts.map((heart, i) => (
        <div
          key={i}
          className="heart"
          style={{
            left: `${heart.left}%`,
            animationDelay: `-${heart.delay}s`,
            width: `${heart.size}px`,
            height: `${heart.size}px`
          }}
        />
      ))}
    </div>
  );
};

export default CuteFloatingHearts;
