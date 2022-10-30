import bg from "../utils/bg.png";
import "../styles/home.css";
import Card from "../components/Card";
import data from "../data.json";

const Home = () => {
  return (
    <div>
      <section>
        <div className="overlay">
          <img src={bg} alt="background" />
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      </section>
      <main className="container">
        {data.map((data) => (
          <Card
            key={data.id}
            title={data.title}
            cover={data.cover}
            id={`/fiche/${data.id}`}
          />
        ))}
      </main>
    </div>
  );
};

export default Home;
