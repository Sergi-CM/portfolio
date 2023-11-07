import { FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import styles from "./DarkModeToggle.module.scss";

interface DarkModeToggleProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeToggle = ({
  isDarkMode,
  toggleDarkMode,
}: DarkModeToggleProps) => {
  return (
    <button className={styles["toggle-button"]} onClick={toggleDarkMode}>
      {isDarkMode ? <FiSun /> : <FiMoon />}
    </button>
  );
};

export default DarkModeToggle;
