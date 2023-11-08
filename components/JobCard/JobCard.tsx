import styles from "./JobCard.module.scss";

interface JobCardProps {
  title: string;
  company: string;
  dates: string;
}

const JobCard = ({ title, company, dates }: JobCardProps): JSX.Element => {
  return (
    <article className={styles.card}>
      <span className={styles.circle}></span>
      <div className={styles["texts-wrapper"]}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.company}>{company}</span>
        <span className={styles.dates}>{dates}</span>
      </div>
    </article>
  );
};

export default JobCard;
