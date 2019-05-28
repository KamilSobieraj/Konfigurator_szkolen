import React, { Component } from "react";
import "./SingleModuleDetails.scss";
import Icon from "../../ui/icons/icon";
import Modal from "../../ui/Modal/Modal";

class SingleModuleDetails extends Component {
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
    const details = this.props.details;
    return (
      <React.Fragment>
        <button
          className="single-module__details-button"
          onClick={this.handleShow}
        >
          <Icon
            className={"single-module__icon single-module__icon--details"}
            name={"icon-details"}
          />
        </button>
        <Modal
          modalClass="single-module__details-modal"
          show={this.state.show}
          closeModal={this.handleClose}
        >
          <h2>{this.props.name}</h2>
          {details.map(e => (
            <li className="single-module__details-modal-single-detail" key={e}>
              {e}
            </li>
          ))}
          <p />
        </Modal>
      </React.Fragment>
    );
  }
}

export default SingleModuleDetails;
