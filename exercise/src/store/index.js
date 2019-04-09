import { createStore } from 'redux';
import { combineReducers } from "redux";

import reducers from "./reducers";

const allReducers = combineReducers(reducers);
export default createStore(allReducers, {});