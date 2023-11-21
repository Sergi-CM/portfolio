"use client";

import Image from "next/image";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import styles from "./SkillsCard.module.scss";
import { motion } from "framer-motion";

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
        <motion.ul
          className={styles["skills-wrapper"]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {skills.map((skill) => (
            <motion.li key={skill.name} className={styles.skill}>
              <Image
                src={skill.image}
                alt={skill.name}
                height={60}
                width={60}
              />
              <span>{skill.name}</span>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </article>
  );
};

export default SkillsCard;
