/* @flow */

import {
  SET_NAME
} from '../constants/';

type State = string;

export default function (
  state: State = 'World',
  action: Object
): State {
  switch (action.type) {
    case SET_NAME:
      return action.name;
    default:
      return state;
  }
}
