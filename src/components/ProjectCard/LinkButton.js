import { FaGithub, FaRunning } from 'react-icons/fa';

import styles from './projectCard.module.scss';

const LinkButton = (props) => {
  return (
    <a
      className={props.isGitHub ? `${styles.github}` : `${styles.hosted}`}
      href={props.link}
      target='_blank'
      rel='noreferrer'
    >
      {props.isGitHub ? <FaGithub /> : <FaRunning />}
      {props.isGitHub ? ' GitHub' : ' Live Here'}
    </a>
  );
};

export { LinkButton };
