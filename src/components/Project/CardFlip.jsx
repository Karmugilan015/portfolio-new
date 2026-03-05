import styles from './cardFlip.module.css';

function CardFlip({ project }) {
  if (!project) return null;
  return (
    <div className={styles.cardContainer}>
      <div className={styles.flipCard}>
        <div className={styles.flipCardInner}>
          {/* Front Side */}
          <div className={styles.flipCardFront}>
            <h2 className={styles.title}>{project.title}</h2>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${project.img})` }}
            />
          </div>

          {/* Back Side */}
          <div className={styles.flipCardBack}>
          <p className={styles.description}>{project.des}</p>

            {/* <p>{project.detailedDesc}</p> */}
            <div className={styles.buttonContainer}>
              <a href={project.link} className="btn btn-dark m-2" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              {project.liveLink && (
                <a href={project.liveLink} className="btn btn-primary m-2" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardFlip;
