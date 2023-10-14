import React from "react";
import { useYMaps } from "@pbe/react-yandex-maps";

import styles from "./styles.module.css";

const YandexMap = () => {
  const mapRef = React.useRef(null);
  const ymaps = useYMaps(["Map", "Placemark"]);

  React.useEffect(() => {
    if (!ymaps || !mapRef.current) {
      return;
    }

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

    myMap.geoObjects.add(myPlacemark);
  }, [ymaps]);

  return <div ref={mapRef} className={styles.map} />;
};

export default YandexMap;
