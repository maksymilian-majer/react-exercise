import { createStore } from "redux";
import { combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

const allReducers = combineReducers(reducers);
const initialState = {};
const middleware = [thunk];

export default createStore(allReducers, initialState, compose(applyMiddleware(...middleware)));
