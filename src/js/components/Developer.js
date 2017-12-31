import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Developer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="person-container">
        <p>{this.props.value}</p>
      </div>
    );
  }
}

Developer.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Developer;
