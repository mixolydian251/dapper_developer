import React from 'react';
const jordy = require('../img/me.png');

const AboutPicture = () => (
  <div className="about__pictures">
    <img id="image_of_me" className="about__pictures--me" src={jordy} />
  </div>
);

export default AboutPicture;
