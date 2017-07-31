/* @flow */

import { SET_NAME } from "../constants/";

export const setName = (name: string): Object => {
  return {
    type: SET_NAME,
    name
  };
};
