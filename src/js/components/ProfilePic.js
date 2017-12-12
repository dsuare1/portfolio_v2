import React from 'react';

import profilePic from '../../assets/profile_pic_small.png';

function ProfilePic() {
  return (
    <img id="profile-pic" src={profilePic} alt="Profile Pic" />
  );
}

export default ProfilePic;
