import React from "react";
import '../styles/App.css';
import AppIcon from "../assets/AppIcon";
import { Link, animateScroll } from "react-scroll";
import { SocialIcon } from 'react-social-icons';

const App = () => {
  return(
    <>
      <header>
        <div className="left">
          <div className="menu">
            <AppIcon className="icon" onClick={() => animateScroll.scrollToTop()} />
            <div className="menuContainer">
              <Link
                className="accueil active"
                to="accueil"
                smooth={true}
                offset={-50}
                duration={500}
                isDynamic={true}
                ignoreCancelEvents={false}
              >Accueil</Link>
              <Link
                className="presentation"
                to="presentation"
                smooth={true}
                offset={-0.05*window.innerWidth}
                duration={500}
                isDynamic={true}
                ignoreCancelEvents={false}
              >Présentation</Link>
              <Link
                className="projets"
                to="projets"
                smooth={true}
                offset={-0.05*window.innerWidth}
                duration={500}
                isDynamic={true}
                ignoreCancelEvents={false}
              >Projets</Link>
              <a href="#">Blog</a>
            </div>
            <div className="menuLink">
              <SocialIcon url="https://www.instagram.com/cyrildesch/" bgColor="white" style={{ height: '3vw', width: '3vw' }} />
              <SocialIcon url="https://github.com/CyrilDesch" bgColor="white" style={{ height: '3vw', width: '3vw' }} />
              <SocialIcon url="https://www.linkedin.com/in/cyril-deschamps-7377681b7/" bgColor="white" style={{ height: '3vw', width: '3vw' }} />
            </div>
          </div>
        </div>
        <div className="right">
          <svg class="intro" viewbox="0 0 200 86" preserveAspectRatio="xMidYMid meet">
            <text text-anchor="start" textLength="76vh" fontSize="6.4vw" x="10" y="-1.6vw" class="text text-stroke" clip-path="url(#text1)" transform="rotate(90)">FREELANCE</text>
            <defs>
              <clipPath id="text1">
                <text text-anchor="start" textLength="76vh" fontSize="6.4vw" x="10" y="-1.6vw" class="text">FREELANCE</text>
              </clipPath>
            </defs>
          </svg>
        </div>
      </header>
      <main>
        <div className="container">
        </div>
      </main>
    </>
  );
}

export default App;