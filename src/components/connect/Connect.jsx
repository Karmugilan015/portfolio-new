import styles from './connect.module.css';

const ConnectComponent = () => {
  const handleConnectClick = () => {
    window.location.href = 'mailto:k.karmugilan750@gmail.com';
  };

  
    return (<>
        <div className={styles.MainBox}>
          <div className={styles.connectBox}>
            <h1 className={styles.heading}>
              How about we start something awesome together?
            </h1>
            <h6>Your input is invaluable, and I'm eager to collaborate!
                <p> Hit the button below to reach out, and let’s explore the possibilities together.</p></h6>
            <button className={styles.downloadButton} onClick={handleConnectClick}>
              Let's Connect
            </button>
          </div>
          </div>
<section className='contact-section'>
  <div className='col-lg-6 col-md-6 col-12'>
        <div class="hire-form mx-auto text-center ">
  <h2>contact me</h2>
  <div action="https://formsubmit.co/k.karmugilan750@gmail.com" method="POST" className='absolute'>

  <input type="hidden" name="_captcha" value="false"></input>
  <input type="hidden" name="_subject" value="New Message from Portfolio"></input>
  <input type="hidden" name="_template" value="table"></input>
  <input type="hidden" name="_next" value="#about"></input>

  <input type="text"
         name="name"
         class="form-control mb-2"
         placeholder="Your Name"
         required></input>

  <input type="email"
         name="email"
         class="form-control mb-2"
         placeholder="Your Email"
         required></input>

  <textarea name="message"
            class="form-control mb-3"
            placeholder="Your Message"
            required></textarea>
            <select name="role" class="form-control mb-3">
                <option>select</option>
                <option>Front-end developer</option>
                <option>Back-end developer</option>
                <option>Full-stack developer</option>
            </select>

  <button type="submit" class="btn btn-success mb-3">
    Send Message
  </button><br />
  <a href="tel:+919092802116" className="call mx-auto"><i class="fa-solid fa-phone"></i></a>
  <a href="https://wa.me/919092802116" target="_blank" className="whatsapp ms-5 "><i class="fa-brands fa-whatsapp"></i></a>
  </div>
  </div></div>
  <div className='col-lg-6 col-md-6 col-12'>
  <div class="open-to-work-card mx-auto text-center">
  <div class="status-badge">🟢 Open to Work
  </div>

  <h1>Full Stack Developer</h1>

  <p>
    Passionate Full Stack Developer specializing in building scalable web
    applications using modern technologies. Currently open to internships,
    full-time roles, and freelance opportunities.
  </p>

  <div class="skills">
    <span><i className="devicon-react-original colored"></i>React</span><br />
    <span><i className="devicon-nodejs-plain colored"></i>Node.js</span><br />
    <span><i className="devicon-express-original colored"></i>Express</span><br />
    <span><i className="devicon-mongodb-plain colored"></i>MongoDB</span>
  </div>

  <button className={styles.downloadButton} onClick={handleConnectClick}>
              Let's Connect
            </button>
</div>
</div>
  </section>
        </>
      );
};

export default ConnectComponent;
