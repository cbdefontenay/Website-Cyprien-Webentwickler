import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXing,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faEnvelope,
  faHome,
  faSuitcase,
  faTerminal,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import "./sidebar.scss";
import { useState } from "react";

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <Link className="logo" to="/" onClick={() => setShowNav(false)}>
        <FontAwesomeIcon icon={faTerminal} color="#fff" />
      </Link>
      <nav className={showNav ? "mobile-show" : ""}>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/projekte"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faXing}
          color="#b2375e"
          size="3x"
          className="close-icon"
        />
      </nav>

      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/cyprien-de-fontenay-28a867220/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#131315"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/cbdefontenay"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#131315"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.xing.com/profile/Cyprien_BourdeaudeFontenay/cv"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faXing}
              color="#131315"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#131315"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  );
};

export default Sidebar;
