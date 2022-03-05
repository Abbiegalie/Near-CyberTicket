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
const { networkId } = getConfig(process.env.NODE_ENV || "development");

export default function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="navbar">
        <Navbar.Brand href="/">
          <b>CyberTicket</b>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/launchpad">Launchpad</Nav.Link>
          <Nav.Link href="/marketplace">Marketplace</Nav.Link>
          <Nav.Link href="/">Fundraising</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/">Artists</Nav.Link>
          <button
            type="button"
            class="btn btn-light btn-sm"
            style={{ padding: 7, height: 30, fontSize: 12 }}
          >
            Connect Wallet
          </button>
        </Nav>
      </Navbar>
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
      </Switch>
    </div>
  );
}
