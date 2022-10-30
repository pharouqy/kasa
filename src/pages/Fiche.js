import { useParams } from "react-router-dom";
import Tags from "../components/Tags";
import Profil from "../components/Profil";
import Stars from "../components/Stars";
import Colapse from "../components/Colapse";
import Slide from "../components/Slide";
import data from "../data.json";
import "../styles/fiche.css";
import star from "../utils/red.png";

const Fiche = () => {
  const { idLog } = useParams();
  const dataHouse = data.filter((data) => data.id === idLog)[0];
  return (
    <main>
      <Slide pictures={dataHouse.pictures} />
      <section>
        <div>
          <h1>{dataHouse.title}</h1>
          <h2>{dataHouse.location}</h2>
          <div>
            {dataHouse.tags.map((tag) => (
              <Tags key={Math.random() * 10} tag={tag} />
            ))}
          </div>
        </div>
        <div>
          <Profil name={dataHouse.host.name} picture={dataHouse.host.picture} />
          <aside>
            <div>
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
            <Stars rating={dataHouse.rating} />
          </aside>
        </div>
      </section>
      <section>
        <Colapse
          title="Description"
          description={dataHouse.description}
          className="ficheColapse"
        />
        <Colapse
          title="Équipements"
          description={dataHouse.equipments.map((list) => {
            return <ul>{list}</ul>;
          })}
          className="ficheColapse"
        />
      </section>
    </main>
  );
};

export default Fiche;
