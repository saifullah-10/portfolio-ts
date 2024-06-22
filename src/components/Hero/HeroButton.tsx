"use client";
import React from "react";
import { Button } from "../ui/moving-border";
import { motion } from "framer-motion";

export function HeroButton() {
  return (
    <div className=" flex gap-3">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 2.4,
        }}
        className=" flex"
      >
        <Button className="bg-white rounded-full dark:bg-black/15 text-black dark:text-white border-neutral-200 dark:border-slate-800">
          My Resume
        </Button>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 2.6,
        }}
        className=" flex"
      >
        <Button
          duration={5000}
          className="bg-white rounded-full dark:bg-black/15 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          Hire Me
        </Button>
      </motion.div>
    </div>
  );
}
