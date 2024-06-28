import Hero from "@/components/Hero";

import MouseEffect from "@/components/MouseEffect";
import SkillMain from "@/components/Skills/SkillMain";
import Context from "@/Context/Context";
import ProjectMain from "@/components/Projects/projectMain";

export default function Home() {
  return (
    <Context>
      <main className=" relative min-h-screen bg-[#000000]">
        <div>
          <MouseEffect />
          <Hero />
        </div>
        <SkillMain />
        <ProjectMain />
      </main>
    </Context>
  );
}
