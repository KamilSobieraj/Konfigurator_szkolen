import React from "react";
import "./SingleDay.scss";
import { ListGroupItem } from "react-bootstrap";
import Icon from "../../../ui/icons/icon";

const SingleDay = props => {
  return (
    <div className="single-day">
      <p className="single-day__header">{props.day}</p>
      {props.chosenModulesNames.map((e, i) => (
        <ListGroupItem
          className="single-day__module"
          //key={e}
          key={"order-list" + i}
        >
          {e + " "}
          <div
            onClick={() => props.removeModuleNameFromOrderList(e)}
            className="single-day__module-remove-button"
          >
            {" "}
            <Icon
              className={"single-day__module-remove-icon"}
              name={"icon-remove"}
              alt="remove button"
            />
          </div>
        </ListGroupItem>
      ))}
    </div>
  );
};

export default SingleDay;
