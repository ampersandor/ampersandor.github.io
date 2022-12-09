import { LinkButton } from "./LinkButton";
import styles from "./projectCard.module.scss";

const ProjectCard = (props) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.imagewrapper}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={styles.content}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <div className={styles.buttons}>
          {props.GitHub && <LinkButton isGitHub={true} link={props.GitHub} />}
          <LinkButton isGitHub={false} link={props.hosted} />
        </div>
      </div>
    </div>
  );
};

export { ProjectCard };
