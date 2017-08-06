/* @flow */

import { SET_STATE } from "../constants/";
const { List } = require('immutable');

type State = List

export default function (state: State = List([0, 0, 0, 0, 0, 0, 0, 0]), action: Object): State {
  console.debug(action)
  switch (action.type) {
    case SET_STATE:
      return state.set(action.index, action.value)
    default:
      return state;
  }
}
