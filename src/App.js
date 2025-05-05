import "./App.css";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setIsVisible(window.scrollY > 300);
    };

    handleResize();
    handleScroll();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const projects = [
    {
      id: 1,
      heading: "Food App",
      link: "https://github.com/Chsathwik-641/Food-App",
      para: `The app fetches recipes and nutritional information using the
  Edamam and Nutritionix APIs, allowing users to explore a wide
  variety of meal options and nutritional details.`,
      image: ["/project-2.png", "/project-2.1.png"],
    },
    {
      id: 2,
      heading: "Weather App",
      link: "https://github.com/Chsathwik-641/WeatherApp",
      para: `The app fetches real-time weather data using the Visual Crossing
              Weather API, providing accurate and up-to-date weather information
              based on the user's location.`,
      image: ["/project-1.png", "/project-1.2.jpg"],
    },
    {
      id: 3,
      heading: "Portfolio",
      link: "https://github.com/Chsathwik-641/portfolio",
      para: ` This portfolio showcases my skills, projects, and expertise in
              front-end development, React, and API integrations.`,
      image: ["/project-3.png", "/project-3.1.png"],
    },
    {
      id: 4,
      heading: "Hospital Website",
      link: "https://github.com/Chsathwik-641/Hosipital-website",
      para: `Developed a hospital website using React, Express.js, and MySQL, allowing patients to book appointments and doctors to manage schedules efficiently.`,
      image: ["/project-4.1.png", "/project-4.2.png"],
    },
  ];
  const skills = [
    { id: 1, image: "/logo512.png", name: "React" },
    { id: 2, image: "/java script.png", name: "JavaScript" },
    { id: 3, image: "/html-5.png", name: "HTML" },
    { id: 4, image: "/css-3.png", name: "CSS" },
    { id: 5, image: "/java.png", name: "Java" },
    { id: 6, image: "/python.png", name: "Python" },
    { id: 7, image: "/nodejs.png", name: "Node.js" },
    { id: 8, image: "/mysql.png", name: "MySQL" },
    { id: 9, image: "/data.png", name: "Data Structures" },
    { id: 10, image: "/bootstrap.png", name: "Bootstrap" },
    { id: 11, image: "/programming.png", name: "OOPS" },
  ];
  const handleLinkClick = () => {
    toggleMenu();
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <i
        className="bx bx-chevron-right custom-arrow next"
        onClick={onClick}
      ></i>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <i className="bx bx-chevron-left custom-arrow prev" onClick={onClick}></i>
    );
  };
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: !isMobile,
    swipe: isMobile,
    autoplay: false,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
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
    link.href = "/SathwikCh.pdf";
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
          <a href="#home" onClick={handleLinkClick}>
            Home
          </a>
          <a href="#about" onClick={handleLinkClick}>
            About
          </a>
          <a href="#project" onClick={handleLinkClick}>
            Projects
          </a>
          <a href="#resume" onClick={handleLinkClick}>
            Resume
          </a>
          <a href="#contact" onClick={handleLinkClick}>
            Contact
          </a>
        </ul>
        <div className="nav-profile">
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
        <i class="bx bx-menu-alt-right" id="menu" onClick={toggleMenu}></i>
      </nav>
      <section id="home">
        <img src="/website-welcome.gif" alt="My Image" />
        <div className="info-box">
          <h3>
            <span>Hello, I'm </span>
          </h3>
          <h1 class="reveal-text">
            <span>S</span>
            <span>a</span>
            <span>t</span>
            <span>h</span>
            <span>w</span>
            <span>i</span>
            <span>k</span>
          </h1>
          <h3>
            <span>Full-Stack Web Devlopment Enthusiast</span>
          </h3>
          <p>
            I love bringing designs to life and creating seamless experiences
            for users. I am continuously learning and staying up-to-date with
            the latest trends in web development to enhance my skills and
            deliver high-quality projects.
          </p>
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
            <h1 className="header">
              <span>About Me</span>
            </h1>
            <p>
              I am proficient in front-end technologies such as HTML, CSS, and
              JavaScript, with a strong focus on building responsive and
              visually appealing websites. My expertise extends to React for
              building dynamic, single-page applications. Additionally, I am
              skilled in Java, Python, working with APIs, integrating
              third-party services to enhance app functionality, and using MySQL
              for database management. I am currently expanding my skill set by
              learning back-end development as well, specifically focusing on
              Node.js and Express.js. I am always eager to learn new
              technologies and tools to stay at the forefront of web
              development.
            </p>
          </div>
          <h2>
            <span>Skills</span>
          </h2>
          <div className="skills">
            {skills.map((skill, index) => (
              <div
                className="skill-card"
                key={skill.id}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {skill.image && <img src={skill.image} alt={skill.name} />}
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="project">
        <div className="project-box">
          <h1 className="header">
            <span>Projects</span>
          </h1>

          <div className="projects-container">
            <Slider {...sliderSettings}>
              {projects.map((project) => (
                <div key={project.id} className="project-card">
                  <div className="project-headers">
                    <span>
                      <h2 className="project-heading">{project.heading}</h2>
                    </span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <i className="bx bx-link-external"></i>
                    </a>
                  </div>
                  <p className="project-para">{project.para}</p>

                  <div className="project-images">
                    <img
                      src={project.image[0]}
                      alt={`${project.heading} screenshot 1`}
                      className="project-image"
                    />
                    <img
                      src={project.image[1]}
                      alt={`${project.heading} screenshot 2`}
                      className="project-image"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <div id="resume">
        <h1 className="header">
          <span>Resume</span>
        </h1>
        <div className="resume-container">
          <button onClick={handleDownload} className="btn">
            Download<i class="bx bxs-download"></i>
          </button>
        </div>
      </div>
      <div id="contact">
        <h2 className="header">
          <span>Get in touch</span>
        </h2>
        <div className="linkss">
          <a href="https://www.instagram.com/sathwik__ch/" target="_blank">
            <i class="bx bxl-instagram"></i>
          </a>
          <a href="https://www.facebook.com/sathwik.chepyala/" target="_blank">
            <i class="bx bxl-facebook-circle"></i>
          </a>
        </div>
        <a
          href="mailto:ch.sathwik.chepyala@gmail.com"
          target="_blank"
          title="ch.sathwik.chepyala@gmail.com"
        >
          <p className="email">ch.sathwik.chepyala@gmail.com</p>
        </a>
      </div>
      <footer className="thanks-section">
        <h2>
          <span>
            Thanks for Visiting! <i class="bx bx-happy-alt"></i>
          </span>
        </h2>
        <p>Have a great day! 🌟</p>
        <p className="copyright">
          {" "}
          © {new Date().getFullYear()} Sathwik Chepyala. All rights reserve
        </p>
      </footer>
    </div>
  );
}

export default App;
