"use client";
import React, { useContext } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { Progress } from "../uiFiles/Progress";
import Context, { MainContext } from "@/Context/Context";
import "./bg.css";

export function BG() {
  const pathData =
    "M618.5,126.68V798.32c0,6.7-5.48,12.18-12.18,12.18H12.68c-6.7,0-12.18-5.48-12.18-12.18V126.68c0-6.7,5.48-12.18,12.18-12.18H269.87c.05,0,.09-.06,.14-.06,11.49,0,9.49-13.93,9.49-22.94,0-6.33,1-17.91-5.14-17.91-.07,0-.1-.09-.16-.09h-126.39c-19.93,0-36.79-15.64-37.3-35.57-.26-10.41,3.88-19.89,10.71-26.71,6.62-6.62,15.74-10.72,25.78-10.72H471.19c19.93,0,36.79,15.64,37.3,35.57,.26,10.41-3.88,19.89-10.71,26.71-6.62,6.62-15.74,10.72-25.78,10.72h-127.2c-.07,0-.1,.09-.16,.09-6.14,0-4.64,12.57-4.64,18.91,0,9.01-2.5,21.94,8.99,21.94,.05,0,.09,.06,.14,.06h257.18c6.7,0,12.18,5.48,12.18,12.18Z";
  const [hovered, setHovered] = React.useState(false);
  const context = useContext(MainContext);
  if (!context) {
    throw new Error("MainContext");
  }
  const progress = context.progress;
  console.log(progress);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="min-h-screen flex md:flex-row flex-col lg:flex-row overflow-hidden items-center justify-center  w-full gap-4 mx-auto px-8 relative"
    >
      {/* <p className="md:text-2xl text-2xl font-medium text-center text-white relative z-20 max-w-2xl mx-auto">
        With insomnia, nothing&apos;s real. Everything is far away. Everything
        is a copy, of a copy, of a copy
      </p> */}

      {/* <Progress value={80} /> */}

      <div className=" flex gap-6 w-full h-full relative z-10 ">
        <div className="w-full flex-1 relative">
          <motion.svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 619 811"
            className=" overflow-visible"
          >
            <path
              id="blob-path"
              d={pathData}
              className="glowing-stroke "
              style={{
                fill: "none",
                stroke: "#fff",
                strokeWidth: 3,
                strokeMiterlimit: 10,
              }}
            />
            <motion.circle
              className="glowing-particle"
              cx="1"
              cy="4"
              r="5"
              fill="#ff0000"
              stroke="#ff0000"
              strokeWidth="2"
              initial={false}
              animate={{
                pathLength: [0, 1],
                transition: {
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {" "}
              <animateMotion
                repeatCount="indefinite"
                dur="10s"
                path={pathData}
              />
            </motion.circle>
          </motion.svg>
          <div className="flex w-full h-full flex-col justify-center items-center absolute top-0 left-0">
            <div className=" text-white text-4xl uppercase  mt-2">Expart</div>
            <div className="flex w-full h-full justify-center items-center">
              <div className=" text-white">body</div>
            </div>
          </div>
        </div>
        <div className="w-full flex-1 relative">
          <motion.svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 619 811"
            className=" overflow-visible"
          >
            <path
              id="blob-path"
              d={pathData}
              className="glowing-stroke "
              style={{
                fill: "none",
                stroke: "#fff",
                strokeWidth: 3,
                strokeMiterlimit: 10,
              }}
            />
            <motion.circle
              className="glowing-particle"
              cx="1"
              cy="4"
              r="5"
              fill="#ff0000"
              stroke="#ff0000"
              strokeWidth="2"
              initial={false}
              animate={{
                pathLength: [0, 1],
                transition: {
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {" "}
              <animateMotion
                repeatCount="indefinite"
                dur="10s"
                path={pathData}
              />
            </motion.circle>
          </motion.svg>
          <div className="flex w-full h-full flex-col justify-center items-center absolute top-0 left-0">
            <div className=" text-white text-4xl uppercase  mt-2">Expart</div>
            <div className="flex w-full h-full justify-center items-center">
              <div className=" text-white">body</div>
            </div>
          </div>
        </div>
        <div className="w-full flex-1 relative">
          <motion.svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 619 811"
            className=" overflow-visible"
          >
            <path
              id="blob-path"
              d={pathData}
              className="glowing-stroke "
              style={{
                fill: "none",
                stroke: "#fff",
                strokeWidth: 3,
                strokeMiterlimit: 10,
              }}
            />
            <motion.circle
              className="glowing-particle"
              cx="1"
              cy="4"
              r="5"
              fill="#ff0000"
              stroke="#ff0000"
              strokeWidth="2"
              initial={false}
              animate={{
                pathLength: [0, 1],
                transition: {
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {" "}
              <animateMotion
                repeatCount="indefinite"
                dur="10s"
                path={pathData}
              />
            </motion.circle>
          </motion.svg>
          <div className="flex w-full h-full flex-col justify-center items-center absolute top-0 left-0">
            <div className=" text-white text-4xl uppercase  mt-2">Expart</div>
            <div className="flex w-full h-full justify-center items-center">
              <div className=" text-white">body</div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-transparent"
              colors={[
                [59, 130, 246],
                [139, 92, 246],
              ]}
              opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
              dotSize={3}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Radial gradient for the cute fade */}
      <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
    </div>
  );
}
