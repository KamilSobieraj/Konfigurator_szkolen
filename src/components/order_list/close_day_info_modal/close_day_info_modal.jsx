import React from "react";
import "./close_day_info_modal.scss";
import { Modal, Button } from "react-bootstrap";

const CloseDayInfoModal = props => {
  return (
    <Modal
      className="order-list-single-day__close-day-info-modal-container"
      show={props.showCloseDayInfo}
      onHide={props.handleCloseCloseDayInfo}
    >
      <Modal.Header
        className="order-list-single-day__close-day-info-modal-header-container"
        closeButton
      >
        <Modal.Title className="order-list-single-day__close-day-info-modal-header-title">
          Udało się skomponować kolejny dzień!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="order-list-single-day__close-day-info-modal-body">
        Dodaj kolejny moduł, aby rozpocząć komponowanie następnego dnia.
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.handleCloseCloseDayInfo}>Zamknij</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CloseDayInfoModal;
