import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import { house } from "./data/house";
import { mrt } from "./data/mrt";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZG9yb3RoeWNoYXUiLCJhIjoiY2w0Y2IxMTVnMGJqcDNjbzJmMHh0cDJ5NSJ9.B3U7SQ1E1-DqehJ30Odsag";

export default function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(121.55);
  const [lat, setLat] = useState(25.05);
  const [zoom, setZoom] = useState(11);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });

    for (let i = 0; i < mrt.length; i++) {
      const el = document.createElement("div");
      const width = 50;
      const height = 50;
      el.className = "marker";
      const marker1 = new mapboxgl.Marker(el)
        .setLngLat([mrt[i][3], mrt[i][4]])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(`<h3>捷運站</h3><p>` + mrt[i][1] + `</p>`)
        )
        .addTo(map.current);
    }

    for (let i = 0; i < house.length; i++) {
      const el = document.createElement("div");
      const width = 50;
      const height = 50;
      el.className = house[i][4];
      const marker1 = new mapboxgl.Marker(el)
        .setLngLat([house[i][1], house[i][2]])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(`<h3>社會住宅</h3><p>` + house[i][0] + `</p>`)
        )
        .addTo(map.current);
    }
  }, []);

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
      <h1>社會住宅旁到底有沒有捷運？？</h1>
      <div id="state-legend" class="legend">
        <h4>社會住宅興建進度</h4>
        <div>
          <span style={{ backgroundColor: "green" }}></span>已完工
        </div>
        <div>
          <span style={{ backgroundColor: "#f3f14f" }}></span>施工中及待開工
        </div>
        <div>
          <span style={{ backgroundColor: "#b40219" }}></span>規劃中
        </div>
      </div>
    </div>
  );
}
