import React, { Component } from 'react';

class NameCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: 'name-card-container',
      headerClass: 'hero-text',
    };
  }

  render() {
    return (
      <div className={this.state.class}>
        <h1 className={this.state.headerClass}>Derrick Suarez</h1>
        <h3 className={this.state.headerClass}>suarez.derrick@gmail.com</h3>
      </div>
    );
  }
}

export default NameCard;
