import "../styles/stars.css";
import star from "../utils/red.png";

const Stars = ({ rating }) => {
  let ratings = [];
  for (let i = 0; i < parseInt(rating); i++) {
    ratings.push(star);
  }
  return (
    <div className="stars_reds">
      {ratings.map((star, index) => (
        <img key={index} src={star} alt="star_red" />
      ))}
    </div>
  );
};

export default Stars;
