/* @flow */

import React, { Component } from 'react';

type Props = {};

class HelloWorld extends Component {
  constructor (props: Props) {
    super (props);
  }
  render () {
    return <h2>Hello, World!</h2>;
  }
}

export default HelloWorld;
