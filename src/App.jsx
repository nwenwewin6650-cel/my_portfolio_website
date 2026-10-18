
import "./App.css";

const certificates = [
  {
    title: "Advanced React Development",
    issuer: "Meta",
    year: "2024",
    skills: ["React", "Hooks", "Context API"],
  },
  {
    title: "Full Stack JavaScript",
    issuer: "IBM",
    year: "2023",
    skills: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "UI/UX Design",
    issuer: "Google",
    year: "2024",
    skills: ["Figma", "Research", "Prototyping"],
  },
];


const education = [
  {
    title: "Bachelor of Computer Science",
    school: "University of Computer Studies, Mandalay",
    year: "2022 – Present",
    result: "Currently Studying",
  },
];


function Navbar() {
  return (
    <nav className="navbar">
      <a className="logo" href="#home">
        Nwe Nwe Win <span>🌸</span>
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#certificates">learning</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
      </div>

     
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-text">
       

        <h1>🌸I'm Nwe Nwe Win🌸</h1>

        <h2>
          I'm a <span>Student </span>
        </h2>

        <p className="description">
          I'm an aspiring Frontend Developer with a growing
          interest in React and modern web technologies.
          I'm looking for an internship where I can strengthen
          my coding skills, collaborate with a team, and
          contribute to real-world projects while continuing
          to learn.
        </p>

        <div className="hero-actions">
          <a className="pink-btn" href="/cv.pdf" download>
            ↓ CV
          </a>

          <a
            className="social"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            GH
          </a>

          <a
            className="social"
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            in
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="/Images/pink.jpg"
          alt="Nwe Nwe Win portfolio portrait"
        />
      </div>
    </section>
  );
}

function TechBar() {
  return (
    <div className="tech-bar">
      <span>⚛ React JS</span>
      <span>💚 Vue JS</span>
      <span>🌊 Tailwind CSS</span>
      <span>Ⓝ Next JS</span>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="about section">
      <div className="about-copy">
        <p className="eyebrow">GET TO KNOW ME</p>

        <h2>
          🌸 About <span>Me</span> 🌸
        </h2>

        <p>
          I'm an aspiring Frontend Developer who enjoys
          learning React, building user-friendly interfaces,
          and exploring modern web technologies. I'm looking
          for an internship where I can learn from experienced
          developers, work with a team, and contribute to
          real-world projects.
        </p>

        <div className="stats">
          <div>
            <strong>React</strong>
            <small>Learning</small>
          </div>

          <div>
            <strong>UI/UX</strong>
            <small>Interested In</small>
          </div>

          <div>
            <strong>Team</strong>
            <small>Collaboration</small>
          </div>

          <div>
            <strong>100%</strong>
            <small>Ready to Learn</small>
          </div>
        </div>
      </div>

      <div className="fan-image">
        <img
          src="/Images/about.png"
          alt="Decorative pink fan"
        />
      </div>

      <div className="about-cards">
        <article className="glass-card">
          <h3>My Philosophy</h3>
          <p>
            I believe in writing clean code, learning
            continuously, and creating accessible,
            user-friendly web experiences.
          </p>
        </article>

        <article className="glass-card">
          <h3>My Goal</h3>
          <p>
            To improve my development skills, collaborate
            with a team, and grow into a professional
            Frontend Developer.
          </p>
        </article>
      </div>
    </section>
  );
}


function Certificates() {
  const learningItems = [
    {
      icon: "💻",
      title: "Web Development",
      description: "HTML, CSS, JavaScript and Bootstrap",
      status: "Learning",
    },
    {
      icon: "⚛️",
      title: "React.js",
      description: "Building reusable components and user interfaces",
      status: "In Progress",
    },
    {
      icon: "☕",
      title: "Java & C#",
      description: "Object-oriented programming and academic projects",
      status: "Academic Skills",
    },
    {
      icon: "🗄️",
      title: "Database Management",
      description: "MySQL and database integration",
      status: "Project Experience",
    },
  ];

  return (
    <section className="certificates" id="certificates">
      <p className="eyebrow">MY PROGRESS</p>

      <h2>
        Learning <span>Journey</span>
      </h2>

      <p className="section-description">
        Building my skills, one step at a time.
      </p>

      <div className="certificates-grid">
        {learningItems.map((item, index) => (
          <article className="certificate-card" key={index}>
            <div className="certificate-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span className="certificate-status">
              {item.status}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}


function Education() {
  return (
    <section id="education" className="education section">
      <div className="blossom-image">
        <img
          src="/Images/education.png"
          alt="Pink cherry blossoms"
        />
      </div>

      <div className="education-content">
        <h2>🌸 Education 🌸</h2>
        <p>My academic journey</p>

        {education.map((item) => (
          <article
            className="glass-card education-card"
            key={item.title}
          >
            <h3>{item.title}</h3>
            <p>{item.school}</p>
            <small>
              ▤ {item.year} &nbsp; | &nbsp; {item.result}
            </small>
          </article>
        ))}
      </div>
    </section>
  );
}


function Projects() {
  const projects = [
    {
      title: "Car Rental Management System",
      category: "Academic Project",
      description:
        "A car rental management system developed to manage car rental information and related records.",
      technologies: ["Java", "MySQL"],
    },
    {
      title: "Blood Donation Management System",
      category: "Academic Project",
      description:
        "A blood donation management system designed to organize blood donation information and records.",
      technologies: ["C#"],
    },
    {
      title: "Transportation Management System",
      category: "Academic Project",
      description:
        "A web-based transportation management project developed using front-end web technologies.",
      technologies: ["JavaScript", "HTML", "CSS", "Bootstrap"],
    },
  ];

  return (
    <section className="projects section" id="projects">
      <div className="section-heading">
        <p className="section-subtitle">WHAT I HAVE BUILT</p>
        <h2>Academic Projects</h2>
        <p>
          Projects I developed as part of my university studies.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <span className="project-number">
              0{index + 1}
            </span>

            <p className="project-category">
              {project.category}
            </p>

            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-tech">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}



function Contact() {
  return (
    <footer className="contact" id="contact">
      <div className="contact-content">
        <p className="eyebrow">LET'S CONNECT</p>

        <h2>
          Let's Work <span>Together</span>
        </h2>

        <p className="contact-description">
          I'm currently learning and building my skills
          in web development. I'm open to connecting
          with people and exploring new opportunities.
        </p>

        <div className="contact-links">
          <a
            className="pink-btn"
            href="mailto:your-email@example.com"
          >
            <span>✉</span> Email Me
          </a>

          <a
            className="contact-social"
            href="https://github.com/your-username"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            className="contact-social"
            href="https://www.linkedin.com/in/your-username/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <a href="#home" className="footer-logo">
          Portfolio<span>.</span>
        </a>

        <p>Made with ♡ and a little pink magic.</p>

        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}


export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TechBar />
        <About />
        <Certificates />
        <Education />
        <Projects />
      </main>

      <Contact />
    </>
  );
}
