import styles from "./styles.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <a href="https://online.vtb.ru/login">
        <img src="/assets/svg/logo.svg" alt="VTB" width={72} height={72} />
      </a>
    </div>
  );
};

export default Header;
