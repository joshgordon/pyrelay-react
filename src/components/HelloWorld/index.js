/* @flow */

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import HelloWorld from "./HelloWorld";
import type { State, Actions } from "./HelloWorld";
import { setName } from "../../actions/";

function mapStateToProps (state): State {
  return {
    name: state.name
  };
}

function mapDispatchToProps (dispatch: Function): Actions {
  return bindActionCreators (
    {
      setName
    },
    dispatch
  );
}

export default connect (mapStateToProps, mapDispatchToProps) (HelloWorld);
