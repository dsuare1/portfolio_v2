import React, { Component } from 'react';

import profilePic from '../../assets/profile_pic_round.png';

class ProfilePic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 'profile-pic',
      alt: 'Profile Pic',
    };
  }

  render() {
    return (
      <img id={this.state.id} src={profilePic} alt={this.state.alt} />
    );
  }
}

export default ProfilePic;
