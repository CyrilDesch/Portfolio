import React, { useEffect } from "react";
import '../styles/Articles.css';
import { useLocation } from 'react-router-dom';

const Articles = ({ setActivePath }) => {

  const location = useLocation().pathname;
  useEffect(() => {
    setActivePath(location);
  });

  return(
    <>
      <main id="articles">
        <img className="postItBG" src="./assets/postit.png" alt="Post it BG" />
        <div>
          <div>
            <div className="firstContainer">
              <h1>MES ARTICLES</h1>
              <h2>PUBLIÉS RÉCEMMENT</h2>
              <div className="articlesContainer">
                <p>Pas encore de contenu...</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Articles;