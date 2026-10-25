import React from 'react';
import { NavLink, Link, Routes, Route } from 'react-router-dom';

function Home() {
  return (
    <section className="page home">
      <p className="tagline">HELLO, EVERYONE!</p>
      <h1>Hi, I'm <span>Aryan Mehra</span></h1>
      <h2>A Computer Science Student</h2>
      <p>I enjoy programming, learning new technologies, and building useful projects.</p>
      <Link className="button" to="/projects">View My Projects</Link>
    </section>
  );
}

function About() {
  return (
    <section className="page">
      <h1>About Me</h1>
      <p>I'm a Computer Science student learning software development and problem solving.</p>
      <p>My current interests are Java, data structures, React, and web development.</p>
      <h2>My Skills</h2>
      <div className="skills">
        <span>Java</span><span>HTML</span><span>CSS</span><span>JavaScript</span><span>React</span>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    { name: 'Portfolio Website', description: 'A personal website created using React and CSS.' },
    { name: 'Student Record System', description: 'A basic Java project to manage student details.' },
    { name: 'DSA Practice', description: 'Solutions to coding problems using Java.' }
  ];

  return (
    <section className="page">
      <h1>My Projects</h1>
      <p>Here are some projects I have worked on or plan to build.</p>
      <div className="projects">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="page">
      <h1>Contact Me</h1>
      <p>Have a question or want to connect? Send me an email.</p>
      <a className="button" href="mailto:aryan26mehra@gmail.com">Email Me</a>
      <p className="small-note">aryan26mehra@gmail.com</p>
    </section>
  );
}

function NotFound() {
  return (
    <section className="page">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link className="button" to="/">Go Home</Link>
    </section>
  );
}

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <Link className="logo" to="/">MyPortfolio</Link>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer>© 2026 Aryan Mehra | React Portfolio Mini Project</footer>
    </div>
  );
}