import React from "react";
import "./Help.scss";
import Icon from "../../../ui/icons/icon";

const help = props => (
  <button className="help-button" onClick={props.showHelpModal}>
    <Icon className={"help-button__icon"} name={"icon-help"} />
    Jak skomponować szkolenie?
  </button>
);

export default help;
