"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import styles from "./Hero.module.scss";
import { Button } from "..";
import useSectionInView from "@/hooks/useSectionInView";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  const { ref } = useSectionInView("Home");

  return (
    <section ref={ref} className={styles.section} id="home">
      <Image
        src="/img/portrait.webp"
        alt="hero image"
        className={styles.portrait}
        width={250}
        height={250}
        priority={true}
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
          <Link href={""} className={styles["social-icon"]}>
            <FaLinkedin />
          </Link>
          <Link href={""} className={styles["social-icon"]}>
            <FaGithub />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
