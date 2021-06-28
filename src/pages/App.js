import React, { useEffect } from "react";
import '../styles/App.css';
import AppIcon from "../assets/AppIcon";
import { Link, animateScroll } from "react-scroll";
import { SocialIcon } from 'react-social-icons';
import useScroll from "../hooks/useScroll";
import UpArrow from "../assets/UpArrow";

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
  }, [])

  return(
    <>
      <header>
        <div className="left">
          <div className="menu">
            <AppIcon className="icon" />
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
              <a href="#">Articles</a>
            </div>
            <div className="menuLink">
              <SocialIcon url="https://www.instagram.com/cyrildesch/" bgColor="white" style={{ height: '3vw', width: '3vw' }} />
              <SocialIcon url="https://github.com/CyrilDesch" bgColor="white" style={{ height: '3vw', width: '3vw' }} />
              <SocialIcon url="https://www.linkedin.com/in/cyril-deschamps-7377681b7/" bgColor="white" style={{ height: '3vw', width: '3vw' }} />
            </div>
          </div>
          <span
            class="txt-rotate"
            data-period="2000"
            data-rotate='["Développeur", "mobile et web"]'>
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
      </header>
      <main>
        <div className="container">
          <div className="left">
            <h1>
              En quoi je peux<br/>
              être utile ?
            </h1>
            <p>
              Mes projets &darr;
            </p>
          </div>
          <div className="middle">
            
          </div>
          <div className="right">
            <div>
              <h1>Blabla</h1>
              <p>blabla</p>
            </div>
            <div>
              <h1>Blabla</h1>
              <p>blabla</p>
            </div>
            <div>
              <h1>Blabla</h1>
              <p>blabla</p>
            </div>
            <div>
              <h1>Blabla</h1>
              <p>blabla</p>
            </div>
          </div>
        </div>
        {scrolled ?
          <UpArrow className="iconUp" onClick={() => animateScroll.scrollToTop()} />
        : null}
      </main>
    </>
  );
}

export default App;