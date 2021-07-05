import React, { useEffect } from "react";
import '../styles/Projets.css';
import Competence from "../components/Competence";
import { useLocation } from 'react-router-dom';

//IMPORT ICON
import AndroidIcon from '../assets/iconExt/android.svg';
import CssHtmlIcon from '../assets/iconExt/css_html.svg';
import FirebaseIcon from '../assets/iconExt/firebase.svg';
import GitHubIcon from '../assets/iconExt/github.svg';
import JavascriptIcon from '../assets/iconExt/javascript.svg';
import NodeJSIcon from '../assets/iconExt/nodeJS.svg';
import ReactIcon from '../assets/iconExt/react.svg';
import TrelloIcon from '../assets/iconExt/trello.svg'

const Projets = ({ setActivePath }) => {

  const location = useLocation().pathname;
  useEffect(() => {
    setActivePath(location);
  });

  return(
    <>
      <main id="projets">
        <img className="postItBG" src="./assets/postit.png" alt="Post it BG" />
        <div>
          <div>
            <div className="firstContainer">
              <h1>LES PROJETS</h1>
              <h2>SUR LESQUELS J'AI TRAVAILLÉ</h2>
              <div className="competencesContainer">
                <Competence icon={ReactIcon} title="React Native" desc={["○ Maitrise complète", "○ Tout type de projet"]} />
                <Competence icon={JavascriptIcon} title="Javascript" desc={["○ Maitrise complète pour React Native"]} />
                <Competence icon={AndroidIcon} title="Android/Java" desc={["○ Niveau intermédiaire"]} />
                <Competence icon={CssHtmlIcon} title="HTML/CSS" desc={["○ Maitrise complète"]} />
                <Competence icon={FirebaseIcon} title="Firebase" desc={["○ Bonne connaissance des outils", "○ Utilisation de Firestore"]} />
                <Competence icon={NodeJSIcon} title="NodeJS" desc={["○ Niveau intermédiaire", "○ Capable de créer un back-end"]} />
                <Competence icon={GitHubIcon} title="GitHub (versioning)" desc={["○ Maitrise complète", "○ Indispensable"]} />
                <Competence icon={TrelloIcon} title="Trello (planification)" desc={["○ Maitrise complète", "○ Utilisation quotidienne"]} />
              </div>
            </div>
          </div>
          
          <div />
        </div>
      </main>
    </>
  );
}

export default Projets;