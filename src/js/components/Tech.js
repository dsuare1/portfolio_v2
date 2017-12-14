import React from 'react';

function Tech() {
  return (
    <div id="tech-container">
      <div id="tech-list-left">
        <ol className="tech-list">
          <li>Node</li>
          <li>Express</li>
          <li>Postgres</li>
          <li>Sequelize ORM</li>
          <li>Mocha</li>
          <li>Should</li>
        </ol>
      </div>
      <div id="tech-list-right">
        <ol className="tech-list">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>jQuery</li>
          <li>Git</li>
          <li>React</li>
          <li>MongoDB</li>
        </ol>
      </div>
    </div>
  );
}

export default Tech;
