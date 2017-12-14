import React from 'react';

import traLandingPage from '../../assets/img/The-Round-About-Landing-Page.png';
import seinfeld from '../../assets/img/seinfeld.png';

function Portfolio() {
  return (
    <div id="portfolio-container">
      <div className="portfolio-item">
        <a href="http://www.theroundaboutstore.com/" className="portfolio-link" target="_blank" rel="noopener noreferrer"><p>The Round About</p>
          <img src={traLandingPage} alt="The Round About" />
        </a>
      </div>
      <div className="portfolio-item">
        <a href="http://suarez-seinfeld-trivia.herokuapp.com/" className="portfolio-link" target="_blank" rel="noopener noreferrer"><p>&copy;Seinfeld Trivia Game</p>
          <img src={seinfeld} alt="Seinfeld Trivia Game" />
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
