import React from 'react';
import { Link } from 'react-router-dom';
const logo = require('../img/logo-white.png');

class Header extends React.Component {
    componentDidMount() {
        window.addEventListener('scroll', () => {
            console.log(window.scrollY);
            if (window.scrollY < window.innerHeight){
                const headerBackground = document.getElementById('header_background');
                headerBackground.style.transform = `translateY(-${window.scrollY/2}px)`;
            }
            if (window.scrollY > window.innerHeight - 300 ){
                const webBackground = document.getElementById('web_background');
                const me = document.getElementById('image_of_me');
                me.style.transform = `translateY(${(-((window.scrollY ) - (window.innerHeight))/1.5)}px)`;
                webBackground.style.transform = `translateY(${(-((window.scrollY ) - (window.innerHeight))/3)}px)`;
            }
            if (window.scrollY > 1300 ){
                const educationBackground = document.getElementById('education_background');
                educationBackground.style.transform = `translateY(${(-((window.scrollY - 1300))/2)}px)`;
            }
            if (window.scrollY > 2000 ){
                const projectBackground = document.getElementById('project_background');
                projectBackground.style.transform = `translateY(${(-((window.scrollY - 2000))/2)}px)`;
            }
        })
    }
    render(){
        return(
            <header id="header_background" className="header">
                <div className="header__logo-container">
                    <img src={logo} alt="logo" className="header__logo"/>
                </div>
                <div className="header__title-container">
                    <h1 className="header__title">
                        <span className="header__title--main">The Dapper</span>
                        <span className="header__title--main">Developer</span>
                        <span className="header__title--sub">where design meets performance</span>
                    </h1>
                    <Link to="/" className="btn btn-white">Learn More</Link>
                </div>
            </header>

        )
    }
}


export default Header;
