import  { useRef, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import styles from './ResumeSection.module.css';
import bgVideo from '/public/blueBackground (1).mp4'; // Ensure the path is correct
import ogVideo from '/public/he.mp4';

function ResumeSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6; // Slow down video playback
    }
  }, []);

  return (<>
  <h1 className="text-center">OBJECTIVE</h1>
    <Container fluid className={`${styles.resumeSection} d-flex align-items-center h-100`}>
      <div className="row">
        {/* Left Side with Video Background */}
        <div className={`${styles.videoSection} d-flex`}>
          <video ref={videoRef} autoPlay loop muted className={styles.backgroundVideo}>
            <source src={bgVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={`${styles.contentOverlay} text-center`}>
            <h1 className={`${styles.headings} mb-3`}>Ready to contribute and grow in a dynamic environment.</h1>
            <p className={`${styles.heading} mb-4`}>
              As a Full Stack Developer, I blend creativity and technical skills to build seamless user experiences. With a background in MERN Stack, I’m passionate about delivering solutions that not only work well but make a difference.
            </p>
            <a
              href="https://drive.google.com/uc?export=download&id=1RR_NDxCx2SWRqtmD6N8YR-Ay6DGOTlr_" // Path to your resume file in the public folder
              className={`${styles.button} btn btn-primary`} // Use Bootstrap's btn classes for better styling
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </Container>
    <div className='justify-content-center mt-30px text-center '>
        <h1 className='dog'>ACADEMIC QUALIFICATION</h1>
        </div>
          <Container fluid className=' className={`${styles.resumeSection} d-flex align-items-center h-100`}>
<div className='justify-content-center mt-30px text-center '>
<video ref={videoRef} autoPlay loop muted className={styles.backgroundVideo}>
            <source src={ogVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
</div>
  </Container>
   
    </>
  );
}

export default ResumeSection;
