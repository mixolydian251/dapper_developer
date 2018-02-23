import React from 'react';
import Header from './Header'
import Projects from './Projects'
import About from './About'
import WebDevelopment from './WebDevelopment';
import Education from './Education';
import AboutPicture from './AboutPicture';
import Contact from './Contact';

const LandingPage = () => (
  <div>
    <Header/>
      <div >
        <div >
          <About/>
          <AboutPicture/>
          <WebDevelopment/>
          <Education/>
          <Projects/>
          <Contact/>
      </div>
    </div>
  </div>
);

export default LandingPage;

