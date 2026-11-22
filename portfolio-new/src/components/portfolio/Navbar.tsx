import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { nav, profile } from "./data";
import { useActiveSection, useTheme } from "./hooks";

const ids = nav.map((n) => n.id);

export function Navbar() {
  const active = useActiveSection(ids);
  const { dark, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? window.scrollY / h : 0);
      setScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className="h-0.5 bg-gradient-brand origin-left"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden
      />
      <nav
        aria-label="Primary"
        className={`mx-auto mt-3 grid w-[calc(100%-1.5rem)] max-w-6xl grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl px-3 py-2 transition-all duration-500 ${scrolled ? "glass shadow-lg" : "border border-transparent"}`}
      >
        <a
          href="#home"
          onClick={go("home")}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-brand font-display text-sm font-bold text-primary-foreground"
          aria-label="Go to top"
        >
          {profile.initials}
        </a>

        <ul className="hidden min-w-0 items-center justify-center gap-1 overflow-x-auto lg:flex [scrollbar-width:none]">
          {nav.map((n) => {
            const isActive = active === n.id;
            return (
              <li key={n.id} className="shrink-0">
                <a
                  href={`#${n.id}`}
                  onClick={go(n.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {n.label}
                  <span
                    className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-brand transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0"}`}
                  />
                </a>
              </li>
            );
          })}
        </ul>
        <div className="lg:hidden" />

        <div className="flex shrink-0 items-center gap-2">
          <button
            onClick={toggle}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="grid h-10 w-10 place-items-center rounded-xl border bg-card/60 text-foreground transition hover:border-primary hover:text-primary"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-xl border bg-card/60 text-foreground lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <div
        className={`mx-auto w-[calc(100%-1.5rem)] max-w-6xl overflow-hidden transition-all duration-500 lg:hidden ${open ? "mt-2 max-h-[80vh] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="glass grid grid-cols-2 gap-1 rounded-2xl p-2 sm:grid-cols-3">
          {nav.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                onClick={go(n.id)}
                className={`block rounded-lg px-4 py-3 text-sm font-medium ${active === n.id ? "bg-accent text-primary" : "text-muted-foreground"}`}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
