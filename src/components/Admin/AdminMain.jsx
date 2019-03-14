// Component checks if user is logged in.

import React, { Component } from "react";
import firebase from "firebase";
import LoginForm from "./components/LoginForm";
import LoggedIn from "./components/LoggedIn/LoggedIn";
import { Well, Button } from "react-bootstrap";

class AdminMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
    this.authListener = this.authListener.bind(this);
    this.logout = this.logout.bind(this);
  }
  logout() {
    firebase.auth().signOut();
  }
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    //**** Check if user is logged in or not ****\\
    firebase.auth().onAuthStateChanged(user => {
      user ? this.setState({ user }) : this.setState({ user: null });
    });
  }

  render() {
    return (
      <React.Fragment>
        <Well bsSize="large">
          <h2>Panel administracyjny</h2>
          {this.state.user ? (
            <Button bsStyle="danger" onClick={this.logout}>
              Wyloguj
            </Button>
          ) : null}
        </Well>
        {this.state.user ? <LoggedIn /> : <LoginForm />}
      </React.Fragment>
    );
  }
}
export default AdminMain;
