import React, { Component } from "react";
import "./ThematicArea.scss";
import SingleModule from "./SingleModule/SingleModule";
import groupBy from "lodash.groupby";

class ThematicArea extends Component {
  constructor(props) {
    super(props);
    this.takeModuleNameFromSingleModule = this.takeModuleNameFromSingleModule.bind(
      this
    );
  }
  takeModuleNameFromSingleModule(value) {
    this.props.moveModuleNameUpToApp(value);
  }
  //**** Ordering array by Thematic Area ****\\
  orderedModules = groupBy(this.props.modules, thematicArea => {
    return thematicArea.thematicArea;
  });
  render() {
    return (
      <div className="thematic-areas">
        {this.orderedModules &&
          Object.keys(this.orderedModules).map((e, i) => {
            return (
              <div
                key={`single-area-${i}`}
                className="thematic-areas__single-area"
              >
                <div id={e} className="thematic-areas__single-area-title">
                  <span>{e}</span>
                </div>
                <div className="thematic-areas__modules">
                  {Object.values(this.orderedModules[e]).map(f => (
                    <SingleModule
                      name={this.props.name}
                      moveModuleNameUpToThematicArea={
                        this.takeModuleNameFromSingleModule
                      }
                      clickedModuleNames={this.props.clickedModuleNames}
                      chosenModulesNames={this.props.chosenModulesNames}
                      key={f && f.id} //probably key={f.id} is enough, but just in case let it be...
                      {...f}
                    />
                  ))}
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default ThematicArea;
