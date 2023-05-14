import React from "react";
import bg from "../utils/bg.png";
import bgAbout from "../utils/bg-about.png";

const Banniere = ({ title = false }) => {
  return title ? (
    <section>
      <div className="overlay">
        <img src={bg} alt="background" />
        <h1>{title}</h1>
      </div>
    </section>
  ) : (
    <section>
      <div className="overlay">
        <img src={bgAbout} alt="background" />
      </div>
    </section>
  );
};

export default Banniere;
