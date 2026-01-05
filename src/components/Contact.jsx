import './Contact.css'
import xIcon from '../assets/x.png'
import linkedinIcon from '../assets/linkedin.png'
import githubIcon from '../assets/github.png'

function Contact() {
  return (
    <section className="contact">

      {/* Centered content */}
      <div className="contact-wrapper">
        <h2 className="contact-title">Let&apos;s Connect 🚀</h2>

        <p className="contact-desc">
          Have a project in mind, looking to hire,<br />
          or just want to say hi? Drop me a message!
        </p>

        <div className="contact-terminal">
          <p>✔ Checking availability...</p>
          <p>✔ Ready to collaborate.</p>
          <p>✔ Opening communication channels...</p>

          <br />

          <p>
            ⚡ Email:{' '}
            <a href="mailto:medidakiran9009@gmail.com">
              medidakiran9009@gmail.com
            </a>
          </p>

          <p>
            🔗 LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/medida-surya-kiran-11570332a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/kiranmedida
            </a>
          </p>

          <p>
            📂 GitHub:{' '}
            <a
              href="https://github.com/kiranmedida"
              target="_blank"
              rel="noreferrer"
            >
              github.com/kiranmedida
            </a>
          </p>
        </div>
      </div>

      {/* Corner icons (NOT fixed) */}
      <div className="contact-social">
        <a href="mailto:medidakiran9009@gmail.com" target="_blank" rel="noreferrer">
          <img src={xIcon} alt="X" />
        </a>

        <a
          href="https://www.linkedin.com/in/medida-surya-kiran-11570332a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>

        <a
          href="https://github.com/kiranmedida"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>

    </section>
  )
}

export default Contact
