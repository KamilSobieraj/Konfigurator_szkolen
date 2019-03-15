import React, { Component } from "react";
import "./Home.scss";
import { Router } from "@reach/router";
import firebase from "firebase";
import { DB_CONFIG } from "../../database/db_config";
import ThematicArea from "../ThematicArea/ThematicArea";
import OrderListMain from "../OrderPanel/OrderListMain/OrderListMain";
import Footer from "../Footer/Footer";
import AdminMain from "../Admin/AdminMain";
import Preloader from "../Preloader/Preloader";
import Icons from "../ui/icons/icons";
import Navbar from "../Navbar/Navbar";

let chosenModulesArray = [];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      holdClickedModulesNames: chosenModulesArray,
      modules: [],
      loading: true
    };
    this.addModuleNameToOrderList = this.addModuleNameToOrderList.bind(this);
    this.removeModuleNameFromOrderList = this.removeModuleNameFromOrderList.bind(
      this
    );
    this.getModules = this.getModules.bind(this);
  }
  addModuleNameToOrderList(nameFromAddModule) {
    chosenModulesArray = this.state.holdClickedModulesNames;
    chosenModulesArray.push(nameFromAddModule);
    this.setState({ holdClickedModulesNames: chosenModulesArray });
  }
  removeModuleNameFromOrderList(namefromOrderListToRemove) {
    this.setState({
      holdClickedModulesNames: this.state.holdClickedModulesNames.filter(
        e => e !== namefromOrderListToRemove
      )
    });
  }
  getModules() {
    let ref = firebase
      .initializeApp(DB_CONFIG)
      .database()
      .ref();
    ref.once("value").then(dataSnapshot => {
      this.response = dataSnapshot.val()["modulesData"];
      this.setState({ modules: this.response, loading: false });
    });
  }
  componentDidMount() {
    this.getModules();
  }
  render() {
    const { modules, loading, holdClickedModulesNames } = this.state;
    const { orderedModules } = this.props;
    return loading ? (
      <Preloader />
    ) : (
      <React.Fragment>
        <Router>
          <AdminMain path="/admin" />
          {/*<Form path="/formm" />*/}
        </Router>
        {/*<LandingPage />
        <img src={Logo} />*/}
        <div className="main-layout">
          <Icons />
          <Navbar modules={modules} />
          <ThematicArea
            modules={modules}
            orderedModules={orderedModules}
            moveModuleNameUpToApp={this.addModuleNameToOrderList}
            clickedModuleNames={holdClickedModulesNames}
            chosenModulesNames={holdClickedModulesNames}
          />
          <OrderListMain
            clickedModuleNames={holdClickedModulesNames}
            chosenModulesNames={holdClickedModulesNames}
            removeModuleNameFromOrderList={this.removeModuleNameFromOrderList}
          />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
