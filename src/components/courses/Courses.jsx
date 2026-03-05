import { useState } from 'react';
import Card from './card';
import { data } from '../../beta';
import styles from '../Project/cardFlip.module.css';

function Courses() {
  const [visibleCourses, setVisibleCourses] = useState(5);

  const showMoreCourses = () => {
    setVisibleCourses((prev) => prev + 5);
  };

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1 className={styles.textCentre}>MY COURSES AND CERTIFICATION</h1>

      <div className="row">
        {data.slice(0, visibleCourses).map((data) => (
          <div className="col-lg-4 col-md-6" key={data.id}>
            <Card data ={data} />
          </div>
        ))}
      </div>

      {visibleCourses < data.length && (
        <button className="downloadButton" onClick={showMoreCourses}>
          Show More
        </button>
      )}
    </div>
  );
}

export default Courses;