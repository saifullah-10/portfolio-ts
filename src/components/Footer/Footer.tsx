import React from "react";

export default function Footer() {
  return (
    <div>
      <div className=" p-5 lg:p-20 grid grid-cols-12">
        <div className=" flex flex-col items-center justify-center text-center col-span-6">
          <h1 className=" text-xl lg:text-3xl ">Saifullah Al Rafi</h1>
          <p className=" w-[90%] text-gray-400">
            {" "}
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
        <div className=" text-center col-span-6">
          <ul className=" flex flex-col gap-3">
            <li>Home</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>About Me</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className=" mt-5 col-span-12 text-center">
          <p> &copy; Saifullah Al Rafi </p>
        </div>
      </div>
    </div>
  );
}
