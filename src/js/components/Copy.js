import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

Copy.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Copy;
