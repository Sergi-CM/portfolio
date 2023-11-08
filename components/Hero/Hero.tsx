"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import styles from "./Hero.module.scss";
import { Button } from "..";

const Hero = () => {
  return (
    <motion.section
      className={styles.section}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src="/img/portrait.webp"
        alt="hero image"
        className={styles.portrait}
        width={200}
        height={200}
      />

      <div className={styles.texts}>
        <h1 className={styles.heading}>
          <span>Hello! 👋</span>
          <br />
          <TypeAnimation
            sequence={[
              "I'm Sergi.",
              1500,
              "I'm a Full Stack Developer.",
              1500,
              "I build online experiences.",
              1500,
              "I'm a clean code lover.",
              1500,
            ]}
            wrapper="span"
            speed={30}
            repeat={Infinity}
            className={styles.typing}
          />
        </h1>

        <p className={styles.welcome}>
          Welcome to my digital world, where code and creativity converge to
          shape the web!
        </p>

        <div className={styles["buttons-wrapper"]}>
          <Button text={"Contact Me"} href={"#contact"} border={true} />
          <Button text={"Download CV"} href={"#"} border={false} />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
