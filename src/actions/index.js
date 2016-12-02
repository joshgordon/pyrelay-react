/* @flow */

import {
  SET_NAME
} from '../constants/';

const setName = (name: string): Object => {
  return {
    type: SET_NAME,
    name
  }
}

export default {
  setName
};
