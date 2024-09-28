import styles from './ProjectsStyles.module.css';
import krypt from '../../assets/p1.png';
import foodly from '../../assets/p2.png';
import cosmetics from '../../assets/p3.png';
import admin from '../../assets/p4.png';
import waste from '../../assets/p5.png';
import virtual from '../../assets/p6.png';
import employee from '../../assets/p7.png';
import ecoenergy from '../../assets/p8.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={krypt}
          link="https://kryptweb3-topaz.vercel.app/"
          h3="KRYPT"
          p="CryptoCurrency website"
        />
        <ProjectCard
          src={foodly}
          link="https://foodly-seven.vercel.app/#"
          h3="FOODLY"
          p="Restaurant Framework"
        />
        <ProjectCard
          src={cosmetics}
          link="https://shikocosmetics-web.vercel.app/#"
          h3="Cosmetics"
          p="Beauty Products Website"
        />
        <ProjectCard
          src={waste}
          link="https://binit.vercel.app/"
          h3="Binit"
          p="Waste Management Company"
        />
        <ProjectCard
          src={virtual}
          link="https://virtualworld.vercel.app/"
          h3="Virtual-VR"
          p="Virtual Gadgets Framework"
        />
        <ProjectCard
          src={admin}
          link="https://employemanagementsystem.vercel.app/"
          h3="Admin Panel"
          p="Admin Panel Framework"
        />
        <ProjectCard
          src={employee}
          link="https://emsfront.vercel.app/"
          h3="Employee Management System"
          p="Employee Management System Console"
        />
        <ProjectCard
          src={ecoenergy}
          link="https://ecoenergy.vercel.app/"
          h3="Ecoenergy"
          p="Solar Energy Platform"
        />
      </div>
    </section>
  );
}

export default Projects;
