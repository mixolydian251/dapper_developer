import React from 'react';

const docker = require('../img/Docker_Logo.svg');
const express = require('../img/Express_Logo.svg');
const firebase = require('../img/Firebase_Logo.svg');
const javascript = require('../img/Javascript_Logo.svg');
const mongo = require('../img/Mongodb_Logo.svg');
const node = require('../img/Node_Logo.svg');
const react = require('../img/React_Logo.svg');
const redux = require('../img/Redux_Logo.svg');
const sass = require('../img/Sass_Logo.svg');

const WebDevelopment = () => (
  <div id="web_background" className="web">
    <h3 className="web__heading"> </h3>
    <div className="web__paragraph-box">
      <p className="web__paragraph">
        In the ever changing times of Web Development, there is certainly no shortage of awesome
        tools, libraries and frameworks on the market. Here are a few that I love to use!
      </p>
    </div>

    <div className="web__tech-box">
      <div className="web__tech">
        <img className="web__tech--javascript" src={javascript} alt="Javascript" />
        <span className="web__tech--text">Javascript</span>
      </div>
      <div className="web__tech">
        <img className="web__tech--sass" src={sass} alt="Sass/CSS" />
        <span className="web__tech--text">CSS & Sass</span>
      </div>
      <div className="web__tech">
        <img className="web__tech--react" src={react} alt="React" />
        <span className="web__tech--text">React</span>
      </div>
      <div className="web__tech">
        <img className="web__tech--redux" src={redux} alt="Redux" />
        <span className="web__tech--text">Redux</span>
      </div>
      <div className="web__tech">
        <img className="web__tech--firebase" src={firebase} alt="Firebase" />
        <span className="web__tech--text">Firebase</span>
      </div>
      <div className="web__tech">
        <img className="web__tech--mongo" src={mongo} alt="MongoDB"/>
        <span className="web__tech--text">MongoDB</span>
      </div>
      <div className="web__tech">
        <img className="web__tech--docker" src={docker} alt="Docker" />
        <span className="web__tech--text">Docker</span>
      </div>
      <div className="web__tech">
        <img className="web__tech--node" src={node} alt="Node.js" />
        <span className="web__tech--text">Node.js</span>
      </div>
      <div className="web__tech">
        <img className="web__tech--express" src={express} alt="Express.js" />
        <span className="web__tech--text">Express.js</span>
      </div>
    </div>
  </div>
);

export default WebDevelopment;
