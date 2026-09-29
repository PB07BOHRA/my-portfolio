import { useState } from "react";
import {
  Mail,
  ArrowDown,
  Download,
} from "lucide-react";
import "./App.css";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="logo">Priyesh.</div>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>

          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>

          <a href="#education" onClick={() => setMenuOpen(false)}>
            Education
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
      </nav>


      <main>

        {/* ================= HERO ================= */}

        <section className="hero" id="home">

          <div className="hero-content">

            <div className="available">
              <span className="status-dot"></span>
              Available for opportunities
            </div>

            <p className="intro">HELLO, I'M</p>

            <h1>
              Priyesh
              <span> Bohra</span>
            </h1>

            <h2>
              I build <span>web experiences.</span>
            </h2>

            <p className="hero-description">
              BTech Computer Science graduate focused on building modern,
              responsive and user-friendly web applications.
            </p>

            <div className="hero-buttons">

              <a
                href="#projects"
                className="btn primary"
              >
                View My Work
                <ArrowDown size={18} />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn secondary"
              >
                <Download size={18} />
                Resume
              </a>

            </div>


            {/* SOCIAL LINKS */}

            <div className="social-links">

              <a
                href="https://github.com/PB07BOHRA"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/priyesh-bohra-263438258/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>

              <a href="mailto:your-email@gmail.com">
                <Mail size={20} />
              </a>

            </div>

          </div>


          {/* PROFILE */}

          <div className="hero-image">

            <div className="profile-wrapper">

            <div className="profile-circle">
  <img
  src="/profile.jpeg"
  alt="Priyesh Bohra"
/>
</div>
              <div className="floating-card card-one">
                <span>React</span>
              </div>

              <div className="floating-card card-two">
                <span>Node.js</span>
              </div>

            </div>

          </div>


          {/* SCROLL */}

          <a
            href="#about"
            className="scroll-indicator"
          >
            <ArrowDown size={18} />
            <span>Scroll to explore</span>
          </a>

        </section>


        {/* ================= ABOUT ================= */}

        <section
          className="about"
          id="about"
        >

          <p className="section-label">
            ABOUT ME
          </p>

          <h2>
            Building for the Web
          </h2>

          <p>
            I am a Computer Science and Engineering graduate interested
            in web development. I enjoy creating responsive websites
            and applications and continuously improving my development
            skills.
          </p>

        </section>


        {/* ================= SKILLS ================= */}

        <section
          className="skills"
          id="skills"
        >

          <p className="section-label">
            MY SKILLS
          </p>

          <h2>
            Technologies I Work With
          </h2>

          <div className="skills-grid">

            <div className="skill">
              HTML & CSS
            </div>

            <div className="skill">
              JavaScript
            </div>

            <div className="skill">
              React.js
            </div>

            <div className="skill">
              Node.js
            </div>

            <div className="skill">
              Express.js
            </div>

            <div className="skill">
              PHP
            </div>

            <div className="skill">
              Laravel
            </div>

            <div className="skill">
              MySQL
            </div>

            <div className="skill">
              MongoDB
            </div>

            <div className="skill">
              Git & GitHub
            </div>

          </div>

        </section>


        {/* ================= PROJECTS ================= */}

        <section
          className="projects"
          id="projects"
        >

          <p className="section-label">
            MY PROJECTS
          </p>

          <h2>
            Things I've Built
          </h2>


          <div className="projects-grid">


            {/* SALEHUB */}

            <div className="project-card">

              <div className="project-number">
                01
              </div>

              <h3>
                SaleHub
              </h3>

              <p>
                A full-stack web application for managing and displaying
                sale items. Built with a React frontend and Node.js
                backend with MongoDB for data storage.
              </p>

              <div className="project-tech">

                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>

              </div>

              <a
                href="https://github.com/PB07BOHRA/SaleHub"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub →
              </a>

            </div>


            {/* STUDY PLANNER */}

            <div className="project-card">

              <div className="project-number">
                02
              </div>

              <h3>
                Study Planner
              </h3>

              <p>
                A study planning web application designed to help
                students organize their study schedule, manage tasks
                and stay productive.
              </p>

              <div className="project-tech">

                <span>React</span>
                <span>JavaScript</span>
                <span>CSS</span>

              </div>

              <a
                href="https://study-planner-app-rust.vercel.app/"
                className="project-link"
              >
                Live Demo →
              </a>

            </div>


            {/* BIKE RENTAL */}

            <div className="project-card">

              <div className="project-number">
                03
              </div>

              <h3>
                Bike Rental App
              </h3>

              <p>
                A mobile bike rental application designed for
                customers to discover and rent bikes. The project
                includes customer and admin-side functionality.
              </p>

              <div className="project-tech">

                <span>React Native</span>
                <span>Expo</span>
                <span>JavaScript</span>

              </div>

              <a
                href="https://github.com/PB07BOHRA/Bike-rental-app"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub →
              </a>

            </div>

          </div>

        </section>


        {/* ================= EDUCATION ================= */}

        <section
          className="education"
          id="education"
        >

          <p className="section-label">
            EDUCATION
          </p>

          <h2>
            My Education
          </h2>

          <div className="education-card">

            <div>

              <span className="education-year">
                2022 — 2026
              </span>

              <h3>
                Bachelor of Technology — Computer Science & Engineering
              </h3>

              <p>
                Focused on software development, web technologies,
                databases, computer networks and application development.
              </p>

            </div>

          </div>

        </section>


        {/* ================= RESUME ================= */}

        <section className="resume-section">

          <div>

            <p className="section-label">
              MY RESUME
            </p>

            <h2>
              Let's work together.
            </h2>

            <p>
              Interested in working on web development projects and
              learning new technologies.
            </p>

          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary"
          >
            View Resume
          </a>

        </section>


        {/* ================= CONTACT ================= */}

        <section
          className="contact"
          id="contact"
        >

          <p className="section-label">
            CONTACT
          </p>

          <h2>
            Let's Connect
          </h2>

          <p>
            Have a project, internship opportunity, or job opportunity?
            Feel free to get in touch.
          </p>


          <div className="contact-links">

            <a href="mailto:priyeshbohra1@gmail.com">
              Email Me
            </a>

            <a
              href="https://github.com/PB07BOHRA"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/priyesh-bohra-263438258/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

          </div>

        </section>


        {/* ================= FOOTER ================= */}

        <footer>

          <p>
            © 2026 Priyesh Bohra. All rights reserved.
          </p>

        </footer>

      </main>

    </div>
  );
}

export default App;