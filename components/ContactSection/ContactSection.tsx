"use client";

import useSectionInView from "@/hooks/useSectionInView";
import styles from "./ContactSection.module.scss";
import { SectionHeader } from "..";
import ContactForm from "../ContactForm/ContactForm";

const ContactSection = (): JSX.Element => {
  const { ref } = useSectionInView("Contact");

  return (
    <section className={styles.section} id="contact" ref={ref}>
      <SectionHeader text="Contact" />
      <div className={styles["contact-wrapper"]}>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
