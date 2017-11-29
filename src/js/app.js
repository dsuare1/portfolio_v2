import React from 'react';
import { render } from 'react-dom';

import '../css/style.css';
import profilePic from '../assets/profile_pic_round.png';

function ProfilePic() {
  return (
    <img src={profilePic} alt="Profile Pic" />
  );
}

function Horizon() {
  return (
    <div id="horizon-container">
      <Circle />
      <Circle />
      <Circle />
      <Circle />
    </div>
  );
}

function Circle() {
  return (
    <div id="circle" />
  );
}

function App() {
  return (
    <div>
      <h1 id="hero-text">Derrick Suarez</h1>
      <ProfilePic />
      <Horizon />
    </div>
  );
}

render(<App />, document.getElementById('root'));
