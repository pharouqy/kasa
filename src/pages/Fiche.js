import { useParams, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Tags from "../components/Tags";
import Profil from "../components/Profil";
import Stars from "../components/Stars";
import Colapse from "../components/Colapse";
import Slide from "../components/Slide";
import data from "../data.json";
import "../styles/fiche.css";
import star from "../utils/red.png";
import Errors from "./404";

const Fiche = () => {
  const location = useLocation();
  const { pathname } = location;
  const { idLog } = useParams(); // Permet de récuperer le parametre id de l'url
  const [dataHouse, setDataHouse] = useState(
    data.filter((data) => data.id === idLog)[0] //  .find()
  );
  useEffect(() => {
    setDataHouse(dataHouse);
  }, [dataHouse, pathname]);
  return dataHouse ? (
    <main>
      <Slide pictures={dataHouse.pictures} />
      <section>
        <div>
          <h1>{dataHouse.title}</h1>
          <h2>{dataHouse.location}</h2>
          <div>
            {dataHouse.tags.map((tag, index) => (
              <Tags key={index} tag={tag} />
            ))}
          </div>
        </div>
        <div>
          <Profil name={dataHouse.host.name} picture={dataHouse.host.picture} />
          <aside>
            <Stars rating={dataHouse.rating} />
          </aside>
        </div>
      </section>
      <section>
        <Colapse
          title="Description"
          description={dataHouse.description}
        />
        <Colapse
          title="Équipements"
          description={dataHouse.equipments.map((list) => {
            return <ul>{list}</ul>;
          })}
        />
      </section>
    </main>
  ) : (
    <Navigate to="/error" replace={<Errors />} />
  );
};

export default Fiche;
