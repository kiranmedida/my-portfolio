import './Projects.css'

function Projects() {
  return (
    <section className="projects">
      <h1 className="projects-tag">PROJECTS</h1>

      <h2 className="projects-title">
        Real projects I’ve built while learning and experimenting
      </h2>

      <div className="projects-grid">

        {/* PROJECT 1 */}
        <div className="project-card">
          <h3>🛒 E-Commerce Website</h3>
          <p>
            A full-stack e-commerce application with user authentication,
            product listing, cart management, and order handling.
            Designed to simulate a real online shopping experience.
          </p>

          <div className="project-tech">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div className="project-card">
          <h3>📝 MERN Notes App</h3>
          <p>
            A simple and clean full-stack notes application built using the
            MERN stack (MongoDB, Express, React, Node.js).
            <br /><br />
            This project was built to practice real-world authentication,
            protected routes, and CRUD operations, with a strong focus on
            a clean UI including light and dark mode support.
          </p>

          <div className="project-tech">
            <span>MongoDB</span>
            <span>Express</span>
            <span>React</span>
            <span>Node.js</span>
            <span>JWT</span>
          </div>
        </div>

        {/* PROJECT 3 */}
        <div className="project-card">
          <h3>🌐 Personal Portfolio Website</h3>
          <p>
            A modern, responsive portfolio website built to showcase
            my projects, skills, and learning journey using React
            and clean UI principles.
          </p>

          <div className="project-tech">
            <span>React</span>
            <span>CSS</span>
            <span>Responsive Design</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects
