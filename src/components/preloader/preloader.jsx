import React from "react";
import "./Preloader.scss";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader__bounceball" />
      <div className="preloader__text">NOW LOADING</div>
    </div>
  );
};

export default Preloader;
