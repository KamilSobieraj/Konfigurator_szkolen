import React from "react";
import "./CloseDayOneInfoModal.scss";
import { Modal, Button } from "react-bootstrap";

const CloseDayOneInfoModal = props => {
  return (
    <Modal
      show={props.showCloseDayOneInfo}
      onHide={props.handleCloseCloseDayOneInfo}
    >
      <Modal.Header closeButton>
        <Modal.Title className="close-day-one-info-modal__title">
          Udało się skomponować pierwszy dzień!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="close-day-one-info-modal__body">
        Dodaj kolejny moduł, aby rozpocząć komponowanie następnego dnia.
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.handleCloseCloseDayOneInfo}>Zamknij</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CloseDayOneInfoModal;
