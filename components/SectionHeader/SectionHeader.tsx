import styles from "./SectionHeader.module.scss";

interface SectionHeaderProps {
  text: string;
}

const SectionHeader = ({ text }: SectionHeaderProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>{text}</h2>
    </div>
  );
};

export default SectionHeader;
