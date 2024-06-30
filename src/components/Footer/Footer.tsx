import React from "react";

export default function Footer() {
  return (
    <div>
      <div className=" p-20 grid grid-cols-12">
        <div className=" col-span-6">
          <h1>Saifullah Al Rafi</h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, quaerat!
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
