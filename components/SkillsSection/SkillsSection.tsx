"use client";

import { skillsData } from "@/lib/data";
import styles from "./SkillsSection.module.scss";
import { SectionHeader, SkillsCard } from "..";
import useSectionInView from "@/hooks/useSectionInView";

const SkillsSection = (): JSX.Element => {
  const { ref } = useSectionInView("Skills");

  return (
    <section ref={ref} id="skills" className={styles.section}>
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
