import "../../styles/sections/hero.css";
import "../../styles/components/socials.css";
import SocialLinks from "../ui/SocialLinks.jsx";
import catImage from "../../assets/cat.png";

function Hero() {
  return (
    <section className="home hero" id="home">
      <div
        className="hero-cat-frame"
        aria-hidden="true"
      >
        <img
          className="hero-cat"
          src={catImage}
          alt=""
        />
      </div>

      <div
        className="hero-cat-fade"
        aria-hidden="true"
      />

      <div className="hero-content">
        <span className="eyebrow scroll-reveal">
          INFORMATICS STUDENT &amp; ASPIRING WEB DEVELOPER
        </span>

        <h1 className="hero-title scroll-reveal">
          MUHAMAD RIZKI MAULANA
        </h1>

        <p className="hero-description scroll-reveal">
          Informatics student interested in web development and technology.
          I enjoy learning, building projects, and continuously improving my
          skills as a developer.
        </p>

        <div className="scroll-reveal">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}

export default Hero;