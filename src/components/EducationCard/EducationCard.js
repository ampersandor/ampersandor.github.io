import { IoIosSchool } from 'react-icons/io';

import styles from './educationCard.module.scss';

const EducationCard = (props) => {
  return (
    <div className={`${styles.row} ${props.isLeft ? styles.row_1 : styles.row_2}`}>
      <section>
        <IoIosSchool className={styles.icon} />
        <div className={styles.details}>
          <span className={styles.title}>{props.title}</span>
          <span>{props.date}</span>
        </div>
        {props.details.map((item) => (
          <p key={item}>◉ {item}</p>
        ))}
      </section>
    </div>
  );
};

export { EducationCard };
