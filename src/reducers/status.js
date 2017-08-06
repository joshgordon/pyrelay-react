/* @flow */

import { SET_STATUS } from "../constants/";

type State = string;

export default function (state: State = "DISCONNECTED", action: Object): State {
  switch (action.type) {
    case SET_STATUS:
      return action.status;
    default:
      return state;
  }
}
