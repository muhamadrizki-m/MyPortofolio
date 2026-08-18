import "../../styles/sections/about.css";

function LocationIcon() {
  return (
    <svg
      className="about-card-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function EducationIcon() {
  return (
    <svg
      className="about-card-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="m3 9 9-4 9 4-9 4-9-4Z" />
      <path d="M7 11.5V16c2.8 2.2 7.2 2.2 10 0v-4.5" />
      <path d="M21 9v6" />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg
      className="about-card-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="m12 3-1.2 4.3L7 8.5l3.8 1.2L12 14l1.2-4.3L17 8.5l-3.8-1.2L12 3Z" />
      <path d="m19 14-.7 2.3L16 17l2.3.7L19 20l.7-2.3L22 17l-2.3-.7L19 14Z" />
      <path d="m5 14-.6 1.9L2.5 17l1.9.6L5 19.5l.6-1.9 1.9-.6-1.9-.6L5 14Z" />
    </svg>
  );
}

const aboutCards = [
  {
    icon: <LocationIcon />,
    title: "Jakarta, Indonesia",
    description: "Based in Jakarta, Indonesia.",
  },
  {
    icon: <EducationIcon />,
    title: "Informatics Student",
    description:
      "Currently studying Informatics and exploring software development.",
  },
  {
    icon: <SparklesIcon />,
    title: "Always Learning",
    description:
      "Continuously learning new technologies and improving my skills.",
  },
];

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-intro scroll-reveal">
          <p className="about-label">
            ABOUT ME
          </p>

          <h2 className="about-title">
            Building with curiosity,
            <br />
            learning with purpose.
          </h2>

          <div className="about-description">
            <p>
              I'm an Informatics student interested in web development and
              technology.
            </p>

            <p>
              I enjoy learning, building projects, and continuously improving
              my skills as a developer. I like turning ideas into simple,
              functional, and meaningful digital experiences.
            </p>
          </div>
        </div>

        <div className="about-cards">
          {aboutCards.map((card, index) => (
            <article
              className={`about-card scroll-reveal about-card-reveal-${index + 1}`}
              key={card.title}
            >
              <div className="about-card-top">
                {card.icon}
              </div>

              <div className="about-card-content">
                <h3>{card.title}</h3>

                <p>{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;