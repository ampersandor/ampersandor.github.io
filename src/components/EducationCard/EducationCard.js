import { IoIosSchool } from 'react-icons/io';
import { GiMachineGunMagazine} from 'react-icons/gi';
import { FaBuilding } from 'react-icons/fa';

import styles from './educationCard.module.scss';

function judgeIcon(title){
  if(title.toLowerCase().includes("university") || title.toLowerCase().includes("school")){
    return <IoIosSchool className={styles.icon}/>;
  }
  else if(title.toLowerCase().includes("military")){
    return <GiMachineGunMagazine className={styles.icon}/>
  }
  else{
    return <FaBuilding className={styles.icon}/>;
  }
}

const EducationCard = (props) => {
  return (
    <div className={`${styles.row} ${props.isLeft ? styles.row_1 : styles.row_2}`}>
      <section>
        {/* <IoIosSchool className={styles.icon} /> */}
        {judgeIcon(props.title)}
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
