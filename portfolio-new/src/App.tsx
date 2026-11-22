import { useEffect } from "react";
import { Navbar } from "./components/portfolio/Navbar";
import {
  Hero,
  About,
  Education,
  Skills,
  Certifications,
  Experience,
  Volunteering,
  Projects,
  Contact,
  Footer,
} from "./components/portfolio/Sections";
import { useRevealAll } from "./components/portfolio/hooks";

export default function App() {
  useRevealAll();

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-cyan/20 selection:text-cyan">
      {/* Ambient background glows */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-primary/15 blur-[140px] animate-blob"
        />
        <div
          className="absolute top-1/3 -right-40 h-[650px] w-[650px] rounded-full bg-cyan/10 blur-[160px] animate-blob"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute -bottom-40 left-1/4 h-[600px] w-[600px] rounded-full bg-violet/15 blur-[150px] animate-blob"
          style={{ animationDelay: "8s" }}
        />
        <div className="absolute inset-0 dot-grid opacity-60" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />

        <main className="flex-1">
          <Hero />
          <About />
          <Education />
          <Skills />
          <Certifications />
          <Experience />
          <Volunteering />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}
