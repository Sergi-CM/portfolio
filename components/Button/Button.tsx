import Link from "next/link";
import styles from "./Button.module.scss";
import { FiMail } from "react-icons/fi";

interface ButtonProps {
  text: string;
  href: string;
  border: boolean;
}

const Button = ({ text, href, border }: ButtonProps) => {
  return (
    <Link
      href={href}
      className={`${styles["button"]} ${border ? styles.border : ""}`}
    >
      {text}
    </Link>
  );
};

export default Button;
