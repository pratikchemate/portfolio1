import { useState } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import "./fanta.css";
import { useEffect } from "react";
import Experience from "./Experience.jsx";

function App() {
  const [color, setColor] = useState("#0084ff");
  const [showColorDiv, setShowColorDiv] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-out-back" });
  }, []);

  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </head>
      <header>
        <a>Pratik Chemate</a>
        <nav>
          <a
            target="_blank"
            href="https://www.instagram.com/pratik.chemate/"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
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
                  Based in Pune, INDIA.
                </h5>
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
                  href="https://drive.google.com/file/d/1b1zHhD5vPE7SQElwjUFqlosJIHBuTZHY/view?usp=sharing"
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
                src="/Pratik_profile_pic.jpg"
                alt="Pratik Chemate"
              />
            </div>
          </div>

          {/* <div id="play-game">
            <button onClick={() => setShowColorDiv(true)}>Play game???</button>
          </div>

          {showColorDiv && (
            <div className="color-div" style={{ display: none }}>
              <h4>Pick a color</h4>
              <input type="color" value={color} onChange={handleColorChange} />
              <p>Great!.... now it's ruined.</p>
              <button onClick={resetColor}>Reset</button>
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
                <td>Languages</td>
                <td>Java | Python | SQL | CPP</td>
              </tr>
              <tr>
                <td>Databases &<br/>Tools</td>
                <td>MongoDB | MySQL | Git/GitHub | Postman | REST APIs</td>
              </tr>

              <tr>
                <td>Frameworks &<br/>Libraries</td>
                <td>
                  Spring Boot | Pandas | NumPy | Seaborn | Matplotlib | Django
                </td>
              </tr>
              <tr>
                <td>Javascript</td>
                <td>ReactJS | NodeJS | NextJS | ExpressJS | TailwindCSS</td>
              </tr>
              {/*               <tr>
                <td>Web</td>
                <td>TailwindCSS | SQL | PostgreSQL | Firebase | AWS</td>
              </tr> */}
            </tbody>
          </table>
        </section>
        <section className="bounce-in" data-aos="fade-up">
          <h2>Experience</h2>
          <table class="experience-table">
            <tbody>
              <tr>
                <td class="exp-details">
                  <i class="company">EY GDS</i> —{" "}
                  <span class="role">Full-Stack Developer Intern</span>
                  <ul>
                    <li>
                      Built a Paytm Wallet Clone using MERN with JWT auth,
                      balance & transaction flows.
                    </li>
                    <li>
                      Improved API response times by ~30% via MongoDB indexing
                      and reduced over-fetching.
                    </li>
                    <li>
                      Presented prototype to industry experts; completed a
                      6‑week program with Edunet Foundation & AICTE.
                    </li>
                  </ul>
                </td>
                <td class="exp-date">Dec 2024 – Jan 2025</td>
              </tr>
              <tr>
                <td class="exp-details">
                  <i class="company">MITU Skillologies</i> —{" "}
                  <span class="role">Data Analytics Intern</span>
                  <ul>
                    <li>
                      Worked on Python programming for Data Science & Analytics
                      using NumPy, Pandas, Seaborn, Matplotlib.
                    </li>
                    <li>
                      Completed 3 projects focused on analytics and contributed
                      to innovative solutions.
                    </li>
                  </ul>
                </td>
                <td class="exp-date">Jul 2022 – Aug 2022</td>
              </tr>
            </tbody>
          </table>
        </section>
        {/* <Experience /> */}
        <section className="bounce-in" data-aos="fade-down">
          <h2>Projects</h2>
          <div className="cards-grid">
            <div className="project-card">
              <div className="tech-list">
                <div className="card-button-secondary">
                  <p>AI Email Reply Generator</p>
                </div>
                <p>
                  Built a full-stack AI email reply generator using Spring Boot
                  (REST API with WebClient), React (MUI) and integrating Google
                  Gemini (API) for context-aware drafts with selectable tone.
                  Implemented structured prompt construction, JSON parsing of
                  model responses, loading/error states, and clipboard copy in
                  UI.
                </p>
              </div>
              <div
                className="project-links"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                {/* <a target="_blank" href="/">
                  Live
                </a> */}
                <a
                  target="_blank"
                  href="https://github.com/pratikchemate/AI-Email-replier"
                >
                  GitHub
                </a>
              </div>
              <div className="img-div">
                <img src="/AI-email.png" alt="project" />
              </div>
            </div>
            <div className="project-card">
              <div className="tech-list">
                <div className="card-button-secondary">
                  <p>The Brogram – 30-Day Workout Tracker</p>
                </div>
                <p>
                  Brogram is a simple, interactive 30-day workout tracking web
                  app that helps users stay consistent with their fitness goals.
                  Built with React.js and Vite, it features a clear
                  Push-Pull-Legs split, intuitive visual progress tracking, and
                  motivational rules for healthy habits. Users can view, select,
                  and mark their daily workouts, making it easy to follow a
                  structured routine and track achievements throughout the
                  month.
                </p>
              </div>
              <div
                className="project-links"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <a
                  target="_blank"
                  href="https://brogram-pratik-chemate.vercel.app"
                >
                  Live
                </a>
                <a
                  target="_blank"
                  href="https://github.com/pratikchemate/Brogram/"
                >
                  GitHub
                </a>
              </div>
              <div className="img-div">
                <img src="/brogram.png" alt="project" />
              </div>
            </div>
            <div className="project-card">
              <div className="tech-list">
                <div className="card-button-secondary">
                  <p>Paytm Wallet Clone</p>
                </div>
                <p>
                  Designed and implemented a secure authentication system with
                  role-based access control, full wallet management (create,
                  read, update, delete), and money transfer functionality, along
                  with protected API routes and detailed transaction history
                  tracking. Optimized database queries and API performance —
                  leveraging targeted indexing, reduced/lean payload structures,
                  and aggregation pipelines — resulting in approximately 30%
                  faster average response times.
                </p>
              </div>
              <div
                className="project-links"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                {/* <a target="_blank" href="/">
                  Live
                </a> */}
                <a
                  target="_blank"
                  href="https://github.com/pratikchemate/Paytm-Clone"
                >
                  GitHub
                </a>
              </div>
              <div className="img-div">
                <img src="/Paytm.png" alt="project" />
              </div>
            </div>
          </div>
        </section>
        {/* Achievements & Certificates */}
        <section className="bounce-in" data-aos="fade-up">
          <h2 className="achievements-heading">Achievements & Certificates</h2>

          <div className="achievements-list">
            {/* Item 1 */}
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

            {/* Item 2 */}
            <article className="achievement-card">
              <div className="achievement-thumb">
                <img src="/IEEE.png" alt="IEEE" />
              </div>
              <div className="achievement-body">
                <h4>
                  IEEE Paper submitted: AI-Powered Resume Parsing
                  using Django
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
                <h4>
                  Oracle Certified Database programmer using PL/SQL
                </h4>
{/*                 <a
                  className="achievement-link"
                  href="https://ieeexplore.ieee.org/document/11031656/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Know more →
                </a> */}
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
