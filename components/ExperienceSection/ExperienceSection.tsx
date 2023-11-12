import { JobCard, SectionHeader } from "..";
import styles from "./ExperienceSection.module.scss";
import { experience } from "@/lib/data";

const ExperienceSection = () => {
  return (
    <section id="experience" className={styles.section}>
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
