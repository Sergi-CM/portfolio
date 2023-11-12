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
    <>
      <header className={styles.header}>
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
      </header>

      {isSideMenuOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      )}
    </>
  );
};

export default Header;
