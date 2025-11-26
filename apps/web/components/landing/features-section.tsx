"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@compass/ui/components/card";
import {
  MapPin,
  Navigation,
  Search,
  Brain,
  Globe,
  Zap,
  Star,
  TrendingUp,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description:
      "Get intelligent recommendations based on your preferences and travel history. Our AI learns what you love.",
  },
  {
    icon: Navigation,
    title: "Smart Navigation",
    description:
      "Find the best routes, avoid crowds, and discover hidden gems with our advanced pathfinding algorithms.",
  },
  {
    icon: Search,
    title: "Semantic Search",
    description:
      "Search for places naturally. Ask questions like 'cozy cafes near me' and get perfect results.",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description:
      "Explore every corner of the world with comprehensive map data and location information.",
  },
  {
    icon: Star,
    title: "Personalized Experience",
    description:
      "Tailored recommendations that match your interests, from adventure to relaxation.",
  },
  {
    icon: Zap,
    title: "Real-time Updates",
    description:
      "Stay informed with live traffic, weather, and local events affecting your journey.",
  },
  {
    icon: TrendingUp,
    title: "Trending Destinations",
    description:
      "Discover what's popular now and find exciting new places before everyone else.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description:
      "Your data is yours. We prioritize your privacy while delivering exceptional experiences.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Everything You Need to Explore
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to make your geographic adventures
            seamless and delightful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
