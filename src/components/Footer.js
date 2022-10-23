import logoWhite from "../utils/logoWhite.png";
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={logoWhite} alt="logo" />
      </div>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
