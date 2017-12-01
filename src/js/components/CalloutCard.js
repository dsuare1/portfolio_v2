import React, { Component } from 'react';

import NameCard from './NameCard';
import ProfilePic from './ProfilePic';

class CalloutCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: 'callout-card-container',
    };
  }

  render() {
    return (
      <div className={this.state.class}>
        <NameCard />
        <ProfilePic />
      </div>
    );
  }
}

export default CalloutCard;
