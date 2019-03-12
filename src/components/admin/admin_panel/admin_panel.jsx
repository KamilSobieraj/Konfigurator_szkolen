import React, { Component } from "react";
import "./admin_panel.scss";
import firebase from "firebase";
import AdminLogin from "../admin_login/admin_login";
import AdminMain from "../admin_main/admin_main";
import { Well, Button } from "react-bootstrap";

class AdminPanel extends Component {
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
      <div>
        <Well bsSize="large">
          <h2>Panel administracyjny</h2>
          {this.state.user ? (
            <Button bsStyle="danger" onClick={this.logout}>
              Wyloguj
            </Button>
          ) : null}
        </Well>
        {this.state.user ? <AdminMain /> : <AdminLogin />}
      </div>
    );
  }
}
export default AdminPanel;
