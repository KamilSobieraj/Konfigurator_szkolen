import React from "react";
import Backdrop from "../Backdrop/Backdrop";

const modal = props => (
  <React.Fragment>
    <Backdrop show={props.show} clicked={props.closeModal} />
    <div
      className={props.modalClass}
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-150vh)",
        opacity: props.show ? "1" : "0"
      }}
    >
      {props.children}
    </div>
  </React.Fragment>
);

export default modal;
