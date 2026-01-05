import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-name">Surya Kiran</h1>

      <h2 className="hero-role">
        Full-Stack Developer | AI & ML Enthusiast
      </h2>

      <p className="hero-desc">
        I build scalable web applications and intelligent systems
        using modern technologies. Passionate about AI, machine
        learning, and solving real-world problems.
      </p>

      {/* Resume button in new line */}
      <div className="hero-resume">
        <a href="/resume.pdf" target="_blank" rel="noreferrer">
          Download Resume
        </a>
      </div>
    </section>
  )
}

export default Hero
