import React, { Component } from "react";
import "./SingleModuleDetails.scss";
import { Modal, Button } from "react-bootstrap";
import Icon from "../../ui/icons/icon";

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
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="single-module__details-modal-header">
              {this.props.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {details.map(e => (
              <li
                className="single-module__details-modal-single-detail"
                key={e}
              >
                {e}
              </li>
            ))}
            <p />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Zamknij</Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

export default SingleModuleDetails;
