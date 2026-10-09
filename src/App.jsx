import { useEffect } from "react";
import "./index.css";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Experience from "./Experience.jsx";
import Greeting from "./Greeting";

function App() {
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

    AOS.init({ duration: 600, easing: "ease-out-cubic", once: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header>
        <a className="greeting-badge">
          <Greeting />
        </a>
        <nav>
          <a
            target="_blank"
            href="https://github.com/pratikchemate"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/pratikchemate/"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            target="_blank"
            href="https://leetcode.com/u/b5jvSTNZuz/"
            rel="noreferrer"
            aria-label="LeetCode"
          >
            <i className="fa-solid fa-code"></i>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero-section" data-aos="fade-up">
          <div className="intro-container">
            {/* Left: Intro Text */}
            <div className="intro-text">
              <h1 className="hero-title">
                <span className="title-line">Pratik Chemate</span>
                <span className="title-subtitle">AI Engineer</span>
              </h1>
              <div className="intro-description">
                <h5 className="tagline">
                  Building production multi-agent AI systems on Google
                  Cloud — with a full-stack engineering foundation to match.
                </h5>
                <div className="description-grid">
                  <div className="description-item">
                    <div className="icon-wrapper">
                      <i className="fa-solid fa-robot"></i>
                    </div>
                    <p>
                      I build production multi-agent AI systems with Google
                      ADK, Vertex AI Agent Builder, and the Gemini Enterprise
                      stack for enterprise clients across real estate and
                      FOREX trading.
                    </p>
                  </div>
                  <div className="description-item">
                    <div className="icon-wrapper">
                      <i className="fa-solid fa-cloud"></i>
                    </div>
                    <p>
                      Google Cloud Certified Generative AI Leader — I
                      architected an industry-first, fully Terraform-based
                      Gemini Enterprise provisioning pipeline on GCP.
                    </p>
                  </div>
                  <div className="description-item">
                    <div className="icon-wrapper">
                      <i className="fa-solid fa-code"></i>
                    </div>
                    <p>
                      Backed by a strong full-stack foundation in Python,
                      Java, Spring Boot, and the MERN stack, plus an
                      IEEE-submitted paper on AI-powered resume parsing.
                    </p>
                  </div>
                </div>
                <div className="location-badge">
                  <i className="fa-solid fa-location-dot"></i>
                  <span>Based in Pune, India</span>
                </div>
              </div>
              <div className="links-container">
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
                <img
                  className="imd"
                  src="/Pratik_profile_pic1.jpg"
                  alt="Pratik Chemate"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section" data-aos="fade-up">
          <div className="section-header">
            <p className="section-eyebrow">01 — Skills &amp; Expertise</p>
            <h2>Skills &amp; Expertise</h2>
            <p className="section-subtitle">Technologies I work with</p>
          </div>
          <div className="skills-grid">
            <div className="skill-category">
              <div className="skill-category-header">
                <i className="fa-solid fa-robot"></i>
                <h3>AI &amp; Agents</h3>
              </div>
              <div className="skill-tags">
                <span className="skill-tag">Google ADK</span>
                <span className="skill-tag">Vertex AI Agent Builder</span>
                <span className="skill-tag">Gemini API (Enterprise)</span>
                <span className="skill-tag">Multi-Agent Orchestration</span>
                <span className="skill-tag">RAG</span>
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-category-header">
                <i className="fa-solid fa-code"></i>
                <h3>Languages</h3>
              </div>
              <div className="skill-tags">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">JavaScript / TypeScript</span>
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">PL/SQL</span>
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-category-header">
                <i className="fa-solid fa-layer-group"></i>
                <h3>Frameworks &amp; Libraries</h3>
              </div>
              <div className="skill-tags">
                <span className="skill-tag">Spring Boot</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express</span>
                <span className="skill-tag">FastAPI</span>
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-category-header">
                <i className="fa-solid fa-cloud"></i>
                <h3>Cloud &amp; IaC</h3>
              </div>
              <div className="skill-tags">
                <span className="skill-tag">Google Cloud Platform</span>
                <span className="skill-tag">Terraform</span>
                <span className="skill-tag">BigQuery</span>
                <span className="skill-tag">Vercel</span>
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-category-header">
                <i className="fa-solid fa-database"></i>
                <h3>Databases</h3>
              </div>
              <div className="skill-tags">
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">Oracle Database</span>
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-category-header">
                <i className="fa-solid fa-screwdriver-wrench"></i>
                <h3>Tools</h3>
              </div>
              <div className="skill-tags">
                <span className="skill-tag">Git / GitHub</span>
                <span className="skill-tag">Postman</span>
                <span className="skill-tag">Jupyter Notebook</span>
                <span className="skill-tag">Claude Code</span>
                <span className="skill-tag">Gemini CLI</span>
              </div>
            </div>
          </div>
        </section>

        <Experience />

        <section className="projects-section" data-aos="fade-up">
          <div className="section-header">
            <p className="section-eyebrow">03 — Projects</p>
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
                  Full-stack AI app that generates context-aware email
                  drafts with tone selection via structured prompting.
                  Integrates a REST API (WebClient), JSON parsing,
                  loading/error states, and clipboard copy.
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
                  Interactive 30-day workout tracking web app with progress
                  tracking, workout scheduling, and motivational elements,
                  built with React and Vite and deployed on Vercel.
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
                    <span>MongoDB</span>
                    <span>Express</span>
                    <span>React</span>
                    <span>Node.js</span>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <p>
                  Built using the MERN stack with secure user authentication
                  and wallet/transaction management during the EY-GDS
                  internship — improved API response times by 30%.
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
          </div>
        </section>

        <section className="education-section" data-aos="fade-up">
          <div className="section-header">
            <p className="section-eyebrow">04 — Education</p>
            <h2>Education</h2>
          </div>
          <div className="education-grid">
            <article className="education-card">
              <div className="education-dates">Aug 2023 – Jun 2026</div>
              <div className="education-body">
                <h3>B.Tech, Computer Engineering</h3>
                <p className="education-school">
                  AISSMS Institute of Information Technology, Pune (SPPU) ·
                  GPA 8.45 / 10
                </p>
                <p className="education-coursework">
                  Coursework: AI/ML, Deep Learning, Databases, Data
                  Structures, Operating Systems, Python, Java
                </p>
              </div>
            </article>
            <article className="education-card">
              <div className="education-dates">Aug 2020 – Jun 2023</div>
              <div className="education-body">
                <h3>Diploma, Computer Engineering</h3>
                <p className="education-school">
                  Pimpri Chinchwad Polytechnic, Pune (Maharashtra University)
                  · 91%
                </p>
                <p className="education-coursework">
                  Coursework: Mobile App Development, Java, Python, Data
                  Structures, HTML, CSS, PHP
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Certifications & Publications */}
        <section className="achievements-section" data-aos="fade-up">
          <div className="section-header">
            <p className="section-eyebrow">05 — Certifications</p>
            <h2>Certifications &amp; Publications</h2>
            <p className="section-subtitle">
              Credentials and published research
            </p>
          </div>
          <div className="achievements-grid">
            <article className="achievement-card enhanced">
              <div className="achievement-badge">
                <i className="fa-brands fa-google"></i>
              </div>
              <div className="achievement-content">
                <div className="achievement-body">
                  <h4>Google Cloud Certified Generative AI Leader</h4>
                  <p>
                    Google · Dec 2025 — Expires Dec 2028. Validates expertise
                    in leading generative AI strategy and adoption on Google
                    Cloud.
                  </p>
                </div>
              </div>
            </article>

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
                    Comprehensive certification covering full-stack
                    development with modern technologies and best practices.
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
                    Published research paper on an AI-driven resume parsing
                    system using Django and NLP techniques for automated
                    candidate profile extraction and screening.
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
                    Oracle Academy · Sep 2024. Professional certification
                    demonstrating expertise in Oracle database programming
                    and PL/SQL development.
                  </p>
                </div>
              </div>
            </article>

            <article className="achievement-card enhanced">
              <div className="achievement-badge">
                <i className="fa-solid fa-award"></i>
              </div>
              <div className="achievement-content">
                <div className="achievement-body">
                  <h4>EY-GDS &amp; AICTE Full Stack Web Development</h4>
                  <p>
                    EY / Edunet Foundation · Jan 2025. Awarded on completion
                    of the Full Stack Web Development internship program.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="leadership-section" data-aos="fade-up">
          <div className="section-header">
            <p className="section-eyebrow">06 — Beyond the Code</p>
            <h2>Leadership &amp; Achievements</h2>
          </div>
          <div className="leadership-grid">
            <div className="leadership-item">
              <i className="fa-solid fa-users"></i>
              <p>
                Coding Club Member — organized inter-college coding
                competitions at AISSMS, increasing student participation by
                40%.
              </p>
            </div>
            <div className="leadership-item">
              <i className="fa-solid fa-trophy"></i>
              <p>Pune District Badminton Competition Winner — AY 2022.</p>
            </div>
            <div className="leadership-item">
              <i className="fa-solid fa-handshake"></i>
              <p>
                Internshala Student Partner — represented Internshala at the
                college level.
              </p>
            </div>
            <div className="leadership-item">
              <i className="fa-solid fa-graduation-cap"></i>
              <p>
                Pimpri Chinchwad Municipal Corporation merit scholarship
                recipient for outstanding academic performance (10th grade).
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Pratik Chemate — Built with React &amp; Vite</p>
      </footer>
    </>
  );
}

export default App;
