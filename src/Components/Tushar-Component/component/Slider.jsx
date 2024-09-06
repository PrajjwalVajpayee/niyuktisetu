import React, { useEffect, useState } from 'react';
import "../App.css";

const AutoSlider = ({  interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
let images=[
    '../assets/1.jpeg',
    '../assets/1.jpeg',
    '../assets/1.jpeg'


];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [currentIndex, interval, images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider">
      <div className="slider-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <div className="slider-controls">
        {images.map((_, index) => (
          <button
            key={index}
            className={index === currentIndex ? 'active' : ''}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;
