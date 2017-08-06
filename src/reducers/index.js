/* @flow */

import { combineReducers } from "redux";
import state from "./state";
import status from "./status";

const rootReducer = combineReducers ({
  state,
  status
});

export default rootReducer;
