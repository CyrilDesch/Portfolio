import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import useScroll from "../hooks/useScroll";
import AppIcon from "../assets/AppIcon";
import { SocialIcon } from 'react-social-icons';
import { animateScroll } from "react-scroll";
import UpArrow from "../assets/UpArrow";
import '../styles/App.css';


import Presentation from "./Presentation";
import Projets from "./Projets";
import Articles from "./Articles";

const App = () => {

  const scrolled = useScroll();

  useEffect(() => {
    class Anim {
      constructor(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 1000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
      }

      tick() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
      
        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
      
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
      
        var that = this;
        var delta = 150 - Math.random() * 100;
      
        if (this.isDeleting) { delta /= 2; }
      
        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 100;
        }
      
        setTimeout(function() {
          that.tick();
        }, delta);
      }
    }

    const elements = document.getElementsByClassName('txt-rotate');
    for (let i=0; i<elements.length; i++) {
      const toRotate = elements[i].getAttribute('data-rotate');
      const period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new Anim(elements[i], JSON.parse(toRotate), period);
      }
    }
    
    const css = document.createElement("style");
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.1vw solid white }";
    document.body.appendChild(css);
  }, []);

  const [activePath, setActivePath] = useState("/");

  return(
    <Router>
      <div>
        <header>
          <div className="left">
            <nav>
              <ul className="menu">
                <li>
                  <AppIcon color="white" className="icon" />
                </li>
                <li className="menuContainer">
                  <Link className={activePath === "/" ? "active" : ""} to="/">Présentation</Link>
                  <Link className={activePath === "/projets" ? "active" : ""} to="/projets">Projets</Link>
                  <Link className={activePath === "/articles" ? "active" : ""} to="/articles">Articles</Link>
                </li>
                <li className="menuLink">
                  <SocialIcon url="https://www.instagram.com/cyrildesch/" bgColor="white" style={{ height: '3vw', width: '3vw' }} />
                  <SocialIcon url="https://github.com/CyrilDesch" bgColor="white" style={{ height: '3vw', width: '3vw' }} />
                  <SocialIcon url="https://www.linkedin.com/in/cyril-deschamps-7377681b7/" bgColor="white" style={{ height: '3vw', width: '3vw' }} />
                </li>
              </ul>
            </nav>
            <span
              class="txt-rotate"
              data-period="2000"
              data-rotate='["Développeur", "mobile"]'>
            </span>
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
          {scrolled ?
            <UpArrow className="iconUp" onClick={() => animateScroll.scrollToTop()} />
          : null}
        </header>

        <Switch>
          <Route exact path="/projets">
            <Projets setActivePath={setActivePath} />
          </Route>
          <Route exact path="/articles">
            <Articles setActivePath={setActivePath} />
          </Route>
          <Route exact path="/">
            <Presentation setActivePath={setActivePath} />
          </Route>
        </Switch>

        <footer>
          <div>
            <p><span className="barTitle">EMAIL : </span>cyril.deschamps@outlook.fr</p>
            <AppIcon color="black" className="icon"  onClick={() => animateScroll.scrollToTop()} />
            <p><span className="barTitle">TELEPHONE : </span>06 42 90 88 40</p>
          </div>
          <div/>
        </footer>
      </div>
    </Router>
  );
}

export default App;