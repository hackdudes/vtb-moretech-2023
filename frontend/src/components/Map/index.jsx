import React from "react";
import { useYMaps } from "@pbe/react-yandex-maps";

import Sidebar from "../Sidebar";

import styles from "./styles.module.css";

const data = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      id: 0,
      geometry: { type: "Point", coordinates: [55.831903, 37.411961] },
    },
    {
      type: "Feature",
      id: 1,
      geometry: { type: "Point", coordinates: [55.763338, 37.565466] },
    },
    {
      type: "Feature",
      id: 2,
      geometry: { type: "Point", coordinates: [55.6256, 37.7631] },
    },
    {
      type: "Feature",
      id: 3,
      geometry: { type: "Point", coordinates: [55.744522, 37.616378] },
    },
    {
      type: "Feature",
      id: 4,
      geometry: { type: "Point", coordinates: [55.780898, 37.642889] },
    },
    {
      type: "Feature",
      id: 5,
      geometry: { type: "Point", coordinates: [55.793559, 37.435983] },
    },
    {
      type: "Feature",
      id: 6,
      geometry: { type: "Point", coordinates: [55.800584, 37.675638] },
    },
    {
      type: "Feature",
      id: 7,
      geometry: { type: "Point", coordinates: [55.716733, 37.589988] },
    },
    {
      type: "Feature",
      id: 8,
      geometry: { type: "Point", coordinates: [55.775724, 37.56084] },
    },
    {
      type: "Feature",
      id: 9,
      geometry: { type: "Point", coordinates: [55.822144, 37.433781] },
    },
    {
      type: "Feature",
      id: 10,
      geometry: { type: "Point", coordinates: [55.87417, 37.669838] },
    },
  ],
};

const YandexMap = () => {
  const [visibleSidebar, setVisibleSidebar] = React.useState(false);

  const mapRef = React.useRef(null);
  const ymaps = useYMaps([
    "Map",
    "Placemark",
    "templateLayoutFactory",
    "control.ZoomControl",
    "control.GeolocationControl",
    "Layer",
    "ObjectManager",
    "option.presetStorage",
  ]);

  const handleVisibleSidebar = () => {
    setVisibleSidebar(!visibleSidebar);
  };

  React.useEffect(() => {
    if (!ymaps || !mapRef.current) {
      return;
    }

    const myMap = new ymaps.Map(mapRef.current, {
      center: [55.751574, 37.573856],
      zoom: 9,
    });

    // ZoomControl
    const ZoomLayout = ymaps.templateLayoutFactory.createClass(
      `<div class=${styles.zoomControl}>
        <div id='zoom-in' class=${styles.control}><img src="/assets/svg/plus.svg" alt="plus" /></div>
        <div id='zoom-out' class=${styles.control}><img src="/assets/svg/minus.svg" alt="minus" /></div>
      </div>`,
      {
        build: function () {
          ZoomLayout.superclass.build.call(this);

          this.zoomInCallback = this.zoomIn.bind(this);
          this.zoomOutCallback = this.zoomOut.bind(this);

          document
            .querySelector("#zoom-in")
            .addEventListener("click", this.zoomInCallback);

          document
            .querySelector("#zoom-out")
            .addEventListener("click", this.zoomOutCallback);
        },

        clear: function () {
          document
            .querySelector("#zoom-in")
            .removeEventListener("click", this.zoomInCallback);

          document
            .querySelector("#zoom-out")
            .removeEventListener("click", this.zoomOutCallback);

          ZoomLayout.superclass.clear.call(this);
        },

        zoomIn: function () {
          let map = this.getData().control.getMap();

          map.setZoom(map.getZoom() + 1, { checkZoomRange: true });
        },

        zoomOut: function () {
          let map = this.getData().control.getMap();
          map.setZoom(map.getZoom() - 1, { checkZoomRange: true });
        },
      }
    );

    const zoomControl = new ymaps.control.ZoomControl({
      options: { layout: ZoomLayout, position: { left: 0 } },
    });

    myMap.controls.add(zoomControl);

    // GeoControl
    const customGeolocationLayout = ymaps.templateLayoutFactory.createClass(
      `<div class="${styles.geoControl} ${styles.control}"><img src="/assets/svg/geo.svg" alt="geo" /></div>`
    );

    const geolocationControl = new ymaps.control.GeolocationControl({
      options: { layout: customGeolocationLayout },
    });

    myMap.controls.add(geolocationControl);

    // Theme
    const userMedia = window.matchMedia("(prefers-color-scheme: light)");
    const layer = `https://core-renderer-tiles.maps.yandex.net/tiles?l=map${
      userMedia.matches ? "" : "&theme=dark"
    }&%c&%l`;

    myMap.layers.add(new ymaps.Layer(layer));

    // Clusters
    const customClusterLayout = ymaps.templateLayoutFactory.createClass(
      `<div class=${styles.cluster}><span>{{ properties.geoObjects.length }}</span></div>`
    );

    const objectManager = new ymaps.ObjectManager({
      clusterize: true,
      gridSize: 32,
      clusterDisableClickZoom: false,
      clusterIconLayout: customClusterLayout,
    });

    ymaps.option.presetStorage.add("1#icon", {
      iconImageHref: "/assets/svg/vtb.svg",
      iconImageSize: [30, 30],
      iconLayout: "default#image",
    });

    objectManager.objects.options.set("preset", "1#icon");

    myMap.geoObjects.add(objectManager);

    objectManager.add(data);
  }, [ymaps]);

  return (
    <div ref={mapRef} className={styles.map}>
      <Sidebar visible={visibleSidebar} handleVisible={handleVisibleSidebar} />
    </div>
  );
};

export default YandexMap;
