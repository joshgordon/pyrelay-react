/* @flow */

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import HelloWorld from "./HelloWorld";
import { setState, setStatus, connect_mqtt, disconnect_mqtt } from "../../actions/";

function mapStateToProps (state: any): Object {
  return {
    status: state.status,
    state: state.state.toJS()
  };
}

function mapDispatchToProps (dispatch: any): Object {
  return bindActionCreators (
    {
      setState,
      setStatus,
      connect_mqtt,
      disconnect_mqtt
    },
    dispatch
  );
}

export default connect (mapStateToProps, mapDispatchToProps) (HelloWorld);
