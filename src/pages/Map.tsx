import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";

export default function MapLibreMap() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    async function loadMap() {
      const response = await fetch(
        "https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json"
      );
      const styleJson = await response.json();

      if (styleJson.layers) {
        const waterLayer = styleJson.layers.find((l: any) => l.id === "water");
        if (waterLayer && waterLayer.paint) {
          waterLayer.paint["fill-color"] = "black";
        }
      }

      mapRef.current = new maplibregl.Map({
        container: mapContainerRef.current!,
        style: styleJson,
        center: [0, 20],
        zoom: 1,
        minZoom: 1,
        attributionControl: false,
        dragRotate: false,
        renderWorldCopies: false,
      });

      mapRef.current.on("load", () => {
        mapRef.current?.setMaxBounds([
          [-179, -80],
          [179, 80],
        ]);
      });
    }

    loadMap();

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  return (
    <div>
      <div
        ref={mapContainerRef}
        className="w-full h-[500px] rounded-none overflow-hidden"
      />
    </div>
  );
}
