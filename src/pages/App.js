import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import useScroll from "../services/useScroll";
import AppIcon from "../assets/icons/AppIcon";
import { SocialIcon } from "react-social-icons";
import { animateScroll } from "react-scroll";
import UpArrow from "../assets/icons/UpArrow";
import "../assets/styles/App.css";
import { slide as Menu } from "react-burger-menu";
import burgerMenuIcon from "../assets/icons/burger.svg";
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
        this.txt = "";
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

        this.el.innerHTML = '<span className="wrap">' + this.txt + "</span>";

        var that = this;
        var delta = 150 - Math.random() * 100;

        if (this.isDeleting) {
          delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === "") {
          this.isDeleting = false;
          this.loopNum++;
          delta = 100;
        }

        setTimeout(function () {
          that.tick();
        }, delta);
      }
    }

    const elements = document.getElementsByClassName("txt-rotate");
    for (let i = 0; i < elements.length; i++) {
      const toRotate = elements[i].getAttribute("data-rotate");
      const period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new Anim(elements[i], JSON.parse(toRotate), period);
      }
    }

    const css = document.createElement("style");
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.1vw solid white }";
    document.body.appendChild(css);
  }, []);

  const [activePath, setActivePath] = useState("/");

  return (
    <Router>
      <div>
        <header>
          <Menu
            styles={styles}
            right
            customBurgerIcon={<img src={burgerMenuIcon} alt="Icon menu" />}
          >
            <a className="menu-item" href="/">
              Présentation
            </a>
            <a className="menu-item" href="/projets">
              Projets
            </a>
          </Menu>
          <div className="left">
            <nav>
              <ul className="menu">
                <li>
                  <AppIcon color="white" className="icon" />
                </li>
                <li className="menuContainer">
                  <Link className={activePath === "/" ? "active" : ""} to="/">
                    Présentation
                  </Link>
                  <Link
                    className={activePath === "/projets" ? "active" : ""}
                    to="/projets"
                  >
                    Projets
                  </Link>
                  <Link
                    className={activePath === "/articles" ? "active" : ""}
                    to="/articles"
                  >
                    Articles
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="menuLink">
              <SocialIcon
                url="https://github.com/CyrilDesch"
                target={"_blank"}
                bgColor="white"
                style={{ height: "6.5vh", width: "6.5vh" }}
              />
              <SocialIcon
                url="https://www.linkedin.com/in/cyril-deschamps-7377681b7/"
                target={"_blank"}
                bgColor="white"
                style={{ height: "6.5vh", width: "6.5vh" }}
              />
            </div>
            <span className="code">
              <pre className="vert">{`/* Création */`}</pre>
              <pre>
                <span className="bleu">{`const `}</span>
                <span className="yellow">Cyril</span>
                {` = () `}
                <span className="bleu">{"=>"}</span>
                {` {`}
              </pre>
              <pre>
                {`   `}
                <span className="violet">while</span>
                {`(`}
                <span className="yellow">estEnVie</span>
                {`()){`}
              </pre>
              <pre>
                {`      `}
                <span className="yellow">entreprendre</span>
                {`();`}
              </pre>
              <pre>{`   }`}</pre>
              <pre>
                {`   `}
                <span className="yellow">render</span>
                {`(`}
              </pre>
              <pre>
                {"        "}
                <span
                  className="txt-rotate"
                  data-period="2000"
                  data-rotate='["//TODO: Développer votre projet"]'
                ></span>
              </pre>
              <pre>{`   );`}</pre>
              <pre>{`}`}</pre>
            </span>
          </div>
          <div className="right">
            <p className="text">FREELANCE</p>
          </div>
          {scrolled ? (
            <UpArrow
              className="iconUp"
              onClick={() => animateScroll.scrollToTop()}
            />
          ) : null}
        </header>

        <Switch>
          <Route path="/projets">
            <Projets setActivePath={setActivePath} />
          </Route>
          <Route path="/articles">
            <Articles setActivePath={setActivePath} />
          </Route>
          <Route index>
            <Presentation setActivePath={setActivePath} />
          </Route>
        </Switch>

        <footer>
          <div>
            <p>
              <span className="barTitle">EMAIL : </span>
              cyril.deschamps@outlook.fr
            </p>
            <AppIcon
              color="white"
              className="icon"
              onClick={() => animateScroll.scrollToTop()}
            />
            <p>
              <span className="barTitle">TELEPHONE : </span>06 42 90 88 40
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;

var styles = {
  bmBurgerButton: {
    position: "absolute",
    width: "4.5vh",
    height: "4.5vh",
    right: "4vw",
    top: "5vw",
  },
  bmCrossButton: {
    left: "1.5vh",
    top: "1.5vh",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#3e3444",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#e5dde3",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "block",
    paddingBottom: "0.8em",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};
