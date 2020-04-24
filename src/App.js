import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar/index";
import Index from "./components/Index/index";
import Contact from "./components/Contact/index";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Index} />
        <Route path="/Contact" component={Contact} />
      </BrowserRouter>
    );
  }
}

export default App;
