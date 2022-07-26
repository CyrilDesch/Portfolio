import React, { useEffect } from "react";
import "../assets/styles/Projets.css";
import ProjectCard from "../components/ProjectCard";
import { useLocation } from "react-router-dom";

import tabProject from "../assets/tabProjects";

const Projets = ({ setActivePath }) => {
  const location = useLocation().pathname;
  useEffect(() => {
    setActivePath(location);
  });

  return (
    <>
      <main id="projets">
        <div>
          <div>
            <div className="firstContainer">
              <h1>RÉALISATIONS</h1>
              <div className="projectsContainer">
                {tabProject.map((item) => (
                  <ProjectCard
                    key={item.title}
                    title={item.title}
                    image={item.image}
                    description={item.description}
                    typeProject={item.typeProject}
                    redirection={item.redirection}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Projets;
