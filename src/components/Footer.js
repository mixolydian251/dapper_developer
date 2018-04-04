import React from 'react';

const github = require('../img/octocat.svg');
const linkedin = require('../img/linkedin.svg');
const email = require('../img/email.svg');

const Footer = () => (
  <div className="footer">
    <div className="footer__copyright">
      <p className="footer__copyright--text">
        Built by yours truly | Raleigh, NC | &#169;{new Date().getFullYear()}{' '}
      </p>
    </div>

    <div className="footer__contact">
      <div className="footer__social">
        <a href="https://github.com/mixolydian251" target="_blank">
          <div className="footer__social-container">
            <img src={github} alt="GitHub's mascot, Octocat" className="footer__social--img" />
            <span>@mixolydian251</span>
          </div>
        </a>
        <a href="https://linkedin.com/jordanhensley93" target="_blank">
          <div className="footer__social-container">
            <img src={linkedin} alt="Linkedin Logo" className="footer__social--img" />
            <span>@jordanhensley93</span>
          </div>
        </a>
      </div>

      <div className="footer__email">
        <img src={email} alt="Linkedin Logo" className="footer__email--img" />
        <span className="footer__email--text">jordanhensley93@gmail.com</span>
      </div>
    </div>
  </div>
);

export default Footer;
