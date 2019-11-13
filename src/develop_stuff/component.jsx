import React from 'react';
import ReactDOM from 'react-dom';
import Example1 from './example1';
import Example2 from './example2';
// import './test-styles.sass';

const elem = (
  <div
    style={{
      alignItems: 'center',
      display: 'flex',
      height: '100%',
      justifyContent: 'space-around',
      position: 'absolute',
      width: '100%',
      background: '#e0e0e0',
    }}
  >
    <Example1 />
    <Example2 />
  </div>
);

ReactDOM.render(elem, document.getElementById('root'));
