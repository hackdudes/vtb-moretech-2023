import React from "react";
import { useYMaps } from "@pbe/react-yandex-maps";

import Sidebar from "../Sidebar";

import styles from "./styles.module.css";

const YandexMap = () => {
  const [visibleSidebar, setVisibleSidebar] = React.useState(false);

  const mapRef = React.useRef(null);
  const ymaps = useYMaps(["Map", "Placemark", "templateLayoutFactory"]);

  const handleVisibleSidebar = () => {
    setVisibleSidebar(!visibleSidebar);
  };

  React.useEffect(() => {
    if (!ymaps || !mapRef.current) {
      return;
    }

    // Placemark
    const myMap = new ymaps.Map(mapRef.current, {
      center: [55.751574, 37.573856],
      zoom: 9,
    });

    const myPlacemark = new ymaps.Placemark(
      myMap.getCenter(),
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "/assets/svg/vtb.svg",
        iconImageSize: [30, 42],
        iconImageOffset: [-5, -38],
      }
    );

    myPlacemark.events.add("click", handleVisibleSidebar);
    myMap.geoObjects.add(myPlacemark);
  }, [ymaps]);

  return (
    <div ref={mapRef} className={styles.map}>
      <Sidebar visible={visibleSidebar} handleVisible={handleVisibleSidebar} />
    </div>
  );
};

export default YandexMap;
