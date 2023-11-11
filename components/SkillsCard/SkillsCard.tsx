"use client";

import Image from "next/image";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import styles from "./SkillsCard.module.scss";

interface SkillsCardProps {
  title: string;
  skills: {
    name: string;
    image: string;
  }[];
}

const SkillsCard = ({ title, skills }: SkillsCardProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className={styles["card-wrapper"]} onClick={handleClick}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.arrow}>
          {isOpen ? <FiChevronUp /> : <FiChevronDown />}
        </span>
      </div>
      {isOpen && (
        <ul className={styles["skills-wrapper"]}>
          {skills.map((skill) => (
            <li key={skill.name} className={styles.skill}>
              <Image
                src={skill.image}
                alt={skill.name}
                height={70}
                width={70}
              />
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default SkillsCard;
