import Hero from "@/components/Hero";

import MouseEffect from "@/components/MouseEffect";
import SkillMain from "@/components/Skills/SkillMain";

export default function Home() {
  return (
    <main className=" relative min-h-screen bg-[#000000]">
      <div>
        <MouseEffect />
        <Hero />
      </div>
      <SkillMain />
    </main>
  );
}
