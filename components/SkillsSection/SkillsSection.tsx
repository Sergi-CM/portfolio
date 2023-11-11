import skillsData from "./skillsData";
import styles from "./SkillsSection.module.scss";
import { SectionHeader, SkillsCard } from "..";

const SkillsSection = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <SectionHeader text="Skills" />

      <ul className={styles["lists-wrapper"]}>
        {skillsData.map((category) => (
          <SkillsCard
            key={category.title}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </ul>
    </section>
  );
};

export default SkillsSection;
