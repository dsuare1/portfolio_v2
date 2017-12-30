import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Circle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        id={this.props.id}
        className="circle"
        onMouseOver={e => this.props.onMouseOver(e)}
      />
    );
  }
}

Circle.propTypes = {
  id: PropTypes.number.isRequired,
  onMouseOver: PropTypes.func.isRequired,
};

export default Circle;
