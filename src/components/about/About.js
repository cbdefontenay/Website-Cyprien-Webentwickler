import {
  faCss3,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../animatedLetters/AnimatedLetters";
import "./about.scss";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <Fragment>
      <div className="container about-page">
        <div className="text-zone">
          <h1 className="about-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["Ü", "b", "e", "r", "", "m", "i", "c", "h"]}
              idx={15}
            />
          </h1>
          <p>
            Schon seit meiner Kindheit bin ich von Sprachen fasziniert.
            Jahrenlang habe ich mich mit "menschlischen" sprachen beschäftigt,
            bis in einem Gespräsch der Satz fiel:
            <span>Programmiersprachen sind auch Sprachen.</span> Aus diesen
            einfachen Gedanken entstand eine neue Begeisterung und schließlich
            mein Wunsch auch beruflich in dieses spannende Feld einzusteigen.
          </p>
          <p>
            Im Jahr 2022 habe ich dann ein Bootcamp bei der{" "}
            <span>Zero to Mastery Academy</span>. Ich habe HTML, CSS,
            JavaScript, und React.js (Redux/Redux toolkit) erlernt, und Node.js
            (zusammen mit Express) als Backend tools benutz.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faVuejs} color="#49cb63" />
              <p className="p">Vue</p>
            </div>

            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              <p className="p">HTML</p>
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              <p className="p">CSS</p>
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              <p className="p">React</p>
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              <p className="p">JavaScript</p>
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faNodeJs} color="#3c873a" />
              <p className="p">Node.js</p>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </Fragment>
  );
};

export default About;
