import Hero from "@/components/Hero";

import MouseEffect from "@/components/MouseEffect";

export default function Home() {
  return (
    <main className=" relative min-h-screen bg-[#000000]">
      <MouseEffect />
      <Hero />
    </main>
  );
}
