import { useState, useEffect } from "react";
import "../styles/nav.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../utils/logo.png";

const Nav = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(null);
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);
  return (
    <header>
      <div>
        <img src={logo} alt="kasa" className="logo" />
      </div>
      <nav>
        <ul>
          <Link to={"/"}>
            <li className={activeLink === "/" ? "active" : ""}>Accueil</li>
          </Link>
          <Link to={"/About"}>
            <li className={activeLink === "/About" ? "active" : ""}>
              A Propos
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
