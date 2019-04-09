import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import store from "./store";
import Landing from "./routes/Landing";
import Home from "./routes/Home";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
