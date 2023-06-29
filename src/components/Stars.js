import "../styles/stars.css";
import redStar from "../utils/red.png";
import greyStar from "../utils/grey.png";

const Stars = ({ rating }) => {
  let ratings = [];
  for (let i = 0; i < 5; i++) {
    if (i < parseInt(rating)) {
      ratings.push(redStar);
    } else {
      ratings.push(greyStar);
    }
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
