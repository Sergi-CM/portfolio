"use client";

import { JobCard, SectionHeader } from "..";
import styles from "./ExperienceSection.module.scss";
import { experience } from "@/lib/data";
import useSectionInView from "@/hooks/useSectionInView";

const ExperienceSection = () => {
  const { ref } = useSectionInView("Experience");

  return (
    <section ref={ref} id="experience" className={styles.section}>
      <SectionHeader text="Experience" />

      {experience.map((job) => (
        <JobCard
          title={job.title}
          company={job.company}
          dates={job.dates}
          key={job.company}
        />
      ))}
    </section>
  );
};

export default ExperienceSection;
