import React, { Component } from 'react';

class Circle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(`Props from inside Circle component: ${JSON.stringify(this.props, null, 2)}`);
    return (
      <div id="circle" />
    );
  }
}

export default Circle;
