import { useEffect, useState } from "react";
import "../styles/about.css";
import vector from "../utils/vector.png";

const Colapse = ({ title, description }) => {
  const [open, isOPen] = useState(false);
  const [rotate, setRotate] = useState("180deg");
  const hendelColapse = (e) => {
    e.preventDefault();
    isOPen(!open);
  };
  useEffect(() => {
    const element = document.querySelector(`.${title}`);
    if (open) {
      setRotate("0deg");
      element.style.transform = `rotate(${rotate})`;
    } else {
      setRotate("180deg");
      element.style.transform = `rotate(${rotate})`;
    }
  }, [open, isOPen, rotate, title]);
  return (
    <article>
      <div onClick={hendelColapse}>
        <h2>{title}</h2>
        <img src={vector} alt="coche" className={title} />
      </div>
      {open && (
        <div>
          <p>{description}</p>
        </div>
      )}
    </article>
  );
};

export default Colapse;
