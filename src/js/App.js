import React, { Component } from 'react';
import { render } from 'react-dom';

import CalloutCard from './components/CalloutCard';
import Horizon from './components/Horizon';
import Copy from './components/Copy';

import '../css/style.css';

const text = {
  person: 'Father, husband, and Node.js developer passionate about building testable, scalable software, with a focus on APIs and backend systems. ' +
          'Originally from Louisiana, I\'ve been a resident of the great city of Austin, TX since mid-2014. ' +
          'I love to travel with my wife, with whom I was lucky enough to live in Madrid, Spain for two years, and I can\'t wait to share the world with my daughter. ' +
          'I enjoy listening to music and attending live shows, woodworking in my free time, and playing golf. ' +
          'Two fun facts about me: I ran with the bulls in Pamplona, Spain during the San Fermines festival in 2012 and have performed five wedding ceremonies. ',
  developer: 'My education about and entrance into software development came about in a non-traditional manner: ' +
              'I studied Web Development at The Coding Bootcamp at UT Austin, an intensive, on-the-job-skills-focused alternative education program, from April - October 2016. ' +
              'We moved quickly, covering full stack technologies, including Node, MySQL, MongoDB, jQuery and Javascript, HTML, CSS, among others. ' +
              'At the end of the experience, I earned a position as a software engineer at a startup here in Austin, Zilkr Cloud Technologies. ' +
              'At Zilkr, I am a backend-focused engineer helping to build a robust API, with live production and live sandbox environments. ' +
              'I lead feature development, from design and planning, all the way through implementation and testing. ' +
              'Node is the main technology I have used at Zilkr. Whenever it is the right choice, we leverage the ES6 Javascript spec, ' +
              'except for the async/await feature; we prefer to write asynchronous code and consume our promises using the bluebird library, ' +
              'paired with generator functions and coroutines. Some of the other technologies I have learned while working at Zilkr include Postgres, ' +
              'RESTful API design, deeper dives into Sequelize and Git, and Integration, Unit, and Behavioral testing with Mocha and Should. ' +
              'I have also become familiar with Jira, BitBucket, the Kanban Process, Agile Methodologies, and Continuous Integration / Deployment practices, among others. ' +
              'Working at a startup, especially one as lean as Zilkr, was not what I had envisioned coming out of bootcamp. ' +
              'I have been afforded the ability to wear multiple hats and play a variety of roles, in addition to my main role as a platform engineer. ' +
              'As a software engineer at Zilkr, I have delivered in-use production features to our largest customer, accounting for a substantial amount of company revenue. ' +
              'Some of the other roles I have played at Zilkr include a customer-facing support role, in which I have collaborated with architects, ' +
              'product and project managers, lead engineers, and QA testers from a global tier-1 phone provider to design, implement, and provide long-term support of our API integration. ' +
              'I have also served as team-lead, collaborating with our remote teams in both Mexico and India.',
};

// put state here to update copy section
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copy: text.person,
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handleMouseOver(e) {
    let desiredCopy;

    switch (e.target.id) {
      case 'person':
        desiredCopy = text.person;
        break;

      case 'developer':
        desiredCopy = text.developer;
        break;

      case 'technologies':
        desiredCopy = 'tech';
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
        <CalloutCard />
        <Copy value={this.state.copy} />
        <Horizon onMouseOver={e => this.handleMouseOver(e)} />
      </div>
    );
  }
}

export default App;

render(<App />, document.getElementById('react-root'));
