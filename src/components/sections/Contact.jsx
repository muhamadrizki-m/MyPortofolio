import "../../styles/sections/contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-header scroll-reveal">
          <span className="contact-eyebrow">
            CONTACT
          </span>

          <h2 className="contact-title">
            Let's build
            <br />
            something meaningful.
          </h2>
        </div>

        <div className="contact-content scroll-reveal">
          <p className="contact-description">
            I'm always open to new opportunities, collaborations,
            and interesting ideas. If you'd like to work together,
            feel free to reach out.
          </p>

          <a
            className="contact-email"
            href="mailto:your.email@example.com"
          >
            your.email@example.com
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="contact-socials scroll-reveal">
          <a
            href="#"
            className="contact-social"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <span aria-hidden="true">↗</span>
          </a>

          <a
            href="#"
            className="contact-social"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
            <span aria-hidden="true">↗</span>
          </a>

          <a
            href="#"
            className="contact-social"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <footer className="contact-footer scroll-reveal">
          <span>
            © 2026 Muhammad Rizki
          </span>

          <span>
            Jakarta, Indonesia
          </span>
        </footer>
      </div>
    </section>
  );
}

export default Contact;