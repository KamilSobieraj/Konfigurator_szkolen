import React from "react";
import "./CloseDayOneInfoModal.scss";
import Modal from "../../../ui/Modal/Modal";

const CloseDayOneInfoModal = props => {
  return (
    <Modal
      modalClass="modal__close-day-one-notification"
      show={props.showCloseDayOneInfo}
      closeModal={props.handleCloseCloseDayOneInfo}
    >
      <p>Udało się skomponować pierwszy dzień!</p>
      <p>Dodaj kolejny moduł, aby rozpocząć komponowanie następnego dnia.</p>
    </Modal>
  );
};

export default CloseDayOneInfoModal;
