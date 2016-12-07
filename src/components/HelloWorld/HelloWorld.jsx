/* @flow */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setName } from '../../actions/';

type Props = {
  name?: string,
  setName?: Function
};

class HelloWorld extends Component {
  constructor (props: Props) {
    super (props);
  }
  handleNameChange = (event) => {
    this.props.setName (event.target.value);
  }
  render () {
    return <div>
      <h2>Hello, {this.props.name}!</h2>
      <input value={this.props.name} onChange={this.handleNameChange} />
    </div>;
  }
}

function mapStateToProps (state) {
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
