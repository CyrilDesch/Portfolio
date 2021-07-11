import React, { useEffect } from "react";
import '../styles/Projets.css';
import ProjectCard from "../components/ProjectCard";
import { useLocation } from 'react-router-dom';

import tabProject from "../assets/tabProject";

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
              <h1>RÉALISATIONS</h1>
              <div className="projectsContainer">
                {tabProject.map((item) => 
                  <ProjectCard 
                    title={item.title}
                    image={item.image}
                    description={item.description}
                    typeProject={item.typeProject}
                    redirection={item.redirection}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Projets;