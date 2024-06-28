"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { Highlight } from "../ui/hero-highlight";
import { FlipWords } from "../ui/flip-words";
import { motion } from "framer-motion";
import { HeroParagraph } from "./HeroParagraph";
import MyImg from "../../../public/myimg.png";

import { HeroButton } from "./HeroButton";
import Image from "next/image";

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
      <div className=" flex flex-col-reverse md:flex-row lg:flex-row  w-full  h-full relative md:pl-5 pl-0 lg:pl-10 lg:py-20 md:py-10 py-24  ">
        <div className=" p-4 relative flex items-center pt-20  z-10  w-full ">
          <div className=" flex flex-col  lg:gap-5 gap-3  ">
            <motion.div
              initial={{ x: "-500%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1 }}
              className=" relative"
            >
              <div className="w-40 h-2 animate-glow absolute rounded-2xl -top-10 bg-white/[0.5]"></div>{" "}
              <Highlight className="text-black font-montserrat  uppercase dark:glow overflow-hidden whitespace-nowrap text-2xl text-bold md:text-4xl lg:text-[4rem] dark:shadow-purple-500  dark:text-[#fff]">
                Saifullah Al Rafi
              </Highlight>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className=" flex  items-center"
            >
              <div className="text-4xl font-normal text-neutral-600 dark:text-neutral-400">
                <FlipWords words={words} /> <br />
              </div>
            </motion.div>
            <motion.div
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              transition={{
                duration: 1,
                delay: 2,
              }}
              className=" text-black dark:text-white w-80"
            >
              <HeroParagraph words=" I am a Web Developer with experience in the MERN stack (MongoDB, Express.js, React, and Node.js)." />
            </motion.div>
            <motion.div>
              <HeroButton></HeroButton>
            </motion.div>
          </div>
        </div>
        <div className=" w-full h-full flex flex-col gap-4 self-end justify-center items-center text-center p-4">
          <motion.div
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className=" flex justify-center text-black dark:text-white w-80"
          >
            <Image
              className=" px-4 pt-2 border-2 rounded-3xl"
              height={300}
              src={MyImg}
              alt="Portfolio Image"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className=" text-black dark:text-white w-80"
          >
            <h2 className=" uppercase tracking-widest ">Frontend Developer</h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
