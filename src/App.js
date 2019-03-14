import React, { Component } from "react";
import "./app.scss";
import { Router } from "@reach/router";
import Home from "./components/Home/Home";
import AdminMain from "./components/Admin/AdminMain";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Home path="/*" />
          <AdminMain path="/admin" />
        </Router>
      </div>
    );
  }
}

export default App;
