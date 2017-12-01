import React, { Component } from 'react';

class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 'circle',
    };
  }

  render() {
    return (
      <div id={this.state.id} />
    );
  }
}

export default Circle;
