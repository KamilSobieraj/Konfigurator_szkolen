import React, { Component } from "react";
import "./admin_login.scss";
import firebase from "firebase";
import {
  Form,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from "react-bootstrap";

class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }
  login(e) {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {})
      .catch(error => console.log(error));
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <React.Fragment>
        <Form horizontal>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={1}>
              E-mail:
            </Col>
            <Col sm={4}>
              <FormControl
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
                name="email"
                placeholder="wpisz adres e-mail"
                sm={10}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={1}>
              Hasło:
            </Col>
            <Col sm={4}>
              <FormControl
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                name="password"
                placeholder="wpisz hasło"
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col smOffset={1} sm={10}>
              <Button type="submit" onClick={this.login}>
                Zaloguj
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </React.Fragment>
    );
  }
}

export default AdminLogin;
