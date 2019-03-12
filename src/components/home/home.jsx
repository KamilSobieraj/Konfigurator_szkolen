import React, { Component } from "react";
import "./home.scss";
import { Router } from "@reach/router";
import firebase from "firebase";
import { DB_CONFIG } from "../../database/db_config";
import ThematicArea from "../single_module/thematic_area/thematic_area";
import OrderList from "../order_list/order_list_main/order_list_main";
import Footer from "../footer/footer";
import AdminPanel from "../admin/admin_panel/admin_panel";
import Preloader from "../preloader/preloader";
//import Form from "./components/form/form";
//import Logo from "./logos/logo_CPAB.png";

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
          <AdminPanel path="/admin" />
          {/*<Form path="/formm" />*/}
        </Router>
        {/*<LandingPage />
        <img src={Logo} />*/}
        <div className="main-layout">
          <ThematicArea
            modules={modules}
            orderedModules={orderedModules}
            moveModuleNameUpToApp={this.addModuleNameToOrderList}
            clickedModuleNames={holdClickedModulesNames}
            chosenModulesNames={holdClickedModulesNames}
          />
          <OrderList
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
