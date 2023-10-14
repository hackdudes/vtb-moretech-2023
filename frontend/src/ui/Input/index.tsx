import { FC } from "react";

import styles from "./styles.module.css";

interface InputBaseProps {
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBase: FC<InputBaseProps> = ({ value, placeholder, onChange }) => {
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
