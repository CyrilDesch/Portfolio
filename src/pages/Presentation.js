import React, { useEffect } from "react";
import "../styles/Presentation.css";
import PlayButton from "../assets/PlayButton";
import Competence from "../components/Competence";
import ValeurCard from "../components/ValeurCard";
import { useLocation, Link } from "react-router-dom";

//IMPORT ICON
import AndroidIcon from "../assets/iconExt/android.svg";
import CssHtmlIcon from "../assets/iconExt/css_html.svg";
import FirebaseIcon from "../assets/iconExt/firebase.svg";
import GitHubIcon from "../assets/iconExt/github.svg";
import JavascriptIcon from "../assets/iconExt/javascript.svg";
import NodeJSIcon from "../assets/iconExt/nodeJS.svg";
import ReactIcon from "../assets/iconExt/react.svg";
import FlutterIcon from "../assets/iconExt/flutter.svg";

const Presentation = ({ setActivePath }) => {
  const location = useLocation().pathname;
  useEffect(() => {
    setActivePath(location);
  });

  return (
    <>
      <main id="presentation">
        <div>
          <div>
            <div className="firstContainer">
              <div className="left">
                <div>
                  <h1>
                    En quoi je
                    <br />
                    peux être
                    <br />
                    utile ?
                  </h1>
                  <Link className="clickable" to="/projets">
                    Mes projets &#10132;
                  </Link>
                </div>
              </div>
              <div className="middle">
                <h1>
                  Mon dernier
                  <br />
                  projet
                </h1>
                <a
                  className="buttonPlay clickable"
                  href="https://www.youtube.com/watch?v=_2ZOnqaXYk4"
                  target="_blank"
                  rel="noreferrer"
                >
                  <PlayButton />
                </a>
                <p>Healven</p>
              </div>
              <div className="right">
                <div>
                  <h1>Développer</h1>
                  <p>
                    {" "}
                    Je suis développeur mobile spécialisé en React Native et
                    Flutter pour créer des applications Android et iOS.
                  </p>
                </div>
                <div>
                  <h1>Conseiller</h1>
                  <p>
                    J'accompagne les entreprises dans la réalisation et la
                    maintenance de leur application mobile sur tout type de
                    projets et à n'importe quel stade d'avancement.
                  </p>
                </div>
                <div>
                  <h1>Organiser</h1>
                  <p>
                    J’ai une aspiration certaine pour les méthodes agiles et la
                    communication au sein d'un projet.
                  </p>
                </div>
              </div>
            </div>
            <div className="secondContainer">
              <h1>PRÉSENTATION</h1>
              <h2>Qui suis-je ?</h2>
              <div>
                <h1>Passionné par l'apprentissage et par la création</h1>
                <p>
                  Je m'appelle Cyril Deschamps. Ayant toujours été autodidacte,
                  très débrouillard et d’une grande ouverture d’esprit, j’ai
                  acquis de nombreuses connaissances dans divers domaines et
                  notamment dans le développement informatique et la création de
                  projet. Par cet apprentissage, la programmation et
                  l'entrepreneuriat sont devenues mes principales passions. De
                  plus, mes études d’informatiques m’ont beaucoup apporté dans
                  ces deux passions.{" "}
                  <strong>
                    Aujourd’hui, mon rôle est d’accompagner les entreprises dans
                    la réalisation et la maintenance de leur application mobile
                    pour mener à bien leurs projets.
                  </strong>
                </p>
              </div>
            </div>
            <div className="thirdContainer">
              <h1>COMPÉTENCES</h1>
              <h2>TECHNIQUES</h2>
              <div className="competencesContainer">
                <Competence
                  icon={ReactIcon}
                  title="React Native"
                  desc={["○ Maitrise complète", "○ Tout type de projet"]}
                />
                <Competence
                  icon={FlutterIcon}
                  title="Flutter"
                  desc={["○ Maitrise complète", "○ Tout type de projet"]}
                />
                <Competence
                  icon={JavascriptIcon}
                  title="Javascript"
                  desc={["○ Maitrise complète pour React Native"]}
                />
                <Competence
                  icon={AndroidIcon}
                  title="Android/Java"
                  desc={["○ Niveau intermédiaire"]}
                />
                <Competence
                  icon={CssHtmlIcon}
                  title="HTML/CSS"
                  desc={["○ Maitrise complète"]}
                />
                <Competence
                  icon={FirebaseIcon}
                  title="Firebase"
                  desc={[
                    "○ Bonne connaissance des outils",
                    "○ Utilisation de Firestore",
                  ]}
                />
                <Competence
                  icon={NodeJSIcon}
                  title="NodeJS"
                  desc={[
                    "○ Niveau intermédiaire",
                    "○ Capable de créer un back-end",
                  ]}
                />
                <Competence
                  icon={GitHubIcon}
                  title="GitHub (versioning)"
                  desc={["○ Maitrise complète", "○ Indispensable"]}
                />
              </div>
            </div>
            <div className="fourthContainer">
              <h1>MES VALEURS</h1>
              <div className="valeursContainer">
                <ValeurCard
                  presetIcon="succes"
                  title="Mon optimisme, mon ambition et mon goût de la réussite"
                  paragraphe="Peu importe votre idée et la quantité de travail demandée, c’est avec toute ma bonne volonté que je vous aiderai et vous conseillerai pour mener à bien vos projets."
                />
                <ValeurCard
                  title="Je suis passionné"
                  paragraphe="La création informatique est ma passion. Le fait de pouvoir créer n'importe quel projet, seul ou à plusieurs, m’a permis de m’épanouir."
                  presetIcon="passion"
                />
                <ValeurCard
                  presetIcon="decouverte"
                  title="L'amour de la découverte"
                  paragraphe="Ayant toujours été très débrouillard, j’ai appris de nombreuses choses seul et je suis finalement autodidacte. Je ressens le besoin de comprendre tout ce qui m’entoure pour évoluer."
                />
                <ValeurCard
                  presetIcon="communication"
                  title="Ne pas se précipiter !"
                  paragraphe="Je donne beaucoup d'importance à la communication dans un projet, surtout entre les différentes branches de métiers. Je ferai mon maximum pour cerner totalement le besoin de votre application et répondre à vos demandes."
                />
              </div>
            </div>
          </div>
          <div />
        </div>
      </main>
    </>
  );
};

export default Presentation;
