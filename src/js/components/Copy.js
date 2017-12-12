import React, { Component } from 'react';

class Copy extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="copy-container">{this.props.value}</div>
    );
  }
}

export default Copy;
