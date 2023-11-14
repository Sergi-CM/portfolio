import { ProjectCard, SectionHeader } from "..";
import styles from "./ProjectsSection.module.scss";
import { projects } from "@/lib/data";

const ProjectsSection = () => {
  return (
    <section id="projects" className={styles.section}>
      <SectionHeader text="Personal Projects" />
      {projects.map((project) => (
        <ProjectCard
          title={project.title}
          description={project.description}
          skills={project.skills}
          key={project.title}
          image={project.image}
        />
      ))}
    </section>
  );
};

export default ProjectsSection;
