import styles from "./styles.module.css";

const Button = ({ text, theme }) => {
  let classTheme = "";

  switch (theme) {
    case "outline":
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
