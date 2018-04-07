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
        In the ever changing times of Javascript Land, there is certainly no shortage of awesome
        libraries and frameworks on the market. Here are a few that I love!
      </p>
    </div>

    <div className="web__tech-box">
      <div className="web__tech">
        <img className="web__tech--javascript" src={javascript} alt="Javascript" />
      </div>
      <div className="web__tech">
        <img className="web__tech--sass" src={sass} alt="Sass/CSS" />
      </div>
      <div className="web__tech">
        <img className="web__tech--react" src={react} alt="React" />
      </div>
      <div className="web__tech">
        <img className="web__tech--redux" src={redux} alt="Redux" />
      </div>
      <div className="web__tech">
        <img className="web__tech--firebase" src={firebase} alt="Firebase" />
      </div>
      <div className="web__tech">
        <img className="web__tech--mongo" src={mongo} alt="MongoDB"/>
      </div>
      <div className="web__tech">
        <img className="web__tech--docker" src={docker} alt="Docker" />
      </div>
      <div className="web__tech">
        <img className="web__tech--node" src={node} alt="Node.js" />
      </div>
      <div className="web__tech">
        <img className="web__tech--express" src={express} alt="Express.js" />
      </div>
    </div>
  </div>
);

export default WebDevelopment;
