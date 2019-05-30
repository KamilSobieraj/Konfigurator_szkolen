import React from "react";
import "./CloseDayInfoModal.scss";
//import { Modal, Button } from "react-bootstrap";
import Modal from "../../../ui/Modal/Modal";

const CloseDayInfoModal = props => {
  return (
    <Modal
      modalClass="modal__close-day-notification"
      show={props.showCloseDayInfo}
      closeModal={props.handleCloseCloseDayInfo}
    >
      <p>Udało się skomponować kolejny dzień!</p>
      <p>Dodaj kolejny moduł, aby rozpocząć komponowanie następnego dnia.</p>
    </Modal>
  );
};

export default CloseDayInfoModal;
