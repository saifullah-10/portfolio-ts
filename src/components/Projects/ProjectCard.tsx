"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import "./project.css";
import Ass11 from "../../../public/assignment11.png";

const ProjectCard: React.FC = () => {
  return (
    <div className=" w-full flex lg:gap-8 justify-center gap-10 lg:flex-row flex-col">
      {" "}
      <CardContainer className="inter-var scr_img">
        <CardBody className="bg-gray-50  relative   transition-all duration-500  dark:hover:shadow-skill-glow dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="100"
            className="w-full h-60 src_img no-scrollbar overflow-hidden   mt-4"
          >
            <Image
              src={Ass11}
              height="1000"
              width="1000"
              className="  w-full image object-cover translate-y-0  rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <CardItem
            translateZ="50"
            className="text-xl mt-5 font-bold text-neutral-600 dark:text-white"
          >
            Make things float in air
          </CardItem>
          <CardItem
            translateZ="50"
            className="text-sm mt-5 font-bold text-neutral-600 dark:text-white"
          >
            <ul className=" custom-list ml-6 leading-8">
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
                rerum.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
                rerum.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
                rerum.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
                rerum.
              </li>
            </ul>
          </CardItem>
          <div className="flex justify-between items-center mt-5">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://twitter.com/mannupaaji"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Github →
            </CardItem>

            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Live
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      <CardContainer className="inter-var scr_img">
        <CardBody className="bg-gray-50  relative group/card  transition-all duration-500  dark:hover:shadow-skill-glow dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="100"
            className="w-full h-60 src_img no-scrollbar overflow-hidden  mt-4"
          >
            <Image
              src={Ass11}
              height="1000"
              width="1000"
              className=" w-full image object-cover translate-y-0  rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <CardItem
            translateZ="50"
            className="text-xl mt-5 font-bold text-neutral-600 dark:text-white"
          >
            Make things float in air
          </CardItem>
          <CardItem
            translateZ="50"
            className="text-sm mt-5 font-bold text-neutral-600 dark:text-white"
          >
            <ul className=" custom-list ml-6 leading-8">
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
                rerum.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
                rerum.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
                rerum.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
                rerum.
              </li>
            </ul>
          </CardItem>
          <div className="flex justify-between items-center mt-5">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://twitter.com/mannupaaji"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Github →
            </CardItem>

            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Live
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      <CardContainer className="inter-var scr_img">
        <CardBody className="bg-gray-50  relative group/card  transition-all duration-500  dark:hover:shadow-skill-glow dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="100"
            className="w-full h-60 src_img no-scrollbar overflow-hidden   mt-4"
          >
            <Image
              src={Ass11}
              height="1000"
              width="1000"
              className=" w-full image object-cover translate-y-0  rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <CardItem
            translateZ="50"
            className="text-xl mt-5 font-bold text-neutral-600 dark:text-white"
          >
            Make things float in air
          </CardItem>
          <CardItem
            translateZ="50"
            className="text-sm mt-5 font-bold text-neutral-600 dark:text-white"
          >
            <ul className=" custom-list ml-6 leading-8">
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
                rerum.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
                rerum.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
                rerum.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
                rerum.
              </li>
            </ul>
          </CardItem>
          <div className="flex justify-between items-center mt-5">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://twitter.com/mannupaaji"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Github →
            </CardItem>

            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Live
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
};
export default ProjectCard;
