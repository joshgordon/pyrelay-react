import React, { Component } from 'react';
import { HelloWorld } from './HelloWorld';
import renderer from 'react-test-renderer';

describe ('HelloWorld', () => {
  test ('component should mount', () => {
    const component = renderer.create (
      <HelloWorld name="Bob" />
    );
    let tree = component.toJSON ();
    expect (tree).toMatchSnapshot ();
  });
});
