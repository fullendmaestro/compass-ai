import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import { useEffect, useState, useRef } from "react";
import { Map, divIcon } from "leaflet";
import { cn } from "@compass/ui/lib/utils";

export type MapCanvasProps = {
  className?: string;
};

export function MapCanvas({ className }: MapCanvasProps) {
  const [map, setMap] = useState<Map | null>(null);

  return (
    <div className="">
      <MapContainer
        className={cn("w-screen h-screen", className)}
        style={{ zIndex: 0 }}
        center={[0, 0]}
        zoom={1}
        zoomAnimationThreshold={100}
        zoomControl={false}
        ref={setMap}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
}
