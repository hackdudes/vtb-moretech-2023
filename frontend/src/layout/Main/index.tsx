import { YMaps } from "@pbe/react-yandex-maps";

import YandexMap from "../../components/Map";
import Sidebar from "../../components/Sidebar";

import styles from "./styles.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <YMaps query={{ apikey: import.meta.env.VITE_API_KEY }}>
        <YandexMap />
      </YMaps>
      <Sidebar />
    </div>
  );
};

export default Main;
