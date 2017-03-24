/* @flow */

import React from 'react';
import './HelloWorld.less';

export type State = {
  name: string
};

export type Actions = {
  setName: Function
};

type Props = State & Actions;

export default function (props: Props): ?React$Element<any> {
  return (
    <div>
      <h2>Hello, {props.name}!</h2>
      <input
        value={props.name}
        onChange={event => props.setName (event.target.value)}
      />
    </div>
  );
}
