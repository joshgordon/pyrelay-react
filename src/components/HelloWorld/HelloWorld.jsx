/* @flow */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setName } from '../../actions/';

type Props = {
  name?: string,
  setName?: Function
};

export class HelloWorld extends Component {
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

function mapStateToProps (state): Props {
  return {
    name: state.name
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators ({
    setName
  }, dispatch);
}

export default connect (mapStateToProps, mapDispatchToProps)(HelloWorld);
