import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => (
  <div className="projects">
    <h3 className="projects__heading">Side Projects</h3>
    <div id="project_background" className="projects__cards">
      <button className="card">
        <div className="card__side card__side--front">
          <div className="card__front--image card__front--image-trash" />
          <div className="card__front--title card__front--title-1">Chase's Adventure</div>
          <div className="card__front--description">
            {' '}
            An in browser game featuring my dog, Chase{' '}
          </div>
        </div>
        <div className="card__side card__side--back card__side--back-1">
          <p>
            This game features my dog, Chase, who loves to go digging in our trash to find some
            tasty treats. Although, not every thing you find is a delicacy. Use the arrow keys to
            move (or tap the corresponding side on mobile). See how many goodies you can collect,
            while dodging the the bad stuff!
          </p>
          <Link
            to="http://thedapperdeveloper.com:3000"
            target="_blank"
            className="btn-white card__button"
          >
            Demo
          </Link>
        </div>
      </button>

      <button className="card">
        <div className="card__side card__side--front">
          <div className="card__front--image card__front--image-harmony" />
          <div className="card__front--title card__front--title-2">Harmo-Knowledge</div>
          <div className="card__front--description">
            {' '}
            An app to help you learn some basic music theory{' '}
          </div>
        </div>
        <div className="card__side card__side--back card__side--back-2">
          <p>
            Harmo-Knowledge is an app to help you learn the notes behind musical harmony. Select
            from 2 modes, chords and notes. Then enter a guess and check your answer. From the menu,
            you can target specific chords. You'll be a maestro in no time!
          </p>
          <Link
            to="http://thedapperdeveloper.com:3001"
            target="_blank"
            className="btn-white card__button"
          >
            Demo
          </Link>
        </div>
      </button>

      <button className="card">
        <div className="card__side card__side--front">
          <div className="card__front--image card__front--image-brooks_website" />
          <div className="card__front--title card__front--title-3">Brooks Website</div>
          <div className="card__front--description">
            {' '}
            A website for my local Food bank & Clothing Closet{' '}
          </div>
        </div>
        <div className="card__side card__side--back card__side--back-3">
          <p>
            This is a small, informational website for the food bank & clothing closet I volunteer
            at. The goal behind this project was to create a performance oriented website intended
            for mid-tier mobile use. The site features dynamic hours of operation, as well as
            information on how to use the food bank.
          </p>
          <a
            href="http://brooksavenuechurch.com"
            target="_blank"
            className="btn-white card__button"
          >
            Demo
          </a>
        </div>
      </button>

      <button className="card">
        <div className="card__side card__side--front">
          <div className="card__front--image card__front--image-brooks_search" />
          <div className="card__front--title card__front--title-3">Brooks Search</div>
          <div className="card__front--description">
            {' '}
            An internal sign in system for my local Food Bank & Clothing Closet{' '}
          </div>
        </div>
        <div className="card__side card__side--back card__side--back-3">
          <p>
            This application was built to replace the pen and paper sign-in method at my local
            clothing closet. The site features a React/Redux centered interface along with a
            firebase db. Users can track how many times customers have visited the clothing closet,
            as well as keep track of how many limited items they take.
          </p>
          <Link
            to="http://thedapperdeveloper.com:3002"
            target="_blank"
            className="btn-white card__button"
          >
            Demo
          </Link>
        </div>
      </button>

      <button className="card">
        <div className="card__side card__side--front">
          <div className="card__front--image card__front--image-you_pick" />
          <div className="card__front--title card__front--title-1">Charles Keith</div>
          <div className="card__front--description">
            {' '}
            A personal website for Raleigh based author and playwright, Charles Keith{' '}
          </div>
        </div>
        <div className="card__side card__side--back card__side--back-1">
          <p>This website features and hand built Content Management System</p>
          <Link
            to="http://thedapperdeveloper.com:3004"
            target="_blank"
            className="btn-white card__button"
          >
            Demo
          </Link>
        </div>
      </button>

      <button className="card">
        <div className="card__side card__side--front">
          <div className="card__front--image card__front--image-run" />
          <div className="card__front--title card__front--title-2">Run App</div>
          <div className="card__front--description">
            {' '}
            Track your run progress to see if you are improving
          </div>
        </div>
        <div className="card__side card__side--back card__side--back-2">
          <p>
            This application was designed for use on a treadmill. Simply tap the timer, then set
            your run speed. The run app will dynamically track your pace and distance traveled. Once
            you have finished, upload your run to the cloud and compare your progress with previous
            runs.
          </p>
          <Link
            to="http://thedapperdeveloper.com:3005"
            target="_blank"
            className="btn-white card__button"
          >
            Demo
          </Link>
        </div>
      </button>
    </div>
  </div>
);

export default Projects;
