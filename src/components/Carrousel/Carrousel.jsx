import React, { useState } from "react";
import "./Carousel.css";
import chevronleftsolid from "../../assets/chevronleftsolid.svg";
import chevronrightsolid from "../../assets/chevronrightsolid.svg";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === images.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return images.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  return (
    <div className="carousel">
      {images.length > 1 && (
        <button onClick={prevSlide}>
          {" "}
          <img
            src={chevronleftsolid}
            alt="chevron a gauche"
            className="icone2"
          />{" "}
        </button>
      )}
      <img src={images[currentIndex].cover} alt="Slide" />
      <span>
        {currentIndex}/ {images.length}
      </span>
      {images.length > 1 && (
        <button onClick={nextSlide}>
          <img
            src={chevronrightsolid}
            alt="chevron a droite"
            className="icone1"
          />
        </button>
      )}
      {images.length > 1 && (
        <div className="indicators">
          {images.map((_, index) => (
            <div
              key={index}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
