import React, { Component } from 'react';
import { render } from 'react-dom';

import Badge from './components/Badge';
import Copy from './components/Copy';
import Horizon from './components/Horizon';
import Tech from './components/Tech';

import '../css/style.css';

import copy from '../assets/copy.json';

function createCopy(hash) {
  return Object.keys(hash).map((p, i) => {
    return <p key={i}>{hash[p]}</p>;
  });
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copy: createCopy(copy.person),
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handleMouseOver(e) {
    let desiredCopy;

    switch (e.target.id) {
      case 'person':
        desiredCopy = createCopy(copy.person);
        break;

      case 'developer':
        desiredCopy = createCopy(copy.developer);
        break;

      case 'technologies':
        desiredCopy = <Tech />;
        break;

      default:
        // Do nothing
    }
    this.setState({
      copy: desiredCopy,
    });
  }

  render() {
    return (
      <div id="app">
        <Badge />
        <Copy value={this.state.copy} />
        <Horizon onMouseOver={e => this.handleMouseOver(e)} />
      </div>
    );
  }
}

export default App;

render(<App />, document.getElementById('react-root'));
