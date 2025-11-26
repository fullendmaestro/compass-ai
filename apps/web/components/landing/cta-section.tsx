"use client";

import { Button } from "@compass/ui/components/button";
import { Compass, ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-accent to-primary p-1">
          <div className="bg-card rounded-3xl p-12 md:p-16">
            <div className="flex flex-col items-center text-center space-y-8">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <Compass className="w-10 h-10 text-primary animate-pulse" />
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold">
                  Ready to Start Your Journey?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Join thousands of explorers using Compass AI to discover
                  amazing places and create unforgettable memories around the
                  world.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/home">
                  <Button size="lg" className="text-lg px-8 py-6 shadow-xl">
                    Get Started Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-2"
                >
                  View Demo
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  Free to use
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  No credit card required
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  Privacy first
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
