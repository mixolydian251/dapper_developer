import React from 'react';
import Header from './Header'
import Projects from './Projects'
import About from './About'
import WebDevelopment from './WebDevelopment';
import Education from './Education';
import AboutPicture from './AboutPicture';

const LandingPage = () => (
  <div>
      <Header/>
      <div className="page__container">
          <div className="page__layout">
              <About/>
              <WebDevelopment/>
              <Education/>
              <AboutPicture/>
              <Projects/>
          </div>
      </div>
  </div>
);

export default LandingPage;
