import React from 'react';

const github = require('../img/octocat.svg');
const linkedin = require('../img/linkedin.svg');

const Footer = () => (
  <div className="footer">
    <div className="footer__copyright">
      <p  className="footer__copyright--text">Built by yours truly | Raleigh, NC | &#169;{new Date().getFullYear()} </p>
    </div>

    <div className="footer__social">
      <a href="https://github.com/mixolydian251" target="_blank">
        <img src={github} alt="GitHub's mascot, Octocat" className="footer__social--github"/>
      </a>
      <a href="https://linkedin.com/jordanhensley93" target="_blank">
        <img src={linkedin} alt="Linkedin Logo" className="footer__social--linkedin"/>
      </a>
    </div>
  </div>
);

export default Footer