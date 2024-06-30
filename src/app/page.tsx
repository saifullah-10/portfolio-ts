import Hero from "@/components/Hero";

import MouseEffect from "@/components/MouseEffect";
import SkillMain from "@/components/Skills/SkillMain";
import Context from "@/Context/Context";
import ProjectMain from "@/components/Projects/projectMain";
import { Contact } from "@/components/Contact/Contact";
import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <Context>
      <main>
        <div className="  min-h-screen bg-[#000000]">
          <div>
            <MouseEffect />
            <Hero />
          </div>
          <SkillMain />
          <ProjectMain />
          <About />
          <Contact />
          <Footer />
        </div>
      </main>
    </Context>
  );
}
