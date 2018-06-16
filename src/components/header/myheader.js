import React from 'react';
import './header.css';

function myheader (props) {
  return <h2 className="title">Hello, {props.title}</h2>
}

export default myheader
