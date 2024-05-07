import { Link } from "react-router-dom";
import "./Nav.scss";

export default function Nav() {
  return (
    <nav className="navContainer">
      <ul className="navList">
        <li>
          <Link to="/" className="navLink">
            Hem
          </Link>
        </li>
        <li>
          <Link to="/myprojects" className="navLink">
            Mina Projekt
          </Link>
        </li>
        <li>
          <Link to="/contact" className="navLink">
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
}
