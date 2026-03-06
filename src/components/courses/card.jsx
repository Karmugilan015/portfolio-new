import styles from '../Project/cardFlip.module.css';

function Card({ data }) {
  if (!data) return null;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.flipCard}>
        <div className={styles.flipCardInner}>
          
          {/* Front Side */}
          <div className={styles.flipCardFront}>
            <h2 className={styles.title}>{data.title}</h2>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${data.img})` }}
            />
          </div>

          {/* Back Side */}
          <div className={styles.flipCardBack}>
            <p className={styles.description}>{data.des}</p>

            <div className={styles.buttonContainer}>
              <a
                href={data.link}
                className="btn btn-dark m-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Course Certificate
              </a>

            
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}


export default Card;
