import { FlipWords } from "./ui/flip-words";
import { Highlight } from "./ui/hero-highlight";

function HeroSection() {
  return (
    <div className=" flex w-full items-center overflow-hidden relative  lg:py-20 md:py-10  ">
      <div className=" p-4 relative z-10 w-full text-center">
        <Highlight className="text-black dark:text-white">
          copy, of a copy, of a copy.
        </Highlight>
        <FlipWords words={["Javascript", "React"]} />
      </div>
      <div className=" w-full text-center p-4">
        <h1> Image</h1>
      </div>
    </div>
  );
}

export default HeroSection;
