import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Copy extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="copy-container">{this.props.copy}</div>
    );
  }
}

Copy.propTypes = {
  copy: PropTypes.any.isRequired,
};

export default Copy;
