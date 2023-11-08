import { ExperienceSection, Hero } from "@/components";
import styles from "./page.module.scss";

const Home = () => {
  return (
    <main className={styles.main}>
      <Hero />
      <ExperienceSection />
    </main>
  );
};

export default Home;
