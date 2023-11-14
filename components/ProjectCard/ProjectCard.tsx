import Image, { StaticImageData } from "next/image";
import styles from "./ProjectCard.module.scss";
import { FaGithub } from "react-icons/fa";
import { Button } from "..";

interface ProjectCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  skills: {
    name: string;
    image: string;
  }[];
}

const ProjectCard = ({
  title,
  description,
  skills,
  image,
}: ProjectCardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles["texts-wrapper"]}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <div className={styles["skills-wrapper"]}>
          {skills.map((skill) => (
            <span key={skill.name} className={styles.skill}>
              <Image
                className={styles["skill-image"]}
                src={skill.image}
                width={20}
                height={20}
                alt={skill.name}
              />
              <span className={styles["skill-text"]}>{skill.name}</span>
            </span>
          ))}
        </div>

        <div className={styles["buttons-wrapper"]}>
          <Button text={"See Project"} href={"#"} border={true} />
          <span className={styles.code}>
            <FaGithub className={styles.github} />
            <a href="#">Code</a>
          </span>
        </div>
      </div>
      <div className={styles["image-wrapper"]}>
        <Image src={image} className={styles.image} alt={title} />
      </div>
    </article>
  );
};

export default ProjectCard;
