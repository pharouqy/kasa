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
    <article className={`dropdown ${!open ? "" : "opened"}`}>
      <div onClick={hendelColapse}>
        <h2>{title}</h2>
        <img
          src={vector}
          alt="coche"
          className={`about-collapse ${open ? "open" : "closed"}`}
        />
      </div>
      <div className={`${open ? "about-collapse-content" : "close"}`}>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default Colapse;
