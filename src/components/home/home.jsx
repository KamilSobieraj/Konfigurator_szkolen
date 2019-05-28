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
import Modal from "../ui/Modal/Modal";
import Infographic from "../ui/media/HelpInfographic.PNG";

let chosenModulesArray = [];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      holdClickedModulesNames: chosenModulesArray,
      modules: [],
      loading: true,
      showHelpModal: false
    };
    this.addModuleNameToOrderList = this.addModuleNameToOrderList.bind(this);
    this.removeModuleNameFromOrderList = this.removeModuleNameFromOrderList.bind(
      this
    );
    this.getModules = this.getModules.bind(this);
    this.showHelpModalHandler = this.showHelpModalHandler.bind(this);
    this.closeHelpModalHandler = this.closeHelpModalHandler.bind(this);
    this.showCompositionNotificationModalHandler = this.showCompositionNotificationModalHandler.bind(
      this
    );
    this.closeCompositionNotificationModalHandler = this.closeCompositionNotificationModalHandler.bind(
      this
    );
    this.showCompositionNotificationModal = false;
    this.shouldCompositionNotificationShow = true;
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
  showHelpModalHandler() {
    this.setState({ showHelpModal: true });
  }
  closeHelpModalHandler() {
    this.setState({ showHelpModal: false });
  }
  showCompositionNotificationModalHandler() {
    this.showCompositionNotificationModal = true;
  }
  closeCompositionNotificationModalHandler() {
    this.shouldCompositionNotificationShow = false;
    this.showCompositionNotificationModal = false;
    this.forceUpdate();
  }
  componentDidMount() {
    this.getModules();
  }
  render() {
    const {
      modules,
      loading,
      holdClickedModulesNames,
      showHelpModal
    } = this.state;
    const { orderedModules } = this.props;
    if (
      holdClickedModulesNames.length === 1 &&
      this.shouldCompositionNotificationShow === true
    ) {
      this.showCompositionNotificationModalHandler();
    } else {
    }
    return loading ? (
      <Preloader />
    ) : (
      <React.Fragment>
        <Router>
          <AdminMain path="/admin" />
        </Router>
        {/*<LandingPage />
        <img src={Logo} />*/}
        <div className="main-layout">
          <Modal
            modalClass="modal__help"
            show={showHelpModal}
            closeModal={this.closeHelpModalHandler}
            key={"asd"}
          >
            <img
              src={Infographic}
              alt="Inforgrafika - jak skomponować szkolenie"
              className="help-button__modal-infograpgic"
            />
          </Modal>

          <Modal
            modalClass="modal__composition-notification"
            show={this.showCompositionNotificationModal}
            closeModal={this.closeCompositionNotificationModalHandler}
            key={"asdd"}
          >
            <p>
              Pamiętaj, aby przy komponowaniu szkolenia, w ramach jednego dnia
              dobierać moduły z tego samego obszaru tematycznego!
            </p>
            <p>
              Np. w pierwszym dniu szkolenia dobieraj moduły z obszaru
              tematycznego "Komunikacja", a drugiego z "Negocjacje"{" "}
            </p>
          </Modal>

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
            showHelpModal={this.showHelpModalHandler}
            closeHelpModal={this.closeHelpModalHandler}
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
