import React, { useEffect, useRef } from 'react';
import '../styles/HeartsParticles.css';

const HeartsParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let particlesArray = [];
    const numberOfParticles = 100;

    function drawHeart(x, y, size, color) {
      ctx.save();
      ctx.translate(x, y);
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(0, size / 4);
      ctx.bezierCurveTo(0, -size / 2, -size, -size / 2, -size, size / 4);
      ctx.bezierCurveTo(-size, size / 2, 0, size, 0, size * 1.3);
      ctx.bezierCurveTo(0, size, size, size / 2, size, size / 4);
      ctx.bezierCurveTo(size, -size / 2, 0, -size / 2, 0, size / 4);
      ctx.fill();
      ctx.restore();
    }

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 10 + 10;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = 'rgba(255,105,180,0.7)';
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }
      draw() {
        drawHeart(this.x, this.y, this.size, this.color);
      }
    }

    function init() {
      particlesArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      particlesArray.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    }

    init();
    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas className="hearts-canvas" ref={canvasRef} />;
};

export default HeartsParticles;
