"use client";

import { Button } from "@compass/ui/components/button";
import {
  ZoomIn,
  ZoomOut,
  Locate,
  Layers,
  Compass as CompassIcon,
} from "lucide-react";
import { Card } from "@compass/ui/components/card";

interface MapControlsProps {
  onZoomIn?: () => void;
  onZoomOut?: () => void;
  onLocate?: () => void;
  onToggleLayers?: () => void;
  onRecenter?: () => void;
}

export function MapControls({
  onZoomIn,
  onZoomOut,
  onLocate,
  onToggleLayers,
  onRecenter,
}: MapControlsProps) {
  return (
    <div className="absolute bottom-4 right-4 z-[1000] flex flex-col gap-2">
      {/* Main controls */}
      <Card className="p-2 shadow-lg backdrop-blur-sm bg-card/95">
        <div className="flex flex-col gap-1">
          <Button
            size="icon"
            variant="ghost"
            onClick={onZoomIn}
            title="Zoom In"
            className="hover:bg-accent"
          >
            <ZoomIn className="w-4 h-4" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            onClick={onZoomOut}
            title="Zoom Out"
            className="hover:bg-accent"
          >
            <ZoomOut className="w-4 h-4" />
          </Button>
          <div className="h-px bg-border my-1" />
          <Button
            size="icon"
            variant="ghost"
            onClick={onLocate}
            title="My Location"
            className="hover:bg-accent"
          >
            <Locate className="w-4 h-4" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            onClick={onRecenter}
            title="Recenter Map"
            className="hover:bg-accent"
          >
            <CompassIcon className="w-4 h-4" />
          </Button>
          <div className="h-px bg-border my-1" />
          <Button
            size="icon"
            variant="ghost"
            onClick={onToggleLayers}
            title="Map Layers"
            className="hover:bg-accent"
          >
            <Layers className="w-4 h-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
}
