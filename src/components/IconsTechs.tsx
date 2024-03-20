import {
  SiJavascript,
  SiTypescript,
  SiStyledcomponents,
  SiReact,
} from "react-icons/si";

import { FaHtml5, FaGithub, FaCss3 } from "react-icons/fa";

interface IconProps {
  iconName: string;
  size: string;
  color: string;
}
export const IconTechs = ({ iconName, size, color }: IconProps) => {
  switch (iconName) {
    case "FaHtml5":
      return <FaHtml5 size={size} color={color} />;
    case "FaCss3":
      return <FaCss3 size={size} color={color} />;
    case "SiJavascript":
      return <SiJavascript size={size} color={color} />;
    case "SiTypescript":
      return <SiTypescript size={size} color={color} />;
    case "SiReact":
      return <SiReact size={size} color={color} />;
    case "SiStyledcomponents":
      return <SiStyledcomponents size={size} color={color} />;
    case "FaGithub":
      return <FaGithub size={size} color={color} />;

    default:
      return null;
  }
};
