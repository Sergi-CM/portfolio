import Link from "next/link";
import { FiX } from "react-icons/fi";
import styles from "./SideMenu.module.scss";
import { links } from "@/lib/data";
import { DarkModeToggle } from "..";

interface SideMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const SideMenu = ({
  isOpen,
  closeMenu,
  isDarkMode,
  toggleDarkMode,
}: SideMenuProps): JSX.Element => {
  return (
    <aside className={`${styles.sideMenu} ${isOpen ? styles.open : ""}`}>
      <button className={styles.closeButton} onClick={closeMenu}>
        <FiX />
      </button>

      <nav className={styles.links}>
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.hash}
            className={styles.link}
            onClick={closeMenu}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </aside>
  );
};

export default SideMenu;
