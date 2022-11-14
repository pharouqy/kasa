import "../styles/404.css";
import { Link } from "react-router-dom";

const Errors = () => {
  return (
    <div className="container-404">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to={"/"}>
        <span>Retourner sur la page d’accueil</span>
      </Link>
    </div>
  );
};

export default Errors;
