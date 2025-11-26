"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect, useState, useRef } from "react";
import { Map, LatLng, divIcon } from "leaflet";
import { cn } from "@compass/ui/lib/utils";
import { MapControls } from "./exploration/map-controls";

export type MapCanvasProps = {
  className?: string;
};

// Component to handle map controls programmatically
function MapController({
  centerPosition,
  zoomLevel,
}: {
  centerPosition?: LatLng;
  zoomLevel?: number;
}) {
  const map = useMap();

  useEffect(() => {
    if (centerPosition) {
      map.flyTo(centerPosition, zoomLevel || map.getZoom(), {
        duration: 1.5,
      });
    }
  }, [centerPosition, zoomLevel, map]);

  return null;
}

export function MapCanvas({ className }: MapCanvasProps) {
  const [map, setMap] = useState<Map | null>(null);
  const [centerPosition, setCenterPosition] = useState<LatLng | undefined>();
  const [zoomLevel, setZoomLevel] = useState<number>(2);
  const [userLocation, setUserLocation] = useState<LatLng | null>(null);

  // Sample markers for popular destinations
  const popularPlaces = [
    {
      position: [48.8566, 2.3522] as [number, number],
      name: "Paris",
      country: "France",
    },
    {
      position: [35.6762, 139.6503] as [number, number],
      name: "Tokyo",
      country: "Japan",
    },
    {
      position: [40.7128, -74.006] as [number, number],
      name: "New York",
      country: "USA",
    },
    {
      position: [51.5074, -0.1278] as [number, number],
      name: "London",
      country: "UK",
    },
    {
      position: [-33.8688, 151.2093] as [number, number],
      name: "Sydney",
      country: "Australia",
    },
  ];

  const handleZoomIn = () => {
    if (map) {
      map.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (map) {
      map.zoomOut();
    }
  };

  const handleLocate = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = new LatLng(
            position.coords.latitude,
            position.coords.longitude
          );
          setUserLocation(pos);
          setCenterPosition(pos);
          setZoomLevel(13);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  };

  const handleRecenter = () => {
    setCenterPosition(new LatLng(0, 0));
    setZoomLevel(2);
  };

  const handleToggleLayers = () => {
    // Placeholder for layer switching functionality
    console.log("Toggle layers");
  };

  return (
    <div className="relative w-screen h-screen">
      <MapContainer
        className={cn("w-full h-full", className)}
        style={{ zIndex: 0 }}
        center={[20, 0]}
        zoom={2}
        zoomAnimationThreshold={100}
        zoomControl={false}
        ref={setMap}
      >
        <MapController centerPosition={centerPosition} zoomLevel={zoomLevel} />

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Popular destination markers */}
        {popularPlaces.map((place, idx) => (
          <Marker key={idx} position={place.position}>
            <Popup>
              <div className="text-center">
                <h3 className="font-bold">{place.name}</h3>
                <p className="text-sm text-muted-foreground">{place.country}</p>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* User location marker */}
        {userLocation && (
          <Marker position={userLocation}>
            <Popup>
              <div className="text-center">
                <h3 className="font-bold">Your Location</h3>
              </div>
            </Popup>
          </Marker>
        )}
      </MapContainer>

      <MapControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onLocate={handleLocate}
        onRecenter={handleRecenter}
        onToggleLayers={handleToggleLayers}
      />
    </div>
  );
}
