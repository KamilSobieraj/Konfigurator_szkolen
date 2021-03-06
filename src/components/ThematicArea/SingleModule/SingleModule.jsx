import React, { Component } from "react";
import "./SingleModule.scss";
import SingleModuleDetails from "../SingleModuleDetails/SingleModuleDetails";
import Icon from "../../ui/icons/icon";

class SingleModule extends Component {
  constructor(props) {
    super(props);
    this.handleAddModuleToList = this.handleAddModuleToList.bind(this);
    this.isModuleSelected = this.isModuleSelected.bind(this);
  }
  handleAddModuleToList() {
    const { name, moveModuleNameUpToThematicArea } = this.props;
    if (!this.isModuleSelected(name)) moveModuleNameUpToThematicArea(name);
  }

  isModuleSelected = name => this.props.chosenModulesNames.indexOf(name) !== -1;

  render() {
    const { name } = this.props;
    return (
      <div
        className={
          this.props.chosenModulesNames.indexOf(this.props.name) === -1
            ? "single-module single-module--not-added"
            : "single-module single-module--added"
        }
      >
        {console.log(this.props.chosenModulesNames, this.props.name)}
        <SingleModuleDetails
          details={this.props.details}
          name={this.props.name}
        />
        <button
          className="single-module__tile-button"
          onClick={this.handleAddModuleToList}
          disabled={this.isModuleSelected(name)}
        >
          <div className="single-module__tile-title">{this.props.name}</div>
          <div className="single-module__icon-wrapper">
            {this.isModuleSelected(name) ? (
              <Icon
                className={"single-module__icon single-module__icon--add"}
                name={"icon-checkmark"}
              />
            ) : (
              <Icon
                className={"single-module__icon single-module__icon--check"}
                name={"icon-add"}
              />
            )}
          </div>
        </button>
      </div>
    );
  }
}

export default SingleModule;
