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
        <h3 className="web__heading">Web Development</h3>
        <div className="web__paragraph-box">
            <p className="web__paragraph">
                In the ever changing times of Javascript Land, there is certainly no shortage of awesome libraries
                and frameworks on the market. Here are a few that I love!
            </p>
        </div>


        <div className="web__tech-box">
            <div className="web__tech">
                <h3 className="web__tech--title">Javascript</h3>
                <img className="web__tech--javascript" src={javascript}/>
            </div>
            <div className="web__tech">
                <h3 className="web__tech--title">Sass</h3>
                <img className="web__tech--sass" src={sass}/>
            </div>
            <div className="web__tech">
                <h3 className="web__tech--title">React</h3>
                <img className="web__tech--react" src={react}/>
            </div>
            <div className="web__tech">
                <h3 className="web__tech--title">Redux</h3>
                <img className="web__tech--redux" src={redux}/>
            </div>
            <div className="web__tech">
                <h3 className="web__tech--title">Firebase</h3>
                <img className="web__tech--firebase" src={firebase}/>
            </div>
            <div className="web__tech">
                <img className="web__tech--mongo" src={mongo}/>
            </div>
            <div className="web__tech">
                <img className="web__tech--docker" src={docker}/>
            </div>
            <div className="web__tech">
                <img className="web__tech--node" src={node}/>
            </div>
            <div className="web__tech">
                <img className="web__tech--express" src={express}/>
            </div>
        </div>
    </div>
);

export default WebDevelopment