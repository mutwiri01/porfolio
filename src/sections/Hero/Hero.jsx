import styles from "./HeroStyles.module.css";
import heroImg1 from "../../assets/react.png";
import heroImg2 from "../../assets/node-js.png";
import heroImg3 from "../../assets/postger.png";
import heroImg4 from "../../assets/figma.png";
import heroImg5 from "../../assets/WebchainLogo.png";
import heroImg6 from "../../assets/redux.png";
import heroImg7 from "../../assets/express.png";
import heroImg9 from "../../assets/html.png";
import heroImg10 from "../../assets/prisma.webp";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const themeText = theme === "light" ? "Light Theme" : "Dark Theme";
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <div className={styles.sphereContainer}>
          <div className={styles.sphere}>
            <img
              src={heroImg1}
              alt="Small Image 1"
              className={styles.sphereImg}
            />
            <img
              src={heroImg2}
              alt="Small Image 2"
              className={styles.sphereImg}
            />
            <img
              src={heroImg3}
              alt="Small Image 3"
              className={styles.sphereImg}
            />
            <img
              src={heroImg4}
              alt="Small Image 4"
              className={styles.sphereImg}
            />
            <img
              src={heroImg5}
              alt="Small Image 5"
              className={styles.sphereImg}
            />
            <img
              src={heroImg6}
              alt="Small Image 6"
              className={styles.sphereImg}
            />
            <img
              src={heroImg7}
              alt="Small Image 7"
              className={styles.sphereImg}
            />
            <img
              src={heroImg9}
              alt="Small Image 8"
              className={styles.sphereImg}
            />
            <img
              src={heroImg10}
              alt="Small Image 9"
              className={styles.sphereImg}
            />
          </div>
        </div>

        <div className={styles.colorModeToggle} onClick={toggleTheme}>
          <img
            className={styles.colorMode}
            src={themeIcon}
            alt="Color mode icon"
          />
          <span className={styles.themeText}>{themeText}</span>
        </div>
      </div>

      <div className={styles.info}>
        <h1>
          Mutwiri
          <br />
          Kithinji
        </h1>
        <h2>Fullstack Developer</h2>
        <span>
          <a
            href="https://github.com/mutwiri01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a
            href="https://github.com/mutwiri01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          I build dynamic, responsive, intuitive user interfaces and architect
          robust backend systems, embracing every challenge as an opportunity to
          innovate.
        </p>
        <a href={CV} download>
          <button className={styles.downloadButton}>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
