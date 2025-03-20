import React, { useState } from 'react';
import '../styles/SendLoveButton.css';

const SendLoveButton = () => {
  const [burstHearts, setBurstHearts] = useState([]);

  const handleClick = () => {
    const hearts = Array.from({ length: 30 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: Math.random() * 1 + 1
    }));
    setBurstHearts(hearts);
    setTimeout(() => {
      setBurstHearts([]);
    }, 3000);
  };

  return (
    <>
      <button className="send-love-button" onClick={handleClick}>
        Send Love!
      </button>
      <div className="heart-burst">
        {burstHearts.map((heart, i) => (
          <div
            key={i}
            className="burst-heart"
            style={{
              left: `${heart.left}%`,
              top: `${heart.top}%`,
              animationDelay: `${heart.delay}s`,
              animationDuration: `${heart.duration}s`
            }}
          />
        ))}
      </div>
    </>
  );
};

export default SendLoveButton;
