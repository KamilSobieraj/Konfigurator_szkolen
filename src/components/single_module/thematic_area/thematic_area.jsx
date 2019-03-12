import React, { Component } from "react";
import "./thematic_area.scss";
import SingleModule from "../single_module/single_module";
import groupBy from "lodash.groupby";
import ThematicAreaNav from "../../navbar/thematic_area_nav";

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
      <div className="main-layout__modules-display">
        <ThematicAreaNav modules={this.props.modules} />
        <div className="main-layout__areas-display">
          {this.orderedModules &&
            Object.keys(this.orderedModules).map((e, i) => {
              return (
                <div
                  key={`thematic-area-modulev-${i}`}
                  className="thematic-area-display"
                >
                  <h3 id={e}>
                    <span>{e}</span>
                  </h3>
                  <div className="main-layout__single-modules-display">
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
      </div>
    );
  }
}

export default ThematicArea;
