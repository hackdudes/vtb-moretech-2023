import styles from "./styles.module.css";

const Sidebar = ({ visible, handleVisible }) => {
  return visible ? (
    <div className={styles.sidebar}>
      <div className={styles.close}>
        <img onClick={handleVisible} src="/assets/svg/close.svg" alt="close" />
      </div>
    </div>
  ) : null;
};

export default Sidebar;
