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
    this.state = {
      hover: false,
      tooltip: 'Click to copy!',
    };
  }

  handleMouseIn() {
    this.setState({
      hover: true,
    });
  }

  handleMouseOut() {
    this.setState({
      hover: false,
      tooltip: 'Click to copy!',
    });
  }

  handleClick(e) {
    copyToClipboard(e.target.innerHTML);

    this.setState({
      hover: true,
      tooltip: 'Copied!',
    });
  }

  render() {
    const tooltipStyle = {
      alignSelf: 'center',
      backgroundColor: '#01182c',
      borderRadius: '.25em',
      display: this.state.hover ? 'table' : 'none',
      fontSize: '.5em',
      marginTop: '-10px',
      padding: '.5em',
    };

    const upArrowStyle = {
      alignSelf: 'center',
      backgroundColor: '#01182c',
      display: this.state.hover ? 'table' : 'none',
      height: '20px',
      marginTop: '5px',
      transform: 'rotate(45deg)',
      width: '20px',
    };

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
            <button id="badge-email-button" onMouseOver={() => { this.handleMouseIn(); }} onFocus={() => { this.handleMouseIn(); }} onMouseOut={() => { this.handleMouseOut(); }} onBlur={() => { this.handleMouseOut(); }} onClick={(e) => { this.handleClick(e); }}>suarez.derrick@gmail.com</button>
            <div style={upArrowStyle} />
            <span style={tooltipStyle}>{this.state.tooltip}</span>
          </h1>
        </div>
      </div>
    );
  }
}

export default Badge;
