import React from "react";
import "./CloseDayInfoModal.scss";
import { Modal, Button } from "react-bootstrap";

const CloseDayInfoModal = props => {
  return (
    <Modal show={props.showCloseDayInfo} onHide={props.handleCloseCloseDayInfo}>
      <Modal.Header closeButton>
        <Modal.Title className="close-day-info-modal__title">
          Udało się skomponować kolejny dzień!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="close-day-info-modal__body">
        Dodaj kolejny moduł, aby rozpocząć komponowanie następnego dnia.
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.handleCloseCloseDayInfo}>Zamknij</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CloseDayInfoModal;
