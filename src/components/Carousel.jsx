import React, { useEffect, useRef, useState } from 'react';
import Glider from 'glider-js';
import 'glider-js/glider.min.css';
import '../styles/Carousel.css';
import ImageModal from './ImageModal.jsx';

const images = [
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
  '/images/image4.jpg',
  '/images/image5.jpg',
];

const Carousel = () => {
  const sliderRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (sliderRef.current) {
      new Glider(sliderRef.current, {
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: true,
        dots: '.dots',
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        },
        scrollLock: true
      });
    }
  }, []);

  return (
    <div>
      <div className="glider-contain">
        <button className="glider-prev">«</button>
        <div className="glider" ref={sliderRef}>
          {images.map((src, index) => (
            <div className="glider-slide" key={index}>
              <img 
                src={src} 
                alt={`Slide ${index + 1}`} 
                onClick={() => setSelectedImage(src)} 
              />
            </div>
          ))}
        </div>
        <button className="glider-next">»</button>
        <div className="dots"></div>
        <div className="thumbnails">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Thumbnail ${index + 1}`}
              className="thumbnail"
              onClick={() => {
                if (sliderRef.current && sliderRef.current.glider) {
                  sliderRef.current.glider.scrollItem(index);
                }
                setSelectedImage(src);
              }}
            />
          ))}
        </div>
      </div>
      {selectedImage && (
        <ImageModal imageSrc={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
};

export default Carousel;
