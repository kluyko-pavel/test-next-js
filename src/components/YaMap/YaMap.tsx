"use client";
import styles from "./YaMap.module.scss";
import { Placemark, YMaps, Map } from "@pbe/react-yandex-maps";

export const YaMap = () => {
  return (
    <div className={styles.mapWrapper}>
      <YMaps>
        <Map
          className={styles.map}
          defaultState={{ center: [53.902284, 27.561831], zoom: 15 }}
        >
          <Placemark geometry={[53.902284, 27.561831]} />
        </Map>
      </YMaps>
    </div>
  );
};
