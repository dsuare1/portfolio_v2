import React, { Component } from 'react';
import { render } from 'react-dom';

import CalloutCard from './components/CalloutCard';
import Horizon from './components/Horizon';
import Copy from './components/Copy';

import '../css/style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 'app',
    };
  }

  render() {
    return (
      <div id={this.state.id}>
        <CalloutCard />
        <Copy />
        <Horizon />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));