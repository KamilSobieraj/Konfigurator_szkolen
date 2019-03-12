import React from "react";
import "./footer.scss";
import MapPin from "../../logos/map_pin.png";
import Website from "../../logos/website.png";
import Mail from "../../logos/mail.png";
import Mobile from "../../logos/mobile.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__contact-info">
        <a href="tel:+48 530 392 776">
          <img
            src={Mobile}
            alt="mobile icon"
            className="footer__contact-info-icon"
          />
          +48 530 392 776
        </a>
        <a href="mailto: biuro@cpab.pl">
          <img
            src={Mail}
            alt="mail icon"
            className="footer__contact-info-icon"
          />
          biuro@cpab.pl
        </a>
        <a href="http://www.cpab.pl" target="_blank" rel="noopener noreferrer">
          <img
            src={Website}
            alt="website icon"
            className="footer__contact-info-icon"
          />
          www.cpab.pl
        </a>
        <p>
          {" "}
          <img
            src={MapPin}
            alt="map pin icon"
            className="footer__contact-info-icon"
          />
          ul. Jagiellońska 24, 40-035 Katowice
        </p>
      </div>
      <div className="footer__copyright">
        <p>Wszelkie prawa zastrzeżone, CPAB &#9400; 2016-2019</p>
        <p hidden>
          Autor strony:{" "}
          <a
            href="https://www.linkedin.com/in/kamil-sobieraj-477907b7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kamil Sobieraj
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
