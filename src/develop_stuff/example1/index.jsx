import React, { Component } from 'react';
import Dropdown from '../../index';

const SOURCE = [
  { key: 'edit', label: 'Edit' },
  { key: 'snooze', label: 'Snooze' },
  { key: 'delete', label: 'Delete' },
];

/* eslint-disable */
export default class Example1 extends Component {
  constructor() {
    super();

    this.state = {};
  }

  onChange = item => {
    // do what you need
  }

  render() {
    return (
      <Dropdown
        autoFocus
        label="More"
        onChange={(item) => this.onChange(item)}
        source={SOURCE}
        listItemRender={(item) => <div>{item.label}</div>}
      />
    );
  }
}
