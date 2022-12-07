const Zoom = require("react-reveal/Zoom");
import Lottie from "react-lottie";

import { AboutData } from "../../data/AboutData";
import { LinksData } from "../../data/LinksData";
import styles from "./home.module.scss";
import lottieData from "../../assets/pig.json";


const welcomeText = `I Am, ${AboutData.firstName}  ${AboutData.lastName}`;

const Home = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: lottieData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={styles.home}>
      <Zoom cascade>
        <div className={styles.lottie}>
          <Lottie
            options={defaultOptions}
            height='100%'
            width='100%'
            isStopped={false}
            isPaused={false}
          />
        </div>
        <h2 className={styles.title}>{welcomeText}</h2>
      </Zoom>
      <Zoom cascade>
        <h3 className={styles.about}>{AboutData.about1}</h3>
        <h3 className={styles.about_next}>{AboutData.about2}</h3>
        <div className={styles.links}>
          {LinksData.map((item) => (
            <a
              href={item.link}
              target='_blank'
              rel='noreferrer'
              key={item.title}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </Zoom>
    </div>
  );
};

export default Home;
