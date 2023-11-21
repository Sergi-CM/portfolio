"use client";

import { ProjectCard, SectionHeader } from "..";
import styles from "./ProjectsSection.module.scss";
import { projects } from "@/lib/data";
import useSectionInView from "@/hooks/useSectionInView";

const ProjectsSection = () => {
  const { ref } = useSectionInView("Projects");

  return (
    <section ref={ref} id="projects" className={styles.section}>
      <SectionHeader text="Side Projects" />
      <ul className={styles["projects-wrapper"]}>
        {projects.map((project) => (
          <li key={project.title}>
            <ProjectCard
              title={project.title}
              description={project.description}
              skills={project.skills}
              image={project.image}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
