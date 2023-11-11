import { ExperienceSection, Hero, SkillsSection } from "@/components";
import styles from "./page.module.scss";

const Home = () => {
  return (
    <main className={styles.main}>
      <Hero />
      <ExperienceSection />
      <SkillsSection />
    </main>
  );
};

export default Home;
