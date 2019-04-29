import React, { Component } from "react";
import "./Help.scss";
import { Modal, Button } from "react-bootstrap";
import Infographic from "../../../ui/media/HelpInfographic.PNG";
import Icon from "../../../ui/icons/icon";

class Help extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false
    };
  }
  handleClose() {
    this.setState({ show: false });
  }
  handleShow() {
    this.setState({ show: true });
  }
  render() {
    return (
      <React.Fragment>
        <button className="help-button" onClick={this.handleShow}>
          <Icon className={"help-button__icon"} name={"icon-help"} />
          Jak skomponować szkolenie?
        </button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Body>
            <Button
              onClick={this.handleClose}
              className="help-button__modal-close-button"
            >
              <Icon
                className={"single-day__module-remove-icon"}
                name={"icon-remove"}
                alt="zamknij"
              />
            </Button>
            <img
              src={Infographic}
              alt="Inforgrafika - jak skomponować szkolenie"
              className="help-button__modal-infograpgic"
            />
          </Modal.Body>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Help;
