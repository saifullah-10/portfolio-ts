import React from "react";

import { Spotlight } from "@/components/ui/Spotlight";
function Hero() {
  return (
    <div>
      <Spotlight
        opacity={0.1}
        className="-top-40 left-0 md:left-60 md:-top-20 "
        fill="#00FFFF"
      />
      <Spotlight
        className="-top-40 right-50 md:-right-70  md:-top-40"
        fill="#39FF14"
      />
      <Spotlight opacity={0.09} className=" top-0  left-10 " fill="#FF00FF" />
    </div>
  );
}

export default Hero;
