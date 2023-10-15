import styles from "./styles.module.css";

const Header = () => {
  const userMedia = window.matchMedia("(prefers-color-scheme: light)").matches;

  return (
    <div className={styles.header}>
      <a href="https://online.vtb.ru/login">
        {userMedia ? (
          <img
            src="/assets/svg/logo-light.svg"
            alt="VTB"
            width={72}
            height={72}
          />
        ) : (
          <img
            src="/assets/svg/logo-dark.svg"
            alt="VTB"
            width={72}
            height={72}
          />
        )}
      </a>
    </div>
  );
};

export default Header;
