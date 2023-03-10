import { useEffect, useMemo, useState } from "react";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import AnimatedLetter from "../animatedLetters/AnimatedLetters";
import "./Home.scss";
import Logo from "./logo/Logo";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = useMemo(
    () => ["", "C", "y", "p", "r", "i", "e", "n", ","],
    []
  );

  const jobArray = useMemo(
    () => ["W", "e", "b", "e", "n", "t", "w", "i", "c", "k", "l", "e", "r"],
    []
  );

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, [nameArray, jobArray]);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={letterClass}>a</span>
            <span className={letterClass}>l</span>
            <span className={letterClass}>l</span>
            <span className={`${letterClass} _12`}>o,</span>
            <br />
            <span className={`${letterClass} _13`}>i</span>
            <span className={`${letterClass} _14`}>ch</span>
            <span className={`${letterClass} _15`}></span>
            <span className={`${letterClass} _16`}>b</span>
            <span className={`${letterClass} _17`}>in</span>
            <AnimatedLetter
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetter
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Fullstack developer / Javascript Expert</h2>
          <Link to="/contact" className="flat-button">
            KONTAKT
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
