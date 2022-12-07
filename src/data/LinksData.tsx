import { ImGithub, ImLinkedin } from "react-icons/im";
import { SiLeetcode } from "react-icons/si";
import { BsJournals } from "react-icons/bs";
interface LinksType {
  title: string;
  icon: any;
  link: string;
}

export const LinksData: LinksType[] = [
  {
    title: "GitHub",
    icon: <ImGithub color='#000000dc' />,
    link: "https://github.com/ampersandor",
  },
  {
    title: "LinkedIn",
    icon: <ImLinkedin color='#000000dc' />,
    link: "https://www.linkedin.com/in/dong-hun-kim-4a3119168/",
  },
  {
    title: "Blog",
    icon: <BsJournals color='#000000dc' />,
    link: "https://ampersandor.tistory.com/",
  },
  {
    title: "LeetCode",
    icon: <SiLeetcode color='#000000dc' />,
    link: "https://leetcode.com/williamkim/",
  },
];
