import React from "react";
import "./preloader.scss";

const Preloader = () => {
  return (
    <div className="preload_wrap">
      <div className="preload_loading">
        <div className="preload_bounceball" />
        <div className="preload_text">NOW LOADING</div>
      </div>
    </div>
  );
};

export default Preloader;
