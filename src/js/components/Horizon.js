import React, { Component } from 'react';

import Circle from './Circle';

class Horizon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="horizon-container">
        <div className="hover-item">
          <h3>The Person</h3>
          <div className="halo">
            <Circle id="person" onMouseOver={e => this.props.onMouseOver(e)} />
          </div>
        </div>
        <div className="hover-item">
          <h3>The Developer</h3>
          <div className="halo">
            <Circle id="developer" onMouseOver={e => this.props.onMouseOver(e)} />
          </div>
        </div>
        <div className="hover-item">
          <h3>Technologies I&apos;ve Used</h3>
          <div className="halo">
            <Circle id="technologies" onMouseOver={e => this.props.onMouseOver(e)} />
          </div>
        </div>
        <div className="hover-item">
          <h3>Portfolio</h3>
          <div className="halo">
            <Circle id="portfolio" onMouseOver={e => this.props.onMouseOver(e)} />
          </div>
        </div>
      </div>
    );
  }
}

export default Horizon;
