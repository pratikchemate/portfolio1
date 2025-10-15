import { useState, useEffect } from "react";
import "./fanta.css";
import "./index.css";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Experience from "./Experience.jsx";
import Greeting from "./Greeting";

function App() {
  const [color, setColor] = useState("#0084ff");
  const [showColorDiv, setShowColorDiv] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // ✅ Initialize AOS correctly
    AOS.init({ duration: 1000, easing: "ease-out-back" });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header>
        {/* <a href="/">Pratik Chemate</a> */}
        <a className="greeting-badge">
          <Greeting />
        </a>
        <nav>
          <a
            target="_blank"
            href="https://github.com/pratikchemate"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/pratikchemate/"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            target="_blank"
            href="https://leetcode.com/u/b5jvSTNZuz/"
            rel="noreferrer"
            alt="LeetCode"
          >
            <i className="fa-solid fa-code"></i>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero-section bounce-in" data-aos="fade-up">
          <div className="floating-particles">
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
          </div>
          <div className="intro-container">
            {/* Left: Intro Text */}
            <div className="intro-text">
              <h1 className="hero-title">
                <span className="title-line">Pratik Chemate</span>
                <span className="title-subtitle">Software Developer</span>
              </h1>
              <div className="intro-description">
                <h5 className="tagline">
                  A computer engineer by qualification, a coder by trade!
                </h5>
                <div className="description-grid">
                  <div className="description-item">
                    <div className="icon-wrapper">
                      <i className="fa-solid fa-code"></i>
                    </div>
                    <p>
                      I'm a passionate and adaptable developer with strong
                      skills in Java, Python, JavaScript, SQL, and modern
                      frameworks like React, Node.js, Express, and Spring Boot.
                    </p>
                  </div>
                  <div className="description-item">
                    <div className="icon-wrapper">
                      <i className="fa-solid fa-shield-halved"></i>
                    </div>
                    <p>
                      I focus on building secure, scalable, and user-friendly
                      applications, backed by solid knowledge of DSA, OOP, OS,
                      and AI/ML basics.
                    </p>
                  </div>
                  <div className="description-item">
                    <div className="icon-wrapper">
                      <i className="fa-solid fa-handshake"></i>
                    </div>
                    <p>
                      Open to networking, collaboration, and opportunities where
                      technology meets innovation.
                    </p>
                  </div>
                </div>
                <div className="location-badge">
                  <i className="fa-solid fa-location-dot"></i>
                  <span>Based in Pune, INDIA</span>
                </div>
              </div>
              <div className="links-container">
                <div className="link-arrow-wrapper">
                  <i className="fa-solid link-arrow fa-arrow-right"></i>
                </div>
                <a
                  href="mailto:pratikchemate@gmail.com"
                  className="cta-button primary"
                >
                  <i className="fa-solid fa-envelope"></i>
                  Email me
                </a>
                <a
                  href="https://github.com/pratikchemate"
                  target="_blank"
                  rel="noreferrer"
                  className="cta-button secondary"
                >
                  <i className="fa-brands fa-github"></i>
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/pratikchemate/"
                  target="_blank"
                  rel="noreferrer"
                  className="cta-button secondary"
                >
                  <i className="fa-brands fa-linkedin"></i>
                  LinkedIn
                </a>
                <a
                  href="https://drive.google.com/file/d/1qSM9DCxU0-1VwQRa3ptYHtV2ZCBumqYS/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="cta-button secondary"
                >
                  <i className="fa-solid fa-file-pdf"></i>
                  My Resume
                </a>
              </div>
            </div>

            {/* Right: Image */}
            <div className="profile-pic">
              <div className="image-container">
                <div className="image-glow"></div>
                <img
                  className="imd"
                  src="/Pratik_profile_pic1.jpg"
                  alt="Pratik Chemate"
                />
                <div className="image-decoration"></div>
              </div>
            </div>
          </div>

          {/* Play Game Feature (commented out for now to avoid errors)
          <div id="play-game">
            <button onClick={() => setShowColorDiv(true)}>Play game???</button>
          </div>
          {showColorDiv && (
            <div className="color-div">
              <h4>Pick a color</h4>
              <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
              <p>Great!.... now it's ruined.</p>
              <button onClick={() => setShowColorDiv(false)}>Reset</button>
            </div>
          )} */}
        </section>

        <section className="skills-section bounce-in" data-aos="fade-right">
          <div className="section-header">
            <h2>Skills & Expertise</h2>
            <p className="section-subtitle">Technologies I work with</p>
          </div>
          <div className="skills-grid">
            <div className="skill-category">
              <div className="skill-category-header">
                <i className="fa-brands fa-js-square"></i>
                <h3>JavaScript</h3>
              </div>
              <div className="skill-tags">
                <span className="skill-tag">ReactJS</span>
                <span className="skill-tag">NodeJS</span>
                <span className="skill-tag">NextJS</span>
                <span className="skill-tag">ExpressJS</span>
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-category-header">
                <i className="fa-solid fa-database"></i>
                <h3>Databases & Tools</h3>
              </div>
              <div className="skill-tags">
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">Git/GitHub</span>
                <span className="skill-tag">Postman</span>
                <span className="skill-tag">REST APIs</span>
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-category-header">
                <i className="fa-solid fa-layer-group"></i>
                <h3>Frameworks & Libraries</h3>
              </div>
              <div className="skill-tags">
                <span className="skill-tag">Spring Boot</span>
                <span className="skill-tag">Pandas</span>
                <span className="skill-tag">NumPy</span>
                <span className="skill-tag">Seaborn</span>
                <span className="skill-tag">Matplotlib</span>
                <span className="skill-tag">Django</span>
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-category-header">
                <i className="fa-solid fa-globe"></i>
                <h3>Web Technologies</h3>
              </div>
              <div className="skill-tags">
                <span className="skill-tag">TailwindCSS</span>
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">Firebase</span>
                <span className="skill-tag">AWS</span>
              </div>
            </div>
          </div>
        </section>

        {/* <Experience /> */}

        <section className="projects-section bounce-in" data-aos="fade-down">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <p className="section-subtitle">Some of my recent work</p>
          </div>
          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card enhanced">
              <div className="project-header">
                <div className="project-icon">
                  <i className="fa-solid fa-robot"></i>
                </div>
                <div className="project-title">
                  <h3>AI Email Reply Generator</h3>
                  <div className="project-tech">
                    <span>Spring Boot</span>
                    <span>React</span>
                    <span>Google Gemini</span>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <p>
                  Built a full-stack AI email reply generator using Spring Boot
                  (REST API with WebClient), React (MUI) and integrating Google
                  Gemini (API) for context-aware drafts with selectable tone.
                </p>
              </div>
              <div className="project-footer">
                <div className="project-links">
                  <a
                    target="_blank"
                    href="https://github.com/pratikchemate/AI-Email-replier"
                    rel="noreferrer"
                    className="project-link"
                  >
                    <i className="fa-brands fa-github"></i>
                    View Code
                  </a>
                </div>
                <div className="project-image">
                  <img src="/AI-email.png" alt="AI Email Reply Generator" />
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card enhanced">
              <div className="project-header">
                <div className="project-icon">
                  <i className="fa-solid fa-dumbbell"></i>
                </div>
                <div className="project-title">
                  <h3>The Brogram – 30-Day Workout Tracker</h3>
                  <div className="project-tech">
                    <span>React</span>
                    <span>Vite</span>
                    <span>CSS3</span>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <p>
                  Brogram is a simple, interactive 30-day workout tracking web
                  app built with React.js and Vite. Features progress tracking,
                  workout scheduling, and motivational elements.
                </p>
              </div>
              <div className="project-footer">
                <div className="project-links">
                  <a
                    target="_blank"
                    href="https://brogram-pratik-chemate.vercel.app"
                    rel="noreferrer"
                    className="project-link live"
                  >
                    <i className="fa-solid fa-external-link-alt"></i>
                    Live Demo
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/pratikchemate/Brogram/"
                    rel="noreferrer"
                    className="project-link"
                  >
                    <i className="fa-brands fa-github"></i>
                    View Code
                  </a>
                </div>
                <div className="project-image">
                  <img src="/brogram.png" alt="The Brogram Workout Tracker" />
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card enhanced">
              <div className="project-header">
                <div className="project-icon">
                  <i className="fa-solid fa-wallet"></i>
                </div>
                <div className="project-title">
                  <h3>Paytm Wallet Clone</h3>
                  <div className="project-tech">
                    <span>Java</span>
                    <span>Spring Boot</span>
                    <span>MySQL</span>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <p>
                  Designed and implemented a secure authentication system with
                  role-based access control, wallet management, and money
                  transfer functionality. Includes transaction history and
                  security features.
                </p>
              </div>
              <div className="project-footer">
                <div className="project-links">
                  <a
                    target="_blank"
                    href="https://github.com/pratikchemate/Paytm-Clone"
                    rel="noreferrer"
                    className="project-link"
                  >
                    <i className="fa-brands fa-github"></i>
                    View Code
                  </a>
                </div>
                <div className="project-image">
                  <img src="/Paytm.png" alt="Paytm Wallet Clone" />
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="project-card enhanced">
              <div className="project-header">
                <div className="project-icon">
                  <i className="fa-brands fa-github"></i>
                </div>
                <div className="project-title">
                  <h3>GitHub Profile Searcher</h3>
                  <div className="project-tech">
                    <span>JavaScript</span>
                    <span>GitHub API</span>
                    <span>CSS3</span>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <p>
                  Developed a GitHub Profile Searcher using Git API,
                  streamlining the retrieval of user profiles and repositories
                  with a user-friendly interface. Achieved a 40% improvement in
                  data retrieval efficiency.
                </p>
              </div>
              <div className="project-footer">
                <div className="project-links">
                  <a
                    target="_blank"
                    href="https://github.com/pratikchemate/AI-Email-replier"
                    rel="noreferrer"
                    className="project-link"
                  >
                    <i className="fa-brands fa-github"></i>
                    View Code
                  </a>
                </div>
                <div className="project-image">
                  <img src="/AI-email.png" alt="GitHub Profile Searcher" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements & Certificates */}
        <section className="achievements-section bounce-in" data-aos="fade-up">
          <div className="section-header">
            <h2>Achievements & Certificates</h2>
            <p className="section-subtitle">
              Professional accomplishments and certifications
            </p>
          </div>
          <div className="achievements-grid">
            <article className="achievement-card enhanced">
              <div className="achievement-badge">
                <i className="fa-solid fa-certificate"></i>
              </div>
              <div className="achievement-content">
                <div className="achievement-thumb">
                  <img src="/IBM.png" alt="IBM" />
                </div>
                <div className="achievement-body">
                  <h4>
                    IBM Full Stack Software Developer Professional Certificate
                  </h4>
                  <p>
                    Comprehensive certification covering full-stack development
                    with modern technologies and best practices.
                  </p>
                  <a
                    className="achievement-link"
                    href="https://www.coursera.org/account/accomplishments/specialization/S8BS422X5XWW"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-external-link-alt"></i>
                    View Certificate
                  </a>
                </div>
              </div>
            </article>

            <article className="achievement-card enhanced">
              <div className="achievement-badge">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <div className="achievement-content">
                <div className="achievement-thumb">
                  <img src="/IEEE.png" alt="IEEE" />
                </div>
                <div className="achievement-body">
                  <h4>IEEE Paper: AI-Powered Resume Parsing using Django</h4>
                  <p>
                    Published research paper on AI-driven resume parsing system
                    using Django framework and machine learning.
                  </p>
                  <a
                    className="achievement-link"
                    href="https://ieeexplore.ieee.org/document/11031656/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-external-link-alt"></i>
                    Read Paper
                  </a>
                </div>
              </div>
            </article>

            <article className="achievement-card enhanced">
              <div className="achievement-badge">
                <i className="fa-solid fa-database"></i>
              </div>
              <div className="achievement-content">
                <div className="achievement-thumb">
                  <img src="/PL_SQL.jpg" alt="Oracle" />
                </div>
                <div className="achievement-body">
                  <h4>Oracle Certified Database Programmer using PL/SQL</h4>
                  <p>
                    Professional certification demonstrating expertise in Oracle
                    database programming and PL/SQL development.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <p>By Pratik Chemate</p>
      </footer>
    </>
  );
}

export default App;
