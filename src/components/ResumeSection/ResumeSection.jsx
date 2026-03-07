import { useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./ResumeSection.module.css";
import bgVideo from "/public/blueBackground (1).mp4";
import oegVideo from "/public/he.mp4";

function ResumeSection() {

  const videoRef = useRef(null);
  const videoRef2 = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
    if (videoRef2.current) {
      videoRef2.current.playbackRate = 0.6;
    }
  }, []);

  return (
    <>
    
      <h1 className="text-center">OBJECTIVE</h1>

      <Container fluid className={`${styles.resumeSection}`}>
        <Row>
          <Col className={`${styles.videoSection} d-flex justify-content-center align-items-center`}>

            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              className={styles.backgroundVideo}
            >
              <source src={bgVideo} type="video/mp4" />
            </video>

            <div className={`${styles.contentOverlay} text-center`}>

              <h2 className={`${styles.headings} mb-3`}>
                Ready to contribute and grow in a dynamic environment.
              </h2>

              <p className={`${styles.heading} mb-4`}>
                As a Full Stack Developer, I blend creativity and technical
                skills to build seamless user experiences. With a background
                in MERN Stack, I’m passionate about delivering solutions that
                not only work well but make a difference.
              </p>

              <a
                href="https://drive.google.com/uc?export=download&id=1RR_NDxCx2SWRqtmD6N8YR-Ay6DGOTlr_"
                className={`${styles.button}`}
              >
                Download Resume
              </a>

            </div>

          </Col>
        </Row>
      </Container>

      {/* Academic Section */}

      <div className="text-center mt-5">
        <h1 className="dog">ACADEMIC QUALIFICATION</h1>
      </div>

      
        <Row className='dog justify-items-center d-flex'>
          <Col>

            <video
              ref={videoRef2}
              autoPlay
              loop
              muted
      
            >
              <source src={oegVideo} type="video/mp4" />
            </video>

          </Col>
        </Row>
        </>
  );
}

export default ResumeSection;
