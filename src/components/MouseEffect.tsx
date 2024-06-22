"use client";
import { motion } from "framer-motion";
import { HeroHighlight } from "./ui/hero-highlight";
import HeroSection from "./HeroSection";

function MouseEffect() {
  return (
    <HeroHighlight className=" h-[770px]  lg:min-h-screen w-full ">
      <div className=" h-[calc(100vh-2.5rem)] mt-10">
        <HeroSection />
      </div>
    </HeroHighlight>
  );
}

export default MouseEffect;
