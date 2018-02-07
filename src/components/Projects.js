import React from 'react'
import {Link} from 'react-router-dom';

const Projects = () => (
    <div  className="projects">
        <h3 className="projects__heading">Side Projects</h3>
        <div id="project_background" className="projects__cards">

            <div className="card">
                <div className="card__side card__side--front">
                    <div className="card__front--image card__front--image-trash"/>
                    <div className="card__front--title card__front--title-1">Chase's Adventure</div>
                    <div className="card__front--description"> An in browser game featuring my dog, Chase </div>
                </div>
                <div className="card__side card__side--back card__side--back-1">
                    <p>
                        This game features my dog, Chase, who loves to go digging in our trash to find some tasty treats.
                        Although, not every thing you find is a delicacy. Use the arrow keys to move (or tap the corresponding side on mobile).
                        See how many goodies you can collect, while dodging the the bad stuff!
                    </p>

                    <Link to="/" className="btn-white card__button">Demo</Link>
                </div>
            </div>




            <div className="card">
                <div className="card__side card__side--front">
                    <div className="card__front--image card__front--image-run"/>
                    <div className="card__front--title card__front--title-2">Run App</div>
                    <div className="card__front--description"> Track your run progress to see if you are improving</div>
                </div>
                <div className="card__side card__side--back card__side--back-2">
                    <p>
                        This application was designed for use on a treadmill. Simply tap the timer, then set your run speed.
                        The run app will dynamically track your pace and distance traveled. Once you have finished,
                        upload your run to the cloud and compare your progress with previous runs.
                    </p>
                    <Link to="/" className="btn-white card__button">Demo</Link>
                </div>
            </div>




            <div className="card">
                <div className="card__side card__side--front">
                    <div className="card__front--image card__front--image-brooks_website"/>
                    <div className="card__front--title card__front--title-3">Brooks Website</div>
                    <div className="card__front--description"> A website for my local Food bank &
                                                               Clothing Closet </div>
                </div>
                <div className="card__side card__side--back card__side--back-3">
                    <p>
                        This is a small, informational website for the food bank & clothing closet I volunteer at. The goal
                        behind this project was to create a performance oriented website intended for mid-tier mobile use.
                        The site features dynamic hours of operation, as well as information on how to use the food bank.
                    </p>
                    <Link to="/" className="btn-white card__button">Demo</Link>
                </div>
            </div>



            <div className="card">
                <div className="card__side card__side--front">
                    <div className="card__front--image card__front--image-brooks_search"/>
                    <div className="card__front--title card__front--title-3">Brooks Search</div>
                    <div className="card__front--description"> An internal sign in system for my local Food Bank &
                                                               Clothing Closet </div>
                </div>
                <div className="card__side card__side--back card__side--back-3">
                    Details for Brooks Search
                </div>
            </div>

            <div className="card">
                <div className="card__side card__side--front">
                    <div className="card__front--image card__front--image-you_pick"/>
                    <div className="card__front--title card__front--title-1">You Pick</div>
                    <div className="card__front--description"> A simple app to help you decide where you should eat </div>
                </div>
                <div className="card__side card__side--back card__side--back-1">
                    Details for You Pick
                </div>
            </div>

            <div className="card">
                <div className="card__side card__side--front">
                    <div className="card__front--image card__front--image-expense"/>
                    <div className="card__front--title card__front--title-2">Expenses</div>
                    <div className="card__front--description"> Track all of your expenses with the Expense app </div>
                </div>
                <div className="card__side card__side--back card__side--back-2">
                        Details for expenses
                </div>
            </div>

            </div>
        </div>

);

export default Projects;