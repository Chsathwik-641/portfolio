import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Sathwik1.pdf";
    link.download = "Sathwik_Chepyala_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <a href="#" className="logo">
          <span>Sathwik</span>
        </a>
        <ul className={`links ${isOpen ? "active" : ""}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#project">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </ul>
        <i class="bx bx-menu-alt-right" id="menu" onClick={toggleMenu}></i>
        <a href="#contact" className="btn">
          Contact Me
        </a>
      </nav>
      <section id="home">
        <img src="/website-welcome.gif" alt="My Image" />
        <div className="info-box">
          <h1>
            <span>Hello, I'm </span>
          </h1>
          <h1 class="reveal-text">
            <span>S</span>
            <span>A</span>
            <span>T</span>
            <span>H</span>
            <span>W</span>
            <span>I</span>
            <span>K</span>
          </h1>
          <h3>
            <span>Front-end Enthusiast</span>
          </h3>
          <p>
            I love bringing designs to life and creating seamless experiences
            for users. I am continuously learning and staying up-to-date with
            the latest trends in web development to enhance my skills and
            deliver high-quality projects.
          </p>
        </div>

        <div className="profile">
          <a
            href="https://www.linkedin.com/in/sathwik-ch-79195a1a1"
            target="_blank"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/Chsathwik-641"
            target="_blank"
            title="Chsathwik-641"
          >
            <i class="bx bxl-github"></i>
          </a>
          <a
            href="mailto:ch.sathwik.chepyala@gmail.com"
            target="_blank"
            title="ch.sathwik.chepyala@gmail.com"
          >
            <i class="bx bxl-gmail"></i>
          </a>
        </div>
      </section>

      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`scroll-up-button ${isVisible ? "show" : ""}`}
        >
          <i className="bx bxs-up-arrow"></i>
        </button>
      )}
      <section id="about">
        <div className="about-box">
          <div className="about-info">
            <h1>
              <span>About Me</span>
            </h1>
            <p>
              I am proficient in front-end technologies such as HTML, CSS, and
              JavaScript, with a strong focus on building responsive and
              visually appealing websites. My expertise extends to React for
              building dynamic, single-page applications. Additionally, I am
              skilled in Java, Python, working with APIs, integrating
              third-party services to enhance app functionality, and using MySQL
              for database management. I am always eager to learn new
              technologies and tools to stay at the forefront of web
              development.
            </p>
          </div>
          <h2>
            <span>Skills</span>
          </h2>
          <div className="skills">
            <ul>
              <li>
                <span>
                  {" "}
                  <i class="bx bxs-chevron-right"></i>JAVA
                </span>
              </li>
              <li>
                <span>
                  {" "}
                  <i class="bx bxs-chevron-right"></i>PYTHON
                </span>
              </li>
              <li>
                <span>
                  {" "}
                  <i class="bx bxs-chevron-right"></i>JAVASCRIPT
                </span>
              </li>
              <li>
                <span>
                  {" "}
                  <i class="bx bxs-chevron-right"></i>REACTJS
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <span>
                  {" "}
                  <i class="bx bxs-chevron-right"></i>NODEJS
                </span>
              </li>
              <li>
                <span>
                  {" "}
                  <i class="bx bxs-chevron-right"></i>MySQL
                </span>
              </li>
              <li>
                <span>
                  {" "}
                  <i class="bx bxs-chevron-right"></i>HTML
                </span>
              </li>
              <li>
                <span>
                  {" "}
                  <i class="bx bxs-chevron-right"></i>CSS
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <span>
                  {" "}
                  <i class="bx bxs-chevron-right"></i>DSA
                </span>
              </li>
              <li>
                <span>
                  {" "}
                  <i class="bx bxs-chevron-right"></i>OOPS
                </span>
              </li>
            </ul>
          </div>
        </div>
        <img src="/skills.webp" alt="skills" className=""></img>
      </section>
      <section id="project">
        <h1 className="header">
          <span>Projects</span>
        </h1>
        <div className="projects-container">
          <div className="box">
            <div className="project-header">
              {" "}
              <h1>
                <span>Food Recipe</span>
              </h1>
              <a
                href="https://github.com/Chsathwik-641/Food-App"
                target="_blank"
              >
                <i class="bx bx-link-external"></i>
              </a>
            </div>
            <p>
              The app fetches recipes and nutritional information using the
              Edamam and Nutritionix APIs, allowing users to explore a wide
              variety of meal options and nutritional details.
            </p>
            <img src="/project-2.png" className="Project-img"></img>
            <img src="/project-2.1.png" className="Project-img"></img>
          </div>

          <div className="box">
            <div className="project-header">
              {" "}
              <h1>
                <span>Weather app</span>
              </h1>
              <a
                href="https://github.com/Chsathwik-641/WeatherApp"
                target="_blank"
              >
                <i class="bx bx-link-external"></i>
              </a>
            </div>
            <p>
              The app fetches real-time weather data using the Visual Crossing
              Weather API, providing accurate and up-to-date weather information
              based on the user's location.
            </p>
            <img src="/project-1.png" className="Project-img"></img>
            <img src="/project-1.2.jpg" className="Project-img"></img>
          </div>
          <div className="box">
            <div className="project-header">
              {" "}
              <h1>
                <span>Portfolio</span>
              </h1>
              <a
                href="https://github.com/Chsathwik-641/portfolio"
                target="_blank"
              >
                <i class="bx bx-link-external"></i>
              </a>
            </div>
            <p>
              This portfolio showcases my skills, projects, and expertise in
              front-end development, React, and API integrations.
            </p>
            <img src="/project-3.png" className="Project-img"></img>
            <img src="/project-3.1.png" className="Project-img"></img>
          </div>
        </div>
      </section>
      <div id="resume">
        <h1 className="header">
          <span>Resume</span>
        </h1>
        <div className="resume-container">
          <button onClick={handleDownload} className="btn">
            Download Resume <i class="bx bxs-download"></i>
          </button>
        </div>
      </div>
      <section id="contact">
        <div className="cta-section">
          <h2>Let's Build Something Amazing Together! 🚀</h2>
          <p>
            Whether you have a project in mind, a collaboration opportunity, or
            just want to chat, feel free to reach out!
          </p>
        </div>
        <form>
          <div className="input-box">
            <span>Full Name</span>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="input-box">
            <span>Email</span>
            <input type="text" placeholder="Enter your Email" />
          </div>
          <div className="input-box">
            <span>Message</span>
            <textarea
              id="message"
              name="message"
              rows="5"
              cols="25"
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <div className="btn">Submit</div>
        </form>
      </section>
      <footer className="thanks-section">
        <h2>
          <span>
            Thanks for Visiting! <i class="bx bx-happy-alt"></i>
          </span>
        </h2>
        <p>Have a great day! 🌟</p>
      </footer>
    </div>
  );
}

export default App;
