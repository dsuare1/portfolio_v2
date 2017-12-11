import React, { Component } from 'react';

class Circle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        id={this.props.id}
        className="circle"
        onMouseOver={(e) => {
        this.props.onMouseOver(e);
      }}
      />
    );
  }
}

export default Circle;
