/* @flow */

import React, { Component } from 'react';
import './HelloWorld.less';

export type State = {
  name: string
}

export type Actions = {
  setName: Function
}

type Props = State|Actions;

export default class HelloWorld extends Component {
  constructor (props: Props): void {
    super (props);
  }
  handleNameChange = (event: any): void => {
    this.props.setName (event.target.value);
  }
  render (): ?React$Element<any> {
    return <div>
      <h2>Hello, {this.props.name}!</h2>
      <input
        value={this.props.name}
        onChange={this.handleNameChange}
      />
    </div>;
  }
}
