"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { Highlight } from "../ui/hero-highlight";
import { FlipWords } from "../ui/flip-words";
import { motion } from "framer-motion";

export function SparklesPreview() {
  const words = [
    "Javascript",
    "Next",
    "Typescript",
    "React",
    "Node",
    " Express",
    "Mongo DB",
  ];
  return (
    <div className=" min-h-screen absolute top-0 left-0 w-full  flex flex-col items-center justify-center  rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className=" flex flex-col md:flex-row lg:flex-row  w-full  h-full relative  lg:py-20 md:py-10  ">
        <div className=" p-4 relative  z-10  w-full ">
          <div className=" flex flex-col  lg:gap-5 gap-3  ">
            <div></div>

            <motion.div
              initial={{ x: "-500%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1 }}
              className=" relative"
            >
              <div className="w-40 h-2 animate-glow absolute rounded-2xl -top-10 bg-white"></div>{" "}
              <Highlight className="text-black font-montserrat  uppercase dark:glow overflow-hidden whitespace-nowrap text-2xl text-bold md:text-4xl lg:text-[4rem] dark:shadow-purple-500  dark:text-[#fff]">
                Saifullah Al Rafi
              </Highlight>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              className=" flex  items-center"
            >
              <div className="text-4xl font-normal text-neutral-600 dark:text-neutral-400">
                <FlipWords words={words} /> <br />
              </div>
            </motion.div>
          </div>
        </div>
        <div className=" w-full text-center p-4">
          <h1 className=" text-white"> Image</h1>
        </div>
      </div>
    </div>
  );
}
