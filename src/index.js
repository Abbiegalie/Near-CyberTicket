import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { initContract } from "./utils";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "mdbreact/dist/css/mdb.css";

window.nearInitPromise = initContract()
  .then(() => {
    ReactDOM.render(
      <Router>
        <App />
      </Router>,
      document.querySelector("#root")
    );
  })
  .catch(console.error);
