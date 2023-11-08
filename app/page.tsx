import { Hero } from "@/components";
import styles from "./page.module.scss";

const Home = () => {
  return (
    <main className={styles.main}>
      <Hero />
    </main>
  );
};

export default Home;
