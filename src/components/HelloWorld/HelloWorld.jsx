/* @flow */

import React from "react";
import Switch from "./Switch";

export default function (props: any): ?React$Element<any> {
  return (
    <div>
      {
        props.state.map((state, index) => {
            return <Switch state={state}
                    index={index + 1}
                    toggle={() => {
                      const newState = (1*state + 1) % 2
                      props.setState(index, newState)
                    }}
                    key={index}
            />
        })
      }
    <p onClick={() => props.connect_mqtt()}>{props.status}</p>
    </div>
  );
}
