import React, {Component, useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles/index.scss"
import {Onboarding, Browse, Home, Checkout} from "./pages/index.js";
import {Navbar} from "./components"

const App = () => {
  return (
  <div>
    <Router>
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Onboarding />
        </Route>
        <Route path="/browse">
          <Browse />
        </Route>
        <Route path="/profile">
          <Onboarding />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
      </Switch>
    </div>
      <Navbar>
      </Navbar>
    </Router>
  </div>
  )
};

export default App;
