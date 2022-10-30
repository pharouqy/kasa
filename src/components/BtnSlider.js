import "../styles/slide.css";
import BtnNext from "../utils/next.png";
import BtnPrev from "../utils/previous.png";

const BtnSlider = ({ direction, moveSlide }) => {
  return (
    <div
      onClick={moveSlide}
      className={
        direction === "next" ? "btn-slide next btn" : "btn-slide prev btn"
      }
    >
      <img src={direction === "next" ? BtnNext : BtnPrev} alt="btn" />
    </div>
  );
};

export default BtnSlider;
