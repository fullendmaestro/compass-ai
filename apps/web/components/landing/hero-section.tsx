"use client";

import { Button } from "@compass/ui/components/button";
import { Compass, Sparkles, MapPin } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background -z-10" />

      {/* Animated compass rose decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 left-20 opacity-10 animate-spin-slow">
          <Compass className="w-64 h-64 text-primary" />
        </div>
        <div className="absolute bottom-20 right-20 opacity-10 animate-spin-slower">
          <Compass className="w-96 h-96 text-accent" />
        </div>
      </div>

      <div className="container px-4 mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo/Icon */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <div className="relative bg-gradient-to-br from-primary to-accent p-4 rounded-2xl shadow-2xl">
              <Compass className="w-16 h-16 text-primary-foreground" />
            </div>
          </div>

          {/* Headline */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Navigate the World
              <br />
              <span className="text-foreground">with AI Precision</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Your personal AI assistant for geographic exploration. Discover
              new places, plan adventures, and navigate with intelligent
              insights.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link href="/home">
              <Button
                size="lg"
                className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Start Exploring
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Learn More
            </Button>
          </div>

          {/* Stats or badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 w-full max-w-3xl">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">AI-Powered</div>
              <div className="text-sm text-muted-foreground">
                Intelligent Insights
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">Real-time</div>
              <div className="text-sm text-muted-foreground">
                Interactive Maps
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">
                Personalized
              </div>
              <div className="text-sm text-muted-foreground">
                Your Preferences
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
