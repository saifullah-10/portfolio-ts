"use client";
import React, { useContext, useEffect, useRef } from "react";

import {
  AnimatePresence,
  motion,
  useAnimationControls,
  useInView,
} from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { Progress } from "../uiFiles/Progress";
import Context, { MainContext } from "@/Context/Context";
import "./bg.css";
import useResponsiveDelay from "@/utils/delay";

export function BG() {
  const pathData =
    "M618.5,126.68V798.32c0,6.7-5.48,12.18-12.18,12.18H12.68c-6.7,0-12.18-5.48-12.18-12.18V126.68c0-6.7,5.48-12.18,12.18-12.18H269.87c.05,0,.09-.06,.14-.06,11.49,0,9.49-13.93,9.49-22.94,0-6.33,1-17.91-5.14-17.91-.07,0-.1-.09-.16-.09h-126.39c-19.93,0-36.79-15.64-37.3-35.57-.26-10.41,3.88-19.89,10.71-26.71,6.62-6.62,15.74-10.72,25.78-10.72H471.19c19.93,0,36.79,15.64,37.3,35.57,.26,10.41-3.88,19.89-10.71,26.71-6.62,6.62-15.74,10.72-25.78,10.72h-127.2c-.07,0-.1,.09-.16,.09-6.14,0-4.64,12.57-4.64,18.91,0,9.01-2.5,21.94,8.99,21.94,.05,0,.09,.06,.14,.06h257.18c6.7,0,12.18,5.48,12.18,12.18Z";
  const [hovered, setHovered] = React.useState(false);
  const context = useContext(MainContext);
  if (!context) {
    throw new Error("MainContext");
  }
  const progress = context.progress;

  // const mainControls = useAnimationControls();
  // const expertRef = useRef(null);
  // const comfortableRef = useRef(null);
  const familiarRef = useRef(null);
  // const expertInView = useInView(expertRef);
  // const comfortableInView = useInView(comfortableRef);
  const familiarInView = useInView(familiarRef);
  // // console.log(comfortableInView);
  const { delayResponsive } = useResponsiveDelay();
  console.log(delayResponsive);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="min-h-screen overflow-hidden items-center justify-center  w-full gap-4 mx-auto px-8 relative"
    >
      {/* <Progress value={80} /> */}
      <div className=" w-full my-10">
        <h1 className=" uppercase py-10 relative z-10 traking-wideset  md:text-3xl text-xl lg:text-4xl drop-shadow-skillGlow text-center">
          Skills
        </h1>
      </div>
      <motion.div
        className={`  flex gap-6 flex-col lg:flex-row  relative w-full h-[calc(100%-100px)] z-10`}
      >
        <div className=" flex-1">
          <motion.div
            // style={{
            //   transform: expertInView ? "translateX(0px)" : "translateX(-100px)",
            //   opacity: expertInView ? 1 : 0,
            //   transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            // }}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ margin: "-200px" }}
            transition={{ duration: 1 }}
            className={`  ease-custom-bezier md:h-[80%] h-full  lg:h-[80%] relative`}
          >
            <motion.svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 619 811"
              className="w-full h-full overflow-visible"
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
            <div className="flex w-[70%] left-1/2 -translate-x-[50%] h-full flex-col justify-center items-center absolute top-0">
              <div className=" text-white text-lg lg:text-2xl uppercase  mt-1">
                Expart
              </div>
              <div className="flex w-full mt-8 h-full justify-center items-center">
                <div className=" w-full uppercase    text-white">
                  <div>
                    <h1 className="mb-1">Javascript</h1>
                    <Progress time={1000} value={80} />
                  </div>
                  <div>
                    <h1 className="mb-1">React</h1>
                    <Progress time={1000} value={80} />
                  </div>
                  <div>
                    <h1 className="mb-1">Tailwind Css</h1>
                    <Progress time={1000} value={90} />
                  </div>
                  <div>
                    <h1 className="mb-1">Css</h1>
                    <Progress time={1000} value={90} />
                  </div>
                  <div>
                    <h1 className="mb-1">HTML</h1>
                    <Progress time={1000} value={90} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex-1">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{
              margin: "-200px",
            }}
            transition={{
              duration: 0.8,
              delay:
                delayResponsive === "lg" || delayResponsive === "md" ? 0.5 : 0,
            }}
            className={` ease-custom-bezier  md:h-[80%]  lg:h-[80%] h-full relative`}
          >
            <motion.svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 619 811"
              className=" w-full h-full overflow-visible"
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
            <div className="flex w-[70%] left-1/2  -translate-x-[50%] h-full flex-col justify-center items-center absolute top-0">
              <div className=" text-white text-lg lg:text-2xl uppercase  mt-1">
                Comfortable
              </div>
              <div className="flex w-full mt-10 h-full justify-center items-center">
                <div className=" w-full uppercase text-white">
                  <div>
                    <h1 className="mb-1">Node Js</h1>
                    <Progress time={1000} value={60} />
                  </div>
                  <div>
                    <h1 className="mb-1">Express Js</h1>
                    <Progress time={1000} value={70} />
                  </div>
                  <div>
                    <h1 className="mb-1">Mongo DB</h1>
                    <Progress time={1000} value={60} />
                  </div>
                  <div>
                    <h1 className="mb-1">Git & Github</h1>
                    <Progress time={1000} value={70} />
                  </div>
                  <div>
                    <h1 className="mb-1">NPM</h1>
                    <Progress time={1000} value={80} />
                  </div>
                  <div>
                    <h1 className="mb-1">Yarn</h1>
                    <Progress time={1000} value={80} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className=" flex-1">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ margin: "-200px" }}
            transition={{
              duration: 0.8,
              delay:
                delayResponsive === "lg" || delayResponsive === "md" ? 1 : 0,
            }}
            className={` ease-custom-bezier  h-full lg:h-[80%] md:h-[80%] relative`}
          >
            <motion.svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 619 811"
              className=" w-full h-full overflow-visible"
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
            <div className="flex  w-[70%] left-1/2 -translate-x-[50%] h-full flex-col justify-center items-center absolute top-0 ">
              <div className=" text-white text-lg lg:text-2xl uppercase  mt-1">
                Familiar
              </div>
              <div className="flex w-full mt-8  h-full justify-center items-center">
                <div className=" w-full uppercase text-white">
                  <div>
                    <h1 className="mb-1">Typescript</h1>
                    <Progress time={1000} value={60} />
                  </div>
                  <div>
                    <h1 className="mb-1">Redux</h1>
                    <Progress time={1000} value={70} />
                  </div>
                  <div>
                    <h1 className="mb-1">Framer Motion</h1>
                    <Progress time={1000} value={60} />
                  </div>
                  <div>
                    <h1 className="mb-1">GSAP</h1>
                    <Progress time={1000} value={50} />
                  </div>
                  <div>
                    <h1 className="mb-1">Next Js</h1>
                    <Progress time={1000} value={70} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

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
    </motion.div>
  );
}
