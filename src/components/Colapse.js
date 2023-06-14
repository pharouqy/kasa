import { useState } from "react";
import "../styles/about.css";
import vector from "../utils/vector.png";

const Colapse = ({ title, description }) => {
  const [open, isOPen] = useState(false);
  const hendelColapse = (e) => {
    e.preventDefault();
    isOPen(!open);
  };

  return (
    <article>
      <div onClick={hendelColapse}>
        <h2>{title}</h2>
        <img
          src={vector}
          alt="coche"
          className={`about-collapse ${open ? "open" : ""}`}
        />
      </div>
      {open && (
        <div className="about-collapse-content">
          <p>{description}</p>
        </div>
      )}
    </article>
  );
};

export default Colapse;
