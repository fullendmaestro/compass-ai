"use client";
import dynamic from "next/dynamic";

// Disable server-side rendering for the MapCanvas component, this
// is because Leaflet is not compatible with server-side rendering
//
// https://github.com/PaulLeCam/react-leaflet/issues/45
let MapCanvas: any;
MapCanvas = dynamic(
  () =>
    import("@/components/MapCanvas").then((module: any) => module.MapCanvas),
  {
    ssr: false,
  }
);

export default function Page() {
  return (
    <main className="h-screen w-screen">
      <MapCanvas />
    </main>
  );
}
