import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Developer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(`Props from inside Developer component: ${JSON.stringify(this.props, null, 2)}`);
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
