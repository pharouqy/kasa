import "../styles/card.css";

const Card = ({ cover, title, id }) => {
  return (
    <div className="card">
      <a href={id}>
        <article className="article">
          <img src={cover} alt="kasa" className="photo" />
          <h2 className="sub-title">{title}</h2>
        </article>
      </a>
    </div>
  );
};

export default Card;
