import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import store from "./store";
import Landing from "./routes/Landing";
import Home from "./routes/Home";
import Users from "./routes/Users";
import User from "./routes/User";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/users/:userId" component={User} />
        <Route path="/users" component={Users} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
