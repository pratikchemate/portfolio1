import { useState } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import "./fanta.css";

import { useEffect } from "react";

function App() {
  const [color, setColor] = useState("#0084ff");
  const [showColorDiv, setShowColorDiv] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-out-back" });
  }, []);

  const handleColorChange = (e) => {
    setColor(e.target.value);
    document.body.style.background = e.target.value;
  };

  const resetColor = () => {
    setColor("#0084ff");
    document.body.style.background = "#ffffff";
    setShowColorDiv(false);
  };

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
                <td>Javascript</td>
                <td>ReactJS | NodeJS | NextJS | ExpressJS</td>
              </tr>
              <tr>
                <td>Python</td>
                <td>Data analytics | Django</td>
              </tr>
              <tr>
                <td>Web</td>
                <td>TailwindCSS | SQL | PostgreSQL | Firebase | AWS</td>
              </tr>
              {/* <!-- <tr>
              <td></td>
              <td></td>
            </tr> --> */}
            </tbody>
          </table>
        </section>
        <section className="bounce-in" data-aos="fade-down">
          <h2>Projects</h2>
          <div className="cards-grid">
            <div className="project-card">
              <div className="tech-list">
                <div className="card-button-secondary">
                  <p>ChatBot for Career Counselling</p>
                </div>
                <p>
                  Developed an intelligent chatbot for career counselling using
                  Java and SQL, designed to streamline guidance processes and
                  provide personalized career advice.
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
                <a target="_blank" href="/">
                  Live
                </a>
                <a target="_blank" href="/">
                  GitHub
                </a>
              </div>
              <div className="img-div">
                <img src="/fantacss.png" alt="project" />
              </div>
            </div>
            <div className="project-card">
              <div className="tech-list">
                <div className="card-button-secondary">
                  <p>GitHub profile searcher using Git API </p>
                </div>
                <p>
                  Developed a GitHub Profile Searcher using Git API,
                  streamlining the retrieval of user profiles and repositories
                  with a userfriendly interface. Achieved a 40% improvement in
                  data retrieval efficiency, enhancing user experience and
                  showcasing proficiency in API integration and UI/UX design.
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
                <a target="_blank" href="/">
                  Live
                </a>
                <a target="_blank" href="/">
                  GitHub
                </a>
              </div>
              <div className="img-div">
                <img src="/fantacss.png" alt="project" />
              </div>
            </div>
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
