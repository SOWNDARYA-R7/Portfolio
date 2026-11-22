import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Navbar } from "@/components/portfolio/Navbar";
import { About, Certifications, Contact, Education, Experience, Hero, Projects, Skills, Volunteering } from "@/components/portfolio/Sections";
import { useRevealAll } from "@/components/portfolio/hooks";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sowndarya R — Full Stack Developer & Data Analytics Enthusiast" },
      { name: "description", content: "Portfolio of Sowndarya R: MERN full-stack developer, backend intern at Clar Technologies and data analytics enthusiast from Coimbatore." },
      { property: "og:title", content: "Sowndarya R — Full Stack Developer" },
      { property: "og:description", content: "Projects, skills, experience and achievements of Sowndarya R." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useRevealAll();
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const f = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 dot-grid" aria-hidden />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
        <div className="absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-primary opacity-20 blur-[120px] animate-blob" />
        <div className="absolute -right-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-violet opacity-20 blur-[120px] animate-blob" style={{ animationDelay: "-6s" }} />
        <div className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-cyan opacity-15 blur-[120px] animate-blob" style={{ animationDelay: "-12s" }} />
      </div>
      <Navbar />
      <main>
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
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Sowndarya R · Built with care in Coimbatore
      </footer>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-gradient-brand text-primary-foreground shadow-lg transition-all ${showTop ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}
