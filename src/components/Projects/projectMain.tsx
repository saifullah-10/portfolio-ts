import React from "react";
import { ProjectCard } from "./ProjectCard";

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
      <div className=" flex justify-center  gap-8">
        <ProjectCard />

        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
