import "../styles/card.css";
import { Link } from "react-router-dom";

const Card = ({ cover, title, id }) => {
  return (
    <div className="card">
      <Link to={id}>
        <article className="article">
          <img src={cover} alt="kasa" className="photo" />
          <h2 className="sub-title">{title}</h2>
        </article>
      </Link>
    </div>
  );
};

export default Card;
