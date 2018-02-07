import React from 'react';
import { Link } from 'react-router-dom';
const logo = require('../img/logo-white.png');

class Header extends React.Component {
    componentDidMount() {
      window.addEventListener('scroll', () => {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 3000 ){
            const projectBackground = document.getElementById('project_background');
            projectBackground.style.transform = `translateY(${(-((window.scrollY - 2000))/2)}px)`;
          }
        });
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
