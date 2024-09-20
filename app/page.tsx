import { LandingMobile } from "../components/Landing";
import ParallaxContainer from "../components/Parallax";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Footer from "../components/ui/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <ParallaxContainer />
      <LandingMobile />
      <div className="relative w-full pt-32 bg-gradient-to-b from-primary from-50% to-black md:pt-64">
        <section id="about" className="pt-24 md:pt-32">
          <About />
        </section>
        <section id="experience" className="pt-32 md:py-80">
          <Experience />
        </section>
        <section id="projects" className="pt-24">
          <Projects />
        </section>
        <Footer />
      </div>
    </main>
  );
}