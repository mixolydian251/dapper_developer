import React from 'react';
const octocat = require('../img/octocat.png');
const linkedin = require('../img/linkedin.svg');

const Contact = () => (
  <div className="video-container">
    <div className="video-background">
      <div className="video-foreground">
        <iframe
          src="https://www.youtube.com/embed/AYmZaEVOIIs?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=AYmZaEVOIIs"
          frameborder="0"
          allowfullscreen
        />
      </div>
    </div>

    <div className="gradient"> </div>

    <banner className="video__banner video__banner--github">
      <a href="http://github.com/mixolydian251" target="_blank" className="relative">
        <h1 className="video__text">Check out my code on Github!</h1>
        <img src={octocat} alt="Github's Octocat" className="video__banner--github-image" />
      </a>
    </banner>

    <banner className="video__banner video__banner--linkedin">
      <a href="http://www.linkedin.com/in/jordanhensley93" target="_blank" className="relative">
        <h1 className="video__text">Connect with me on LinkedIn!</h1>
        <div className="img-background">
          <img src={linkedin} alt="LinkedIn's Logo" className="video__banner--linkedin-image" />
        </div>
      </a>
    </banner>
  </div>
);

export default Contact;
