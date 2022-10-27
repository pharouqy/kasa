import "../styles/profil.css";

const Profil = ({ name, picture }) => {
  return (
    <div>
      <h3>{name}</h3>
      <img src={picture} alt="profil" />
    </div>
  );
};

export default Profil;
