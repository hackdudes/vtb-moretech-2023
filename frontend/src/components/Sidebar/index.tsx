import React from "react";

import Button from "../../ui/Button";
import { ButtonTheme } from "../../ui/Button";
import InputBase from "../../ui/Input";

import styles from "./styles.module.css";

const Sidebar = () => {
  const [value, setValue] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.input}>
        <InputBase
          value={value}
          onChange={handleChange}
          placeholder="Город, район, улица, метро..."
        />
      </div>
      <div className={styles.btns}>
        <Button text="Отделения" />
        <Button text="Банкоматы" theme={ButtonTheme.OUTLINE} />
      </div>
    </div>
  );
};

export default Sidebar;
