import "../styles/nav.css";
import { Link } from "react-router-dom";
import logo from "../../public/logo.png";

const Nav = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="kasa" />
      </div>
      <nav>
        <ul>
          <li>Accueil</li>
          <li>A propos</li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
