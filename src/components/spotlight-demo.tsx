import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import NoiseBackgroundDemo from "./noise-background-demo";

export default function SpotlightPreview() {
  return (
    <div className="relative flex h-screen w-full overflow-hidden bg-black/96 antialiased md:items-center md:justify-center">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-size-[40px_40px] select-none",
          "bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        <h1 className="bg-opacity-50 bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-3xl font-bold text-transparent md:text-7xl">
       Agency CRM <br /> 
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-center text-base font-normal text-neutral-300">
          Turn Every Lead Into a Lasting Customer. Manage leads, automate follow-ups, track your sales pipeline, and build stronger customer relationships—all from one powerful CRM workspace.
        </p>
        <NoiseBackgroundDemo />
      </div>
    </div>
  );
}
