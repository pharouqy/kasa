import "../styles/home.css";
import Card from "../components/Card";
import data from "../data.json";
import Banniere from "../components/Banniere";

const Home = () => {
  return (
    <div>
      <Banniere title={"Chez vous, partout et ailleurs"} />
      <main className="container">
        {data.map((data) => (
          <Card
            key={data.id}
            title={data.title}
            cover={data.cover}
            id={`/Fiche/${data.id}`}
          />
        ))}
      </main>
    </div>
  );
};

export default Home;
