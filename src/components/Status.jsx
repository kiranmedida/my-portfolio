import './Status.css'

function Status() {
  return (
    <section className="status">
      <div className="status-card">
        <h3>🎓 Student</h3>
        <p>Learning & building real-world projects</p>
      </div>

      <div className="status-card highlight">
        <h3>🟢 Available</h3>
        <p>Open for internships & projects</p>
      </div>

      <div className="status-card">
        <h3>⚡ Fast Response</h3>
        <p>Replies within 24 hours</p>
      </div>
    </section>
  )
}

export default Status
