"use client";
import { motion } from "framer-motion";
import { HeroHighlight } from "./ui/hero-highlight";
import HeroSection from "./HeroSection";

function MouseEffect() {
  return (
    <HeroHighlight className=" min-h-screen w-full ">
      {/* <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl h-full lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        <h1 className=" text-4xl">Hello</h1>
      </motion.h1> */}
      <div className=" mt-10">
        <HeroSection />
      </div>
    </HeroHighlight>
  );
}

export default MouseEffect;
