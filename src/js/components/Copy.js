import React, { Component } from 'react';

class Copy extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="copy-container">
        <p>{this.props.value}</p>
      </div>
    );
  }
}

export default Copy;
