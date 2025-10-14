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
        <a>
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
        <section className="bounce-in" data-aos="fade-up">
          <div className="intro-container">
            {/* Left: Intro Text */}
            <div className="intro-text">
              <h1>Pratik Chemate</h1>
              <p>Software Developer</p>
              <div className="intro-description">
                <h5>
                  A computer engineer by qualification, a coder by trade! <br />
                </h5>
                <ul>
                  <li>
                    I’m a passionate and adaptable developer with strong skills
                    in Java, Python, JavaScript, SQL, and modern frameworks like
                    React, Node.js, Express, and Spring Boot.
                  </li>
                  <li>
                    I focus on building secure, scalable, and user-friendly
                    applications, backed by solid knowledge of DSA, OOP, OS, and
                    AI/ML basics.
                  </li>
                  <li>
                    Open to networking, collaboration, and opportunities where
                    technology meets innovation.
                  </li>
                </ul>
                <h5>Based in Pune, INDIA.</h5>
              </div>
              <div className="links-container">
                <i className="fa-solid link-arrow fa-arrow-right"></i>
                <a href="mailto:pratikchemate@gmail.com">Email me</a>
                <a
                  href="https://github.com/pratikchemate"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/pratikchemate/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://drive.google.com/file/d/1qSM9DCxU0-1VwQRa3ptYHtV2ZCBumqYS/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  My-Resume
                </a>
              </div>
            </div>

            {/* Right: Image */}
            <div className="profile-pic">
              <img
                className="imd"
                src="/Pratik_profile_pic1.jpg"
                alt="Pratik Chemate"
              />
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

        <section className="bounce-in" data-aos="fade-right">
          <h2>Skills</h2>
          <table>
            <thead>
              <tr>
                <th>Area</th>
                <th>Technologies</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Javascript</td>
                <td>ReactJS | NodeJS | NextJS | ExpressJS</td>
              </tr>
              <tr>
                <td>Databases & Tools</td>
                <td>MongoDB | MySQL | Git/GitHub | Postman | REST APIs</td>
              </tr>
              <tr>
                <td>Frameworks & Libraries</td>
                <td>
                  Spring Boot | Pandas | NumPy | Seaborn | Matplotlib | Django
                </td>
              </tr>
              <tr>
                <td>Web</td>
                <td>TailwindCSS | SQL | PostgreSQL | Firebase | AWS</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* <Experience /> */}

        <section className="bounce-in" data-aos="fade-down">
          <h2>Projects</h2>
          <div className="cards-grid">
            {/* Project 1 */}
            <div className="project-card">
              <div className="tech-list">
                <div className="card-button-secondary">
                  <p>AI Email Reply Generator</p>
                </div>
                <p>
                  Built a full-stack AI email reply generator using Spring Boot
                  (REST API with WebClient), React (MUI) and integrating Google
                  Gemini (API) for context-aware drafts with selectable tone.
                </p>
              </div>
              <div className="project-links">
                <a
                  target="_blank"
                  href="https://github.com/pratikchemate/AI-Email-replier"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
              <div className="img-div">
                <img src="/AI-email.png" alt="project" />
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <div className="tech-list">
                <div className="card-button-secondary">
                  <p>The Brogram – 30-Day Workout Tracker</p>
                </div>
                <p>
                  Brogram is a simple, interactive 30-day workout tracking web
                  app built with React.js and Vite.
                </p>
              </div>
              <div className="project-links">
                <a
                  target="_blank"
                  href="https://brogram-pratik-chemate.vercel.app"
                  rel="noreferrer"
                >
                  Live
                </a>
                <a
                  target="_blank"
                  href="https://github.com/pratikchemate/Brogram/"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
              <div className="img-div">
                <img src="/brogram.png" alt="project" />
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card">
              <div className="tech-list">
                <div className="card-button-secondary">
                  <p>Paytm Wallet Clone</p>
                </div>
                <p>
                  Designed and implemented a secure authentication system with
                  role-based access control, wallet management, and money
                  transfer functionality.
                </p>
              </div>
              <div className="project-links">
                <a
                  target="_blank"
                  href="https://github.com/pratikchemate/Paytm-Clone"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
              <div className="img-div">
                <img src="/Paytm.png" alt="project" />
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <div className="tech-list">
                <div className="card-button-secondary">
                  <p>GitHub profile searcher using Git API</p>
                </div>
                <p>
                  Developed a GitHub Profile Searcher using Git API,
                  streamlining the retrieval of user profiles and repositories
                  with a userfriendly interface. Achieved a 40% improvement in
                  data retrieval efficiency, enhancing user experience and
                  showcasing proficiency in API integration and UI/UX design.
                </p>
              </div>
              <div className="project-links">
                <a
                  target="_blank"
                  href="https://github.com/pratikchemate/AI-Email-replier"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
              <div className="img-div">
                <img src="/AI-email.png" alt="project" />
              </div>
            </div>
          </div>
        </section>

        {/* Achievements & Certificates */}
        <section className="bounce-in" data-aos="fade-up">
          <h2 className="achievements-heading">Achievements & Certificates</h2>
          <div className="achievements-list">
            <article className="achievement-card">
              <div className="achievement-thumb">
                <img src="/IBM.png" alt="IBM" />
              </div>
              <div className="achievement-body">
                <h4>
                  IBM Full Stack Software Developer Professional Certificate
                </h4>
                <a
                  className="achievement-link"
                  href="https://www.coursera.org/account/accomplishments/specialization/S8BS422X5XWW"
                  target="_blank"
                  rel="noreferrer"
                >
                  Know more
                </a>
              </div>
            </article>

            <article className="achievement-card">
              <div className="achievement-thumb">
                <img src="/IEEE.png" alt="IEEE" />
              </div>
              <div className="achievement-body">
                <h4>
                  IEEE Paper submitted: AI-Powered Resume Parsing using Django
                </h4>
                <a
                  className="achievement-link"
                  href="https://ieeexplore.ieee.org/document/11031656/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Know more
                </a>
              </div>
            </article>

            <article className="achievement-card">
              <div className="achievement-thumb">
                <img src="/PL_SQL.jpg" alt="Oracle" />
              </div>
              <div className="achievement-body">
                <h4>Oracle Certified Database programmer using PL/SQL</h4>
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
