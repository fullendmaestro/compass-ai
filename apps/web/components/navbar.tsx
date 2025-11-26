"use client";

import { Button } from "@compass/ui/components/button";
import { Compass, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="bg-gradient-to-br from-primary to-accent p-2 rounded-lg">
            <Compass className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">Compass AI</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/home">
            <Button variant="ghost">Explore</Button>
          </Link>

          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}
