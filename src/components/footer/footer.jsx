import React from "react";
import "./Footer.scss";
import Icon from "../ui/icons/icon";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__contact-info">
        <address property="mobile">
          <a href="tel:+48 530 392 776">
            <Icon
              className={"footer__contact-info-icon"}
              name={"icon-mobile"}
              alt="mobile icon"
            />
            +48 530 392 776
          </a>
        </address>
        <address property="email">
          <a href="mailto: biuro@cpab.pl">
            <Icon
              className={"footer__contact-info-icon"}
              name={"icon-mail"}
              alt="e-mail icon"
            />
            biuro@cpab.pl
          </a>
        </address>
        <address property="website">
          <a
            href="http://www.cpab.pl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              className={"footer__contact-info-icon"}
              name={"icon-website"}
              alt="website icon"
            />
            www.cpab.pl
          </a>
        </address>
        <address property="address">
          <p>
            <Icon
              className={"footer__contact-info-icon"}
              name={"icon-pin"}
              alt="adress icon"
            />
            ul. Jagiellońska 24, 40-035 Katowice
          </p>
        </address>
      </section>

      <section className="footer__copyright">
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
      </section>
    </footer>
  );
};

export default Footer;
