import {
  ExperienceSection,
  Hero,
  ProjectsSection,
  SkillsSection,
} from "@/components";
import styles from "./page.module.scss";
import AboutSection from "@/components/AboutSection/AboutSection";

const Home = () => {
  return (
    <main className={styles.main}>
      <Hero />
      <div className={styles["sections-wrapper"]}>
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
      </div>
    </main>
  );
};

export default Home;
