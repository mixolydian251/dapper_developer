import React from 'react';

const salem = require('../img/salem.png');
const wake = require('../img/wake_tech.png');
const ncstate = require('../img/nc_state_logo.svg');

const Education = () => (
    <div className="education">
        <h3 className="education__heading">Education</h3>
        <div id="education_background" className="school">
            <div className="school__card school__card--high-school">
                <h3 className="school__title">High School</h3>
                <div className="school__content">Salem High School</div>
                <div className="school__content">Salem, Virgina</div>
                <div className="school__content">International Baccalaureate</div>
                <div className="school__content">2012</div>
                <img className="school__content--image" src={salem}/>
            </div>
            <div className="school__card school__card--associates">
                <h3 className="school__title">Associates</h3>
                <div className="school__content">Wake Tech Community College</div>
                <div className="school__content">Raleigh, North Carolina</div>
                <div className="school__content">Associates in Engineering</div>
                <div className="school__content">2016</div>
                <img className="school__content--image" src={wake}/>
            </div>
            <div className="school__card school__card--bachelors">
                <h3 className="school__title">Bachelors</h3>
                <div className="school__content">North Carolina State University</div>
                <div className="school__content">Raleigh, North Carolina</div>
                <div className="school__content">Perusing Bachelors in Computer Science </div>
                <div className="school__content">2017 - Present</div>
                <img className="school__content--image" src={ncstate}/>
            </div>
        </div>
    </div>
);

export default Education