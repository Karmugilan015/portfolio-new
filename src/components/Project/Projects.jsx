import  { useState } from 'react';
import CardFlip from './CardFlip';
import { projects } from '../../data';
import styles from './cardFlip.module.css';
function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const showMoreProjects = () => {
    setVisibleProjects((prev) => prev + 10);
  };

  return (
    <div className="container" style={{textAlign: "center"}}>
      <h1 className={styles.textCentre}>MY PROJECTS</h1>
      <div className="row">
        {projects.slice(0, visibleProjects).map((project) => (
          <div className="col-lg-4 col-md-6" key={project.id}>
            <CardFlip project={project} />
          </div>
        ))}
      </div>
      {visibleProjects < projects.length && (
        <button className="downloadButton" onClick={showMoreProjects}>
          Show More
        </button>
      )}
    </div>
  );
}

export default Projects;
