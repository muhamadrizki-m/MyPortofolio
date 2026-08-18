import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "./SocialIcons.jsx";

function SocialLinks() {
  return (
    <div className="social-links">
      <a
        className="social-link"
        href="https://github.com/username"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <GithubIcon />
      </a>

      <a
        className="social-link"
        href="https://www.linkedin.com/in/username"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <LinkedinIcon />
      </a>

      <a
        className="social-link"
        href="mailto:email@example.com"
        aria-label="Email"
      >
        <MailIcon />
      </a>
    </div>
  );
}

export default SocialLinks;