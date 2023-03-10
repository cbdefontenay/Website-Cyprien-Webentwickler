import { Fragment, useEffect, useRef, useState } from "react";
import Loader from "react-loaders";
import emailjs from "@emailjs/browser";
import AnimatedLetters from "../animatedLetters/AnimatedLetters";
import "./contact.scss";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const form = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5pckd7y",
        "template_v839coy",
        form.current,
        "aZX5dQmQikDwsKgNO"
      )
      .then(
        () => {
          alert("Nachricht wurde verschickt! Vielen Dank");
          window.location.reload(false);
        },
        () => {
          alert(
            "Es gibt ein Problem, Ihre Nachricht wurde nicht gesendet... Bitte versuchen Sie noch ein Mal!"
          );
        }
      );
  };

  return (
    <Fragment>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["k", "o", "n", "t", "a", "k", "t"]}
              idx={15}
            />
          </h1>
          <p>
            Sie können sehr gerne mich eine Nachricht schicken, oder ein Email.
            Meine Kontaktdaten finden Sie auf dem schwarzen Box über die karte.
          </p>
          <p>
            <i>
              (Für Handys sind die Kontaktdaten leider nicht verfügbar,
              allerdings wenn Sie auf dem "+" Symbol von der Karte drücken,
              können Sie meinen WohnOrt sehen.)
            </i>
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Thema"
                    type="text"
                    name="thema"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Nachricht"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SENDEN" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Cyprien Bourdeau de Fontenay
          <br />
          Deutschland,
          <br />
          Trappenstraße 13, 23558, <br />
          Lübeck <br />
          <span>cbdefontenay@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[53.86811784227707, 10.661390240498323]}
            zoom={13}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[53.86811784227707, 10.661390240498323]}>
              <Popup>Ich wohne hier!!!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </Fragment>
  );
};

export default Contact;
