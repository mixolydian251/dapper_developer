import React from 'react';

const Contact = () => (
  <div className="video-container">
    <div className="video-background">
      <div className="video-foreground">
        <iframe src="https://www.youtube.com/embed/AYmZaEVOIIs?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=AYmZaEVOIIs"
                frameborder="0"
                allowfullscreen>
        </iframe>
      </div>
    </div>

    <div className="gradient"> </div>

    <div className="video__banner">
      <h1 className="video__text">Check out my code on Github!</h1>
    </div>

  </div>
);

export default Contact