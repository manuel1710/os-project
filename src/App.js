import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
import SJF from "./pages/SJF.jsx";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<SJF />} />
        </Routes>
      </Router>
    );
  }
}
export default App;
