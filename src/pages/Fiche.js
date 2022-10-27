import { useParams } from "react-router-dom";
import Tags from "../components/Tags";
import Profil from "../components/Profil";
import Colapse from "../components/Colapse";
import data from "../data.json";
import "../styles/fiche.css";

const Fiche = () => {
  const { idLog } = useParams();
  const dataHouse = data.filter((data) => data.id === idLog)[0];
  return (
    <main>
      <section>
        <p>Slider</p>
      </section>
      <section>
        <div>
          <h1>{dataHouse.title}</h1>
          <h2>{dataHouse.location}</h2>
          {dataHouse.tags.map((tag) => (
            <Tags key={Math.random() * 10} tag={tag} />
          ))}
        </div>
        <div>
          <Profil name={dataHouse.host.name} picture={dataHouse.host.picture} />
          <div>
            <span>etoiles</span>
          </div>
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
