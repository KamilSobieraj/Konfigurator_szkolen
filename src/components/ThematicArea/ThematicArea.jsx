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
      <main className="thematic-areas">
        {this.orderedModules &&
          Object.keys(this.orderedModules).map((e, i) => {
            return (
              <section
                key={`single-area-${i}`}
                className="thematic-areas__single-area"
              >
                <header id={e} className="thematic-areas__single-area-title">
                  <span>{e}</span>
                </header>
                <div className="thematic-areas__modules">
                  {Object.keys(this.orderedModules[e]).map(f => (
                    <SingleModule
                      name={this.orderedModules[e][f].name}
                      moveModuleNameUpToThematicArea={
                        this.takeModuleNameFromSingleModule
                      }
                      clickedModuleNames={this.props.clickedModuleNames}
                      chosenModulesNames={this.props.chosenModulesNames}
                      key={this.orderedModules[e][f].id}
                      {...this.orderedModules[e][f]}
                    />
                  ))}
                </div>
              </section>
            );
          })}
      </main>
    );
  }
}

export default ThematicArea;
