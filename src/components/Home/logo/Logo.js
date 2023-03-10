import "./logo.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

const Logo = () => {
  return (
    <div className="logo-container">
      <FontAwesomeIcon className="icon" icon={faUserSecret} color="#024968" />
    </div>
  );
};

export default Logo;
