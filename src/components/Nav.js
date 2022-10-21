import "../styles/nav.css";
import { Link } from "react-router-dom";
import logo from "../utils/logo.png";

const Nav = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="kasa" className="logo" />
      </div>
      <nav>
        <ul>
          <Link to={"/"}>
            <li>Accueil</li>
          </Link>
          <Link to={"/About"}>
            <li>A Propos</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
