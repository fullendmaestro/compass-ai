"use client";
import dynamic from "next/dynamic";
import { ExplorationPanel } from "@/components/exploration/exploration-panel";
import { ExplorationHeader } from "@/components/exploration/exploration-header";

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
    <main className="relative h-screen w-screen overflow-hidden">
      <MapCanvas />
      <ExplorationPanel />
      <ExplorationHeader />
    </main>
  );
}
