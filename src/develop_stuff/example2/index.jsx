import React, { Component } from 'react';
import Dropdown from '../../index';
import EntityAvatar from './entityAvatar';
import './styles.sass';

const SOURCE = [
  { id: '5383130f646', name: 'Artem', lastName: 'Sherman', img: null },
  { id: '5d4988fff91', name: 'Xavier', lastName: 'Suire', img: null },
  { id: '5383136f6c0', name: 'Simon', lastName: 'Flore', img: null },
  { id: '5b0d8bf5155', name: 'Jieyi', lastName: 'Sun', img: null },
  { id: 'ff62870a8d1', name: 'Nick', lastName: 'Friday', img: null },
  { id: 'ff1e0700027', name: 'Thibaud', lastName: 'Evans', img: null },
  { id: '53835603646', name: 'Stephen', lastName: 'Leguillon', img: null },
  { id: '5383513a646', name: 'Shubham', lastName: 'Sharma', img: null },
  { id: '5383130f640', name: 'Sergio', lastName: 'Ramirez', img: null },
  { id: '5a251696ec8', name: 'Rodolphe', lastName: 'Ardant', img: null },
  { id: '55716b6b310', name: 'Olivier', lastName: 'Severyns', img: null },
];

/* eslint-disable */
export default class Example2 extends Component {
  constructor(props, context) {
    super(props, context);
    const { user } = props;

    this.state = {
      value: { id: '53835603646', name: 'Stephen', lastName: 'Leguillon', img: null },
    };
  }

  onChange = (item) => {
    // do what you need
  }

  listItemRender = (item) => (
    <span className="list_item">
      <EntityAvatar {...item} />
      <span>{item.name}</span>
      <span style={{ marginLeft: '5px' }}>{item.lastName}</span>
    </span>
  );

  render() {
    const { value } = this.state;

    return (
      <Dropdown
        label="Select"
        classNames={{
          dropdown: 'custom-db',
          trigger: 'custom-tg',
        }}
        styles={{
          dropdown: { minWidth: '200px' },
          trigger: { minWidth: '200px' },
        }}
        disabled={!SOURCE}
        onChange={(item) => this.onChange(item)}
        source={SOURCE}
        labelRenderer={(item) => `${item.name} ${item.lastName}`}
        listItemRender={this.listItemRender}
        value={SOURCE.find((i) => i.name === value.name)}
      />
    );
  }
}
