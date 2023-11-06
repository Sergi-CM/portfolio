"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Header.module.scss";
import { links } from "@/lib/data";

const Header = () => {
  return (
    <motion.header
      className={styles.header}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className={styles.logo}>Sergi Casquero</h1>
      <nav className={styles.links}>
        {links.map((link) => (
          <Link key={link.name} href={link.hash} className={styles.link}>
            {link.name}
          </Link>
        ))}
      </nav>
    </motion.header>
  );
};

export default Header;
