import styles from "./styles.module.css";

const InputBase = ({ value, placeholder, onChange }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={styles.input}
      type="text"
    />
  );
};

export default InputBase;
