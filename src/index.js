import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router-dom";

import "assets/css/material-dashboard-react.css?v=1.9.0";

import MUI from "MUI";
import Routes from "Routes.tsx";

const hist = createBrowserHistory();

ReactDOM.render(
  <MUI>
    <Router history={hist}>
      <Switch>
        <Routes />
      </Switch>
    </Router>
  </MUI>,
  document.getElementById("root")
);
