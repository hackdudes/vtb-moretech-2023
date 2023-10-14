import { FC } from "react";

import styles from "./styles.module.css";

interface SidebarProps {
  visible: boolean;
  handleVisible: () => void;
}

const Sidebar: FC<SidebarProps> = ({ visible, handleVisible }) => {
  return visible ? (
    <div className={styles.sidebar}>
      <div className={styles.close}>
        <img onClick={handleVisible} src="/assets/svg/close.svg" alt="close" />
      </div>
    </div>
  ) : null;
};

export default Sidebar;
