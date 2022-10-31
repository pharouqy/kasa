import { useState } from "react";
import BtnSlider from "./BtnSlider";
import "../styles/slide.css";

const Slide = ({ pictures }) => {
  const [slideIndex, setSlideIndex] = useState(1);
  const nextSlide = () => {
    if (slideIndex !== pictures.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === pictures.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(pictures.length);
    }
  };
  return (
    <div className="container-slider">
      {pictures.map((image, index) => {
        return (
          <div
            key={index}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={image} alt="slideshow" />
          </div>
        );
      })}
      {pictures.length !== 1 && (
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      )}
      {pictures.length !== 1 && (
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
      )}
      <div className="compteur-container">
        <span>{`${pictures.length}/${slideIndex}`}</span>
      </div>
    </div>
  );
};

export default Slide;
