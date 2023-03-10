import Loader from "react-loaders";
import Video from "../../assets/videos/verkauf-website.mp4";
import "./projects.styles.scss";

const Projects = () => {
  return (
    <>
      <div className="projects-container">
        <div className="video-container">
          <video className="video" autoPlay loop muted>
            <source src={Video} type="video/mp4" />
          </video>
        </div>
        <p className="project-description">
          Verkauf Website mit React JSX, SASS, Styled components und Firebase.
        </p>
        <div className="button-container">
          <a
            href="https://github.com/cbdefontenay/Verkauf-Website"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            GitHub Code
          </a>
          <a
            href="https://crown-verkauf-website.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="live-mode-button"
          >
            Live Mode
          </a>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Projects;
