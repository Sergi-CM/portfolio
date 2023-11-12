import {
  ExperienceSection,
  Hero,
  ProjectsSection,
  SkillsSection,
} from "@/components";
import styles from "./page.module.scss";

const Home = () => {
  return (
    <main className={styles.main}>
      <Hero />
      <div className={styles["sections-wrapper"]}>
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
      </div>
    </main>
  );
};

export default Home;
