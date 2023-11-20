"use client";

/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { SectionHeader } from "..";
import styles from "./AboutSection.module.scss";
import useSectionInView from "@/hooks/useSectionInView";

const AboutSection = () => {
  const { ref } = useSectionInView("About");

  return (
    <section ref={ref} id="about" className={styles.section}>
      <SectionHeader text="About Me" />

      <div className={styles["content-wrapper"]}>
        <Image
          src={"/img/bio.png"}
          alt={"Sergi Sport"}
          width={350}
          height={490}
        />
        <Image
          className={styles.overlay}
          src={"/img/bio2.png"}
          alt={"Sergi Rock"}
          width={350}
          height={490}
        />
        <p>
          Hey there! I'm Sergi, your friendly full stack developer with a
          passion for turning caffeine into code and ideas into reality. I
          navigate web development challenges, creating seamless user
          experiences.
          <br />
          <br />
          Beyond coding, I'm a fitness personal trainer, promoting the synergy
          of a healthy body and mind. On weekends, my alter ego emerges as a
          rock guitarist, finding a beautiful balance between the raw energy of
          music and the logical precision of coding.
          <br />
          <br />
          Tap/hover on the image and you'll see! 😜
          <br />
          <br />
          What motivates me in life? It's the thrill of creating, whether it's a
          bug-free codebase, a killer workout routine, or a guitar solo that
          sends shivers down your spine. I'm a firm believer in the idea that
          passion is the fuel that drives innovation.
          <br />
          <br />
          So, join me on this adventure of variables, power chords, and personal
          records.
          <br />
          <br />
          💻💪🎸
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
