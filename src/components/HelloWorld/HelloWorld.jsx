/* @flow */

import React from "react";

export default function (props: any): ?React$Element<any> {
  return (
    <div>
      <h2>
        Hello, {props.name}!
      </h2>
      <input
        value={props.name}
        onChange={event => props.setName (event.target.value)}
      />
    </div>
  );
}
