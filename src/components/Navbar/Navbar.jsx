import React, { Component } from "react";
import "./Navbar.scss";
import groupBy from "lodash.groupby";
import { Link, animateScroll as scroller } from "react-scroll";
import LogoCPAB from "../ui/media/Logo.png";

class Navbar extends Component {
  //**** Ordering array by Thematic Area ****\\
  orderedModules = groupBy(this.props.modules, thematicArea => {
    return thematicArea.thematicArea;
  });
  //**** Scrolling to accurate thematic area ****\\
  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      //**** to change animation below, look into documentation ****\\
      smooth: "easeInOutQuart"
    });
  }
  render() {
    return (
      <div className="thematic-area-nav">
        <div className="thematic-area-nav__logo-wrapper">
          <img
            className="thematic-area-nav__logo"
            src={LogoCPAB}
            alt="Logo Coaching People"
          />
        </div>

        <ul className="thematic-area-nav__areas">
          {Object.keys(this.orderedModules).map(e => (
            <li className="thematic-area-nav__single-thematic-area" key={e}>
              <Link
                tabIndex="1"
                activeClass="active"
                className={e}
                to={e}
                spy={true}
                smooth={true}
                duration={500}
                //**** down here can reagulate how deep scroll down(in px) ****\\
                offset={-200}
              >
                {e}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Navbar;
