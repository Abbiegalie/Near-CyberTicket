import "regenerator-runtime/runtime";
import React from "react";
import { login, logout } from "./utils";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./global.css";

import getConfig from "./config";
import Home from "./Home/Home";
import Launchpad from "./Launchpad/Launchpad";
import Marketplace from "./Marketplace/Marketplace";
import Fundraising from "./Fundraising";
const { networkId } = getConfig(process.env.NODE_ENV || "development");

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route
        path="/launchpad/:event"
        render={(props) => <Launchpad {...props} />}
      />
      <Route
        path="/marketplace/:event"
        render={(props) => <Marketplace {...props} />}
      />
      <Route path="/launchpad" component={Launchpad} />
      <Route exact path="/marketplace" component={Marketplace} />
      <Route path="/fundraising" component={Fundraising} />
    </Switch>
  );
}
