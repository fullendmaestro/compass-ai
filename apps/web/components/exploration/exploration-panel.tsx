"use client";

import { useState } from "react";
import { Input } from "@compass/ui/components/input";
import { Button } from "@compass/ui/components/button";
import { Search, MapPin, Navigation, Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@compass/ui/components/card";

export function ExplorationPanel() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="absolute top-4 left-4 z-[1000] w-96 max-w-[calc(100vw-2rem)]">
      <Card className="shadow-xl backdrop-blur-sm bg-card/95">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Navigation className="w-5 h-5 text-primary" />
            Explore the World
          </CardTitle>
          <CardDescription>
            Search for places, get directions, or discover nearby
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search locations, cities, landmarks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Quick Actions */}
          <div className="space-y-2">
            <p className="text-sm font-medium">Quick Actions</p>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" size="sm" className="justify-start">
                <MapPin className="w-4 h-4 mr-2" />
                Nearby
              </Button>
              <Button variant="outline" size="sm" className="justify-start">
                <Star className="w-4 h-4 mr-2" />
                Saved
              </Button>
            </div>
          </div>

          {/* Suggestions */}
          <div className="space-y-2">
            <p className="text-sm font-medium">Popular Destinations</p>
            <div className="space-y-1">
              {[
                { name: "Paris, France", type: "City" },
                { name: "Tokyo, Japan", type: "City" },
                { name: "New York, USA", type: "City" },
              ].map((place, idx) => (
                <button
                  key={idx}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-accent transition-colors text-sm"
                >
                  <div className="font-medium">{place.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {place.type}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
