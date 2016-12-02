/* @flow */

import {
  SET_NAME
} from '../constants/';

type State = string;

type Action = {
  type: string,
  name: string
}

export default function (
  state: State = 'World',
  action: Action
): State {
  switch (action.type) {
    case SET_NAME:
      return action.name;
    default:
      return state;
  }
}
