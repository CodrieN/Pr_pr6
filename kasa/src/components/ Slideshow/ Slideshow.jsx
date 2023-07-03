import React, { useState } from "react";
import "./Slideshow.scss";

function Slideshow({ imgSrc, imgId, imgAlt, pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const lastIndex = pictures.length - 1;
    setCurrentIndex((prevIndex) => (prevIndex === lastIndex ? 0 : prevIndex + 1));
  };

  const previousSlide = () => {
    const lastIndex = pictures.length - 1;
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? lastIndex : prevIndex - 1));
  };

  return (
    <div className="slideshow">
      <div className="slides-container">
        <img className="slide" src={imgSrc} id={imgId} alt={imgAlt} />
        {pictures.map((picture, index) => (
          <img
            className={`slide ${index === currentIndex ? "active" : ""}`}
            src={picture}
            key={index}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>
      <button className="previous-button" onClick={previousSlide}>
        <i className="fa-solid fa-chevron-up fa-rotate-90"></i>
      </button>
      <button className="next-button" onClick={nextSlide}>
        <i className="fa-solid fa-chevron-up fa-rotate-270"></i>
      </button>
    </div>
  );
}

export default Slideshow;
