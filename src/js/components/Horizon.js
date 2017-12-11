import React, { Component } from 'react';

import Circle from './Circle';

class Horizon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="horizon-container">
        <div className="section">
          <h3>The Person</h3>
          <Circle id="person" onMouseOver={e => this.props.onMouseOver(e)} />
        </div>
        <div className="section">
          <h3>The Developer</h3>
          <Circle id="developer" onMouseOver={e => this.props.onMouseOver(e)} />
        </div>
        <div className="section">
          <h3>Technologies I&apos;ve Used</h3>
          <Circle id="technologies" onMouseOver={e => this.props.onMouseOver(e)} />
        </div>
        <div className="section">
          <h3>Portfolio</h3>
          <Circle id="portfolio" onMouseOver={e => this.props.onMouseOver(e)} />
        </div>
      </div>
    );
  }
}

export default Horizon;
