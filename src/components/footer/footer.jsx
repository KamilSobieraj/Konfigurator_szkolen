import React from "react";
import "./Footer.scss";
import IconMapPin from "../ui/icons/IconMapPin.png";
import IconWebsite from "../ui/icons/IconWebsite.png";
import IconMail from "../ui/icons/IconMail.png";
import IconMobile from "../ui/icons/IconMobile.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__contact-info">
        <a href="tel:+48 530 392 776">
          <img
            src={IconMobile}
            alt="mobile icon"
            className="footer__contact-info-icon"
          />
          +48 530 392 776
        </a>
        <a href="mailto: biuro@cpab.pl">
          <img
            src={IconMail}
            alt="mail icon"
            className="footer__contact-info-icon"
          />
          biuro@cpab.pl
        </a>
        <a href="http://www.cpab.pl" target="_blank" rel="noopener noreferrer">
          <img
            src={IconWebsite}
            alt="website icon"
            className="footer__contact-info-icon"
          />
          www.cpab.pl
        </a>
        <p>
          {" "}
          <img
            src={IconMapPin}
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
