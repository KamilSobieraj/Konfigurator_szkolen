import React, { Component } from "react";
import firebase from "firebase";
import { DB_CONFIG } from "../../../../database/db_config";
import ModulesList from "./ModulesList";
import {
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from "react-bootstrap";
import Preloader from "../../../Preloader/Preloader";

class LoggedIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      thematicArea: "",
      moduleName: "",
      details: "",
      loading: true
    };
    this.addModuleToDataBase = this.addModuleToDataBase.bind(this);
    this.removeModuleFromDB = this.removeModuleFromDB.bind(this);
    this.getModules = this.getModules.bind(this);
    this.addId = React.createRef();
    this.forceUpdate = this.forceUpdate.bind(this);
  }
  componentWillMount() {
    //**** Preveting Firebase double initializing ****\\
    if (!firebase.apps.length) {
      firebase.initializeApp(DB_CONFIG);
    }
  }
  getModules() {
    //**** Retrieving data from Firebase ****\\
    let ref = firebase.database().ref();
    ref.once("value").then(dataSnapshot => {
      this.response = dataSnapshot.val()["modulesData"];
      this.setState({ modules: this.response, loading: false });
    });
  }
  componentDidMount() {
    this.getModules();
  }
  addModuleToDataBase(e) {
    e.preventDefault();
    //**** Take string form the "details" and split it into array ****\\
    this.toSplit = this.addDetails.value;
    this.splited = this.addDetails.value.split(";");
    this.addDetailsArray = [];
    //**** Remove space before each element ****\\
    this.splited.map(e =>
      e.charAt(0) === " "
        ? this.addDetailsArray.push(e.substring(1))
        : this.addDetailsArray.push(e)
    );
    //**** Create new record in Firebase ****\\
    let newModuleKey = firebase
      .database()
      .ref()
      .child("modulesData")
      .push().key;
    //**** Take data from the form and prepeare to push them to Firebase ****\\
    let postData = {
      name: this.addModuleName.value,
      thematicArea: this.addThematicArea.value,
      id: newModuleKey,
      details: this.addDetailsArray
    };
    //****  Pushing data from the form to Firebase ****\\
    let update = {};
    update["/modulesData/" + newModuleKey] = postData;
    firebase
      .database()
      .ref()
      .update(update);
    //**** Rerendering ****\\
    this.setState({ loading: true });
    this.getModules();
  }
  removeModuleFromDB(e, moduleDBKey) {
    e.preventDefault();
    //**** Removing element based on Firebase key ****\\
    firebase
      .database()
      .ref()
      .child("/modulesData/" + moduleDBKey)
      .remove();
    //**** Rerendering ****\\
    this.setState({ loading: true });
    this.getModules();
  }
  render() {
    const { loading } = this.state;
    return loading ? (
      <Preloader />
    ) : (
      <React.Fragment>
        <Col xs={8} md={6}>
          <h2>Dodaj moduł:</h2>
          <form>
            <FormGroup>
              <ControlLabel>Obszar tematyczny</ControlLabel>
              <FormControl
                id="thematic-area"
                type="text"
                inputRef={ref => {
                  this.addThematicArea = ref;
                }}
                required="true"
                placeholder="Nazwa obszaru tematycznego"
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Nazwa modułu</ControlLabel>
              <FormControl
                id="module-name"
                type="text"
                inputRef={ref => {
                  this.addModuleName = ref;
                }}
                required="true"
                placeholder="Nazwa modułu"
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Szczegóły modułu</ControlLabel>
              <FormControl
                id="module-details"
                componentClass="textarea"
                inputRef={ref => {
                  this.addDetails = ref;
                }}
                required="true"
                placeholder="Poszczególne szczegóły rozdzielaj średnikiem, np.: Szczegół 1; Szczegól 2 - detal 1; Szczegół 3"
              />
            </FormGroup>
            <Button onClick={this.addModuleToDataBase}>Dodaj moduł</Button>
          </form>
        </Col>
        <Col xs={4} md={6}>
          <ModulesList
            modules={this.state.modules}
            removeModuleFromDB={this.removeModuleFromDB}
          />
        </Col>
      </React.Fragment>
    );
  }
}

export default LoggedIn;
