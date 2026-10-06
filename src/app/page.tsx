import dynamic from "next/dynamic";
import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Services from "@/components/services/Services";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Providers from "@/components/ui/Providers";

// Pointer-only enhancement: loaded client-side, never blocks first paint.
const Cursor = dynamic(() => import("@/components/ui/Cursor"));

export default function Home() {
  return (
    <Providers>
      <a
        href="#main"
        className="fixed left-4 top-4 z-[200] -translate-y-20 rounded-full bg-ember px-5 py-2 text-sm font-medium text-black transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <SmoothScroll />
      <ScrollProgress />
      <Cursor />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Services />
        <Contact />
      </main>
      <Footer />
    </Providers>
  );
}
