import React, { Component } from 'react';

import Circle from './Circle';

class Horizon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(`Props from inside Horizon component: ${JSON.stringify(this.props, null, 2)}`);
    return (
      <div id="horizon-container">
        <Circle onMouseOver={this.props.onMouseOver }/>
        <Circle onMouseOver={this.props.onMouseOver }/>
        <Circle onMouseOver={this.props.onMouseOver }/>
        <Circle onMouseOver={this.props.onMouseOver }/>
      </div>
    );
  }
}

export default Horizon;
