import React from "react";
import "./close_day_tooltip.scss";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

const CloseDayTooltip = ({ id, children, tooltip }) => {
  return (
    <OverlayTrigger
      overlay={<Tooltip id={id}>{tooltip}</Tooltip>}
      placement="bottom"
      delayShow={300}
      delayHide={150}
    >
      <span>{children}</span>
    </OverlayTrigger>
  );
};
export default CloseDayTooltip;
