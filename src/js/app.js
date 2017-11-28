import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.css';
import profilePic from '../assets/profile_pic.png';

export default class Hello extends Component {
  render() {
    return (
      <div>
        <h1 id="hero-text">Derrick Suarez</h1>
        <img src={profilePic} alt="Profile Pic" />
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));
