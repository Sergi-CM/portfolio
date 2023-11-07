"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import styles from "./Header.module.scss";
import { links } from "@/lib/data";
import { DarkModeToggle, SideMenu } from "..";

const Header = (): JSX.Element => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

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

      <div className={styles["dark-mode-toggle"]}>
        <DarkModeToggle
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </div>

      <button className={styles.burger} onClick={toggleSideMenu}>
        <FiMenu />
      </button>

      <SideMenu
        isOpen={isSideMenuOpen}
        closeMenu={toggleSideMenu}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
    </motion.header>
  );
};

export default Header;
