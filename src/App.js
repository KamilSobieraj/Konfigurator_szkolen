import React, { Component } from "react";
import "./app.scss";
import { Router } from "@reach/router";
import Home from "./components/home/home";
import AdminPanel from "./components/admin/admin_panel/admin_panel";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Home path="/*" />
          <AdminPanel path="/admin" />
        </Router>
      </div>
    );
  }
}

export default App;
