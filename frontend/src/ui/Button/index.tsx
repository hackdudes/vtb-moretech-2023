import { FC } from "react";

import styles from "./styles.module.css";

export enum ButtonTheme {
  OUTLINE = "outline",
  FANCY = "fancy",
}

interface ButtonProps {
  text: string;
  theme?: ButtonTheme.FANCY | ButtonTheme.OUTLINE;
}

const Button: FC<ButtonProps> = ({ text, theme }) => {
  let classTheme = "";

  switch (theme) {
    case ButtonTheme.OUTLINE:
      classTheme = styles.btnOutline;
      break;
    default:
      classTheme = styles.btnFancy;
      break;
  }

  return (
    <button type="button" className={`${styles.button} ${classTheme}`}>
      {text}
    </button>
  );
};

export default Button;
