import React, { Component } from 'react';

class Person extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(`Props from inside Person component: ${JSON.stringify(this.props, null, 2)}`);
    return (
      <div id="person-container">
        <p>{this.props.value}</p>
      </div>
    );
  }
}

export default Person;
