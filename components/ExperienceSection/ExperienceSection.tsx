"use client";

import { motion } from "framer-motion";
import { JobCard, SectionHeader } from "..";
import styles from "./ExperienceSection.module.scss";
import { experience } from "@/lib/data";

const ExperienceSection = () => {
  return (
    <motion.section
      className={styles.section}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeader text="Experience" />

      {experience.map((job) => (
        <JobCard
          title={job.title}
          company={job.company}
          dates={job.dates}
          key={job.company}
        />
      ))}
    </motion.section>
  );
};

export default ExperienceSection;
