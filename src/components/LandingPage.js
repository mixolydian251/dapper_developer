import React from 'react';
import Header from './Header';
import Projects from './Projects';
import About from './About';
import WebDevelopment from './WebDevelopment';
import Footer from './Footer';
import AboutPicture from './AboutPicture';

const LandingPage = () => (
  <div>
    <Header />
    <About />
    <AboutPicture />
    <WebDevelopment />
    <Projects />
    <Footer />
  </div>
);

export default LandingPage;
