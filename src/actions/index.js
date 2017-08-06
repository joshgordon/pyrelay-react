/* @flow */

import { GET_STATE, SET_STATE, SET_STATUS, CONNECT, DISCONNECT } from "../constants/";

export const setState = (index : integer, value : integer, remote= false): Object => {
  return {
    type: SET_STATE,
    index,
    value,
    remote
  };
};

export const getState = (index : integer): Object => {
  return {
    type: GET_STATE,
    index
  }
}

export const setStatus = (newStatus : string): Object => {
  return {
    type: SET_STATUS,
    status: newStatus
  }
}

export const connect_mqtt = (): Object => {
  return {
    type: CONNECT,
  }
}

export const disconnect_mqtt = (): Object => {
  return {
    type: DISCONNECT
  }
}
