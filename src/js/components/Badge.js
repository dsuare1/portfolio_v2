import React, { Component } from 'react';

import ProfilePic from './ProfilePic';

function copyToClipboard(value) {
  const p = document.createElement('textarea');
  p.innerHTML = value;
  document.body.appendChild(p);
  p.select();
  document.execCommand('copy');
  p.remove();

  return false;
}

class Badge extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    e.preventDefault();
    copyToClipboard(e.target.innerHTML);
  }

  render() {
    return (
      <div className="badge-container">
        <div className="badge-copy-container">
          <h1 id="badge-name">Derrick Suarez</h1>
        </div>
        <div className="badge-copy-container">
          <ProfilePic />
        </div>
        <div className="badge-copy-container">
          <h1 id="badge-email">
            <button id="badge-email-button" onClick={e => this.handleClick(e)}>suarez.derrick@gmail.com</button>
          </h1>
        </div>
      </div>
    );
  }
}

export default Badge;
