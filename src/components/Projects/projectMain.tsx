import React from "react";
import ProjectCard from "./ProjectCard";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export default function ProjectMain() {
  return (
    <div className="">
      <div className=" w-full flex justify-center   my-10">
        <div className="bg-black  inline-block animate-navGlow rounded-tr-[3rem] rounded-bl-[3rem] relative z-10 h-20   mx-auto">
          <h1 className="  uppercase py-5 px-5 traking-wideset  md:text-3xl text-xl lg:text-4xl text-center">
            Projects
          </h1>
        </div>
      </div>
      <div className="mx-auto lg:w-[90%] w-5/6">
        <ProjectCard />
      </div>
      <div className=" mt-8 flex justify-center text-center">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        >
          <span>More Projects → </span>
        </HoverBorderGradient>
      </div>
    </div>
  );
}

const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-black dark:text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};
