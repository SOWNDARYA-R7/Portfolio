import { useMemo, useState, useEffect, type ReactNode } from "react";
import { ArrowRight, Award, Download, ExternalLink, Briefcase, Code2, GraduationCap, HeartHandshake, Mail, MapPin, Phone, Send, Sparkles, Trophy, X, ChevronUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import photo from "@/assets/professional.png";
import resumeUrl from "@/assets/resume.pdf";
import { certifications, competitive, volunteering, achievements, education, experiences, interests, orbitKeys, profile, projects, skillGroups, stats, tech, type Tech, type TechKey } from "./data";
import { useCounter, useTyping } from "./hooks";

function Logo({ t, size = 28, spin = false }: { t: Tech & { invert?: boolean }; size?: number; spin?: boolean }) {
  return (
    <img
      src={t.icon}
      alt=""
      width={size}
      height={size}
      loading="lazy"
      className={`${spin ? "logo-turn" : ""} ${t.invert ? "dark:invert" : ""}`}
      style={{ width: size, height: size }}
    />
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="reveal mb-12 max-w-2xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-cyan">{eyebrow}</p>
      <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Section({ id, children }: { id: string; children: ReactNode }) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
      {children}
    </section>
  );
}

/* ---------------- Hero ---------------- */
const floatIcons: TechKey[] = ["react", "node", "python", "mongodb", "js", "git", "powerbi", "java"];
const floatPos = ["left-[6%] top-[22%]", "right-[8%] top-[18%]", "left-[12%] bottom-[18%]", "right-[14%] bottom-[22%]", "left-[42%] top-[10%]", "right-[38%] bottom-[8%]", "left-[3%] top-[55%]", "right-[3%] top-[52%]"];

export function Hero() {
  const typed = useTyping(profile.roles);
  return (
    <section id="home" className="relative flex min-h-svh items-center overflow-hidden px-5 pt-28 pb-16 sm:px-8">
      <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden>
        {floatIcons.map((k, i) => (
          <div key={k} className={`absolute ${floatPos[i]} glass grid h-14 w-14 place-items-center rounded-2xl opacity-60 animate-float`} style={{ animationDelay: `${i * 0.7}s` }}>
            <Logo t={tech[k]} size={26} />
          </div>
        ))}
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 md:grid-cols-[1.2fr_1fr]">
        <div className="order-2 text-center md:order-1 md:text-left">
          <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 font-mono text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_12px_var(--cyan)]" /> Open to opportunities
          </p>
          <h1 className="animate-in fade-in slide-in-from-bottom-6 duration-700 mt-6 text-5xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-gradient">{profile.name}</span>
          </h1>
          <p className="mt-5 h-8 font-mono text-lg text-primary sm:text-xl" aria-live="polite">
            {typed}
            <span className="animate-blink">|</span>
          </p>
          <p className="animate-in fade-in duration-1000 mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:mx-0 sm:text-lg">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3 font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_var(--glow)] transition hover:-translate-y-0.5">
              View Projects <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </a>
            <a href={resumeUrl} download="Sowndarya_R_Resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 font-semibold transition hover:-translate-y-0.5 hover:border-primary">
              <Download size={18} /> Download Resume
            </a>
          </div>
          <div className="mt-8 flex justify-center gap-3 md:justify-start">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-xl glass glow-hover"><FaLinkedin size={20} /></a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-xl glass glow-hover"><FaGithub size={20} /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="grid h-11 w-11 place-items-center rounded-xl glass glow-hover"><Mail size={20} /></a>
          </div>
        </div>

        <div className="order-1 mx-auto md:order-2 animate-in fade-in zoom-in-90 duration-1000">
          <div className="relative h-60 w-60 sm:h-80 sm:w-80">
            <div className="absolute -inset-3 rounded-full bg-gradient-brand opacity-70 blur-2xl" aria-hidden />
            <div className="absolute -inset-1 rounded-full animate-spin-slow" style={{ background: "conic-gradient(from 0deg, var(--primary), var(--cyan), var(--violet), var(--primary))" }} aria-hidden />
            <img src={photo} alt={profile.name} className="relative h-full w-full rounded-full border-4 border-background object-cover" />
            <div className="absolute -bottom-2 -left-4 glass rounded-2xl px-4 py-2 animate-float">
              <p className="font-display text-xl font-bold text-gradient">8.56</p>
              <p className="text-[11px] text-muted-foreground">CGPA</p>
            </div>
            <div className="absolute -right-4 top-6 glass rounded-2xl px-4 py-2 animate-float" style={{ animationDelay: "1.5s" }}>
              <p className="font-display text-xl font-bold text-gradient">1100+</p>
              <p className="text-[11px] text-muted-foreground">Problems solved</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */
function Stat({ s }: { s: (typeof stats)[number] }) {
  const { ref, display } = useCounter(s.value, s.decimals);
  return (
    <div className="glass glow-hover rounded-2xl p-6 text-center">
      <p className="font-display text-4xl font-bold text-gradient">
        <span ref={ref}>{display}</span>
        {s.suffix}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
    </div>
  );
}

export function About() {
  return (
    <Section id="about">
      <SectionHead eyebrow="01 · About me" title="Building things that are fast, useful and data-driven." />
      <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
        <div className="reveal glass relative overflow-hidden rounded-3xl p-2">
          <img src={photo} alt={profile.name} loading="lazy" className="aspect-[4/5] w-full rounded-2xl object-cover object-top" />
          <div className="absolute inset-x-6 bottom-6 glass rounded-xl p-4">
            <p className="flex items-center gap-2 text-sm"><MapPin size={16} className="text-cyan" /> {profile.location}</p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="reveal glass rounded-3xl p-7">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a <span className="text-foreground">Computer Science & Engineering student at KIT Coimbatore</span> with a passion for building high-performance full-stack web platforms and applying machine learning to real-world data problems.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="reveal glass glow-hover rounded-3xl p-6">
              <Sparkles className="text-violet" />
              <h3 className="mt-3 font-semibold">Technical interests</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {interests.map((i) => <li key={i}>— {i}</li>)}
              </ul>
            </div>
            <div className="reveal glass glow-hover rounded-3xl p-6">
              <Briefcase className="text-cyan" />
              <h3 className="mt-3 font-semibold">Career objective</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Open to full-stack, data analytics and software engineering roles where I can ship reliable products and keep learning.</p>
            </div>
          </div>
          <div className="reveal grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((s) => <Stat key={s.label} s={s} />)}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Education ---------------- */
export function Education() {
  return (
    <Section id="education">
      <SectionHead eyebrow="02 · Education" title="Academic journey" />
      <ol className="relative ml-3 border-l-2 border-dashed border-border pl-8 sm:ml-6">
        {education.map((e) => (
          <li key={e.institution} className="reveal relative pb-4">
            <span className="absolute -left-[3.05rem] top-1 grid h-10 w-10 place-items-center rounded-full bg-gradient-brand text-primary-foreground shadow-[0_0_25px_var(--glow)]">
              <GraduationCap size={18} />
            </span>
            <div className="glass glow-hover animated-border rounded-3xl p-7">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-xl font-bold">{e.degree}</h3>
                  <p className="mt-1 text-muted-foreground">{e.institution}</p>
                </div>
                <span className="shrink-0 rounded-full bg-accent px-3 py-1 font-mono text-xs text-primary">{e.year}</span>
              </div>
              <div className="mt-5 inline-flex items-baseline gap-2 rounded-xl border px-4 py-2">
                <span className="text-sm text-muted-foreground">CGPA</span>
                <span className="font-display text-2xl font-bold text-gradient">{e.cgpa}</span>
              </div>
              {e.coursework.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {e.coursework.map((c) => <span key={c} className="rounded-lg bg-secondary px-3 py-1 text-xs">{c}</span>)}
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* ---------------- Skills ---------------- */
function Orbit() {
  const n = orbitKeys.length;
  return (
    <div className="orbit-stage relative mx-auto h-[300px] w-full max-w-[520px] sm:h-[420px]" aria-label="Rotating technology logos">
      <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-brand opacity-40 blur-3xl" aria-hidden />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="font-display text-2xl font-bold text-gradient sm:text-3xl">{n}+</p>
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">technologies</p>
      </div>
      <div className="orbit-ring absolute inset-0 [--R:125px] sm:[--R:185px]">
        {orbitKeys.map((k, i) => {
          const phi = Math.acos(1 - (2 * (i + 0.5)) / n);
          const theta = (Math.PI * (1 + Math.sqrt(5)) * i) % (2 * Math.PI);
          const ry = (theta * 180) / Math.PI;
          const rx = 90 - (phi * 180) / Math.PI;
          return (
            <div key={k} className="orbit-item" style={{ transform: `rotateY(${ry}deg) rotateX(${rx}deg) translateZ(var(--R)) rotateX(${-rx}deg) rotateY(${-ry}deg)` }}>
              <div className="orbit-face">
                <div className="group relative -ml-6 -mt-6 grid h-12 w-12 place-items-center rounded-2xl glass transition hover:scale-125 hover:shadow-[0_0_30px_var(--glow)] sm:h-14 sm:w-14">
                  <Logo t={tech[k]} size={26} />
                  <span className="pointer-events-none absolute -top-8 whitespace-nowrap rounded-md bg-popover px-2 py-1 text-[11px] opacity-0 shadow transition group-hover:opacity-100">{tech[k].name}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <Section id="skills">
      <SectionHead eyebrow="03 · Skills" title="My technology universe" sub="Hover the orbit to pause it and reveal each technology." />
      <div className="reveal"><Orbit /></div>
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g) => (
          <div key={g.title} className="reveal glass glow-hover rounded-3xl p-6">
            <h3 className="mb-5 font-semibold">{g.title}</h3>
            <ul className="space-y-4">
              {g.items.map(([k, lvl]) => (
                <li key={k} className="group">
                  <div className="mb-1.5 flex items-center gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-secondary [perspective:400px]">
                      <Logo t={tech[k]} size={20} spin />
                    </span>
                    <span className="min-w-0 flex-1 truncate text-sm">{tech[k].name}</span>
                    <span className="font-mono text-xs text-muted-foreground">{lvl}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                    <div className="h-full rounded-full bg-gradient-brand transition-[width] duration-1000" style={{ width: `${lvl}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Certifications & Achievements ---------------- */
export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHead eyebrow="04 · Certifications" title="Certifications & achievements" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <article key={c.title} className="reveal glass glow-hover animated-border flex flex-col rounded-3xl p-6" style={{ transitionDelay: `${i * 60}ms` }}>
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground"><Award size={20} /></span>
              <div className="min-w-0">
                <h3 className="font-semibold leading-snug">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.org} · {c.year}</p>
              </div>
            </div>
            <a href={c.url} target="_blank" rel="noreferrer" className="mt-5 inline-flex w-fit items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition hover:border-primary hover:text-primary">
              View Certificate <ExternalLink size={14} />
            </a>
          </article>
        ))}
      </div>

      <h3 className="reveal mt-16 mb-6 text-2xl font-bold">Competitive programming</h3>
      <div className="grid gap-6 sm:grid-cols-2">
        {competitive.map((c) => (
          <a key={c.platform} href={c.url} target="_blank" rel="noreferrer" className="reveal glass glow-hover rounded-3xl p-6">
            <p className="flex items-center justify-between font-display text-xl font-bold"><span className="text-gradient">{c.platform}</span><ExternalLink size={16} className="text-muted-foreground" /></p>
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground">{c.lines.map((l) => <li key={l}>{l}</li>)}</ul>
          </a>
        ))}
      </div>

      <h3 className="reveal mt-16 mb-6 text-2xl font-bold">Achievements</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {achievements.map((a) => (
          <article key={a.title} className="reveal glass glow-hover flex gap-4 rounded-2xl p-5">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent text-primary"><Trophy size={18} /></span>
            <div className="min-w-0">
              <p className="font-semibold leading-snug">{a.title}</p>
              <p className="mt-0.5 text-sm text-muted-foreground">{a.org}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Experience ---------------- */
export function Experience() {
  return (
    <Section id="experience">
      <SectionHead eyebrow="05 · Experience" title="Where I've worked" />
      <div className="space-y-6">
        {experiences.map((e) => (
          <article key={e.role} className="reveal glass glow-hover animated-border grid gap-6 rounded-3xl p-7 md:grid-cols-[220px_1fr]">
            <div>
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-primary"><Briefcase size={20} /></span>
              <p className="mt-4 font-semibold text-primary">{e.company}</p>
              {e.date && <p className="font-mono text-xs text-muted-foreground">{e.date}</p>}
            </div>
            <div className="min-w-0">
              <h3 className="text-xl font-bold">{e.role}</h3>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                {e.points.map((p) => <li key={p} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />{p}</li>)}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {e.stack.map((k) => (
                  <span key={k} className="inline-flex items-center gap-2 rounded-lg border bg-card/50 px-3 py-1.5 text-xs"><Logo t={tech[k]} size={14} />{tech[k].name}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Volunteering ---------------- */
export function Volunteering() {
  return (
    <Section id="volunteering">
      <SectionHead eyebrow="06 · Volunteering" title="Giving back" />
      <div className="grid gap-6 md:grid-cols-3">
        {volunteering.map((v) => (
          <article key={v.role} className="reveal glass glow-hover animated-border rounded-3xl p-6">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-violet"><HeartHandshake size={20} /></span>
            <h3 className="mt-4 font-semibold">{v.role}</h3>
            <p className="text-sm text-primary">{v.org}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Projects ---------------- */
export function Projects() {
  const cats = useMemo(() => ["All", ...Array.from(new Set(projects.map((p) => p.category)))], []);
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<(typeof projects)[number] | null>(null);
  const list = projects.filter((p) => filter === "All" || p.category === filter);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <Section id="projects">
      <SectionHead eyebrow="07 · Projects" title="Featured work" />
      <div className="reveal mb-8 flex flex-wrap gap-2" role="tablist">
        {cats.map((c) => (
          <button key={c} role="tab" aria-selected={filter === c} onClick={() => setFilter(c)} className={`rounded-full px-5 py-2 text-sm font-medium transition ${filter === c ? "bg-gradient-brand text-primary-foreground" : "glass text-muted-foreground hover:text-foreground"}`}>
            {c}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <article key={p.title} className="group glass animated-border glow-hover flex flex-col overflow-hidden rounded-3xl animate-in fade-in zoom-in-95 duration-500">
            <div className="relative h-40 overflow-hidden dot-grid">
              <div className="absolute inset-0 bg-gradient-brand opacity-20 transition duration-700 group-hover:scale-110 group-hover:opacity-35" />
              <div className="absolute inset-0 flex items-center justify-center gap-3 transition duration-700 group-hover:scale-110">
                {p.stack.slice(0, 4).map((k) => <span key={k} className="grid h-12 w-12 place-items-center rounded-xl glass"><Logo t={tech[k]} size={26} /></span>)}
              </div>
              <span className="absolute left-4 top-4 rounded-full glass px-3 py-1 font-mono text-[11px]">{p.category}</span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-bold">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <button onClick={() => setOpen(p)} className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition hover:bg-primary hover:text-primary-foreground">
                  <Code2 size={16} /> Details
                </button>
                <a href={p.github || profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition hover:border-primary">
                  <FaGithub size={16} /> GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {open && (
        <div role="dialog" aria-modal="true" aria-label={open.title} className="fixed inset-0 z-[60] grid place-items-center bg-background/70 p-4 backdrop-blur-sm animate-in fade-in" onClick={() => setOpen(null)}>
          <div className="glass relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl p-8 animate-in zoom-in-95" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setOpen(null)} aria-label="Close" className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-lg border hover:border-primary"><X size={16} /></button>
            <p className="font-mono text-xs text-cyan">{open.category}</p>
            <h3 className="mt-2 text-2xl font-bold">{open.title}</h3>
            <p className="mt-4 text-muted-foreground">{open.desc}</p>
            {open.points.length > 0 && (
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {open.points.map((pt) => <li key={pt} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />{pt}</li>)}
              </ul>
            )}
            <p className="mt-4 inline-block rounded-lg bg-accent px-3 py-1 text-sm text-primary">{open.metric}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {open.stack.map((k) => <span key={k} className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs"><Logo t={tech[k]} size={14} />{tech[k].name}</span>)}
              {open.tags.map((t) => <span key={t} className="rounded-lg border px-3 py-1.5 text-xs">{t}</span>)}
            </div>
            <a href={open.github || profile.github} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-2.5 font-semibold text-primary-foreground"><FaGithub size={18} /> View on GitHub</a>
          </div>
        </div>
      )}
    </Section>
  );
}

/* ---------------- Contact ---------------- */
export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<"name" | "email" | "subject" | "message", string>>>({});
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const err: Partial<Record<"name" | "email" | "subject" | "message", string>> = {};
    if (form.name.trim().length < 2) err.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = "Please enter a valid email.";
    if (form.subject.trim().length < 3) err.subject = "Please add a subject.";
    if (form.message.trim().length < 10) err.message = "Message should be at least 10 characters.";
    setErrors(err);
    if (Object.keys(err).length) return;
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field = (k: keyof typeof form, label: string, type = "text") => (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      {k === "message" ? (
        <textarea rows={5} value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })} aria-invalid={!!errors[k]} className="w-full rounded-xl border bg-background/50 px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30" />
      ) : (
        <input type={type} value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })} aria-invalid={!!errors[k]} className="w-full rounded-xl border bg-background/50 px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30" />
      )}
      {errors[k] && <span className="mt-1 block text-xs text-destructive">{errors[k]}</span>}
    </label>
  );

  const contacts = [
    { icon: <Mail size={18} />, label: profile.email, href: `mailto:${profile.email}` },
    { icon: <Phone size={18} />, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: <FaLinkedin size={18} />, label: "linkedin.com/in/sowndaryar", href: profile.linkedin },
    { icon: <FaGithub size={18} />, label: "github.com/SOWNDARYA-R7", href: profile.github },
  ];

  return (
    <Section id="contact">
      <SectionHead eyebrow="08 · Contact" title="Let's build something together" sub="Feel free to connect for full-stack, data analytics, or software engineering roles." />
      <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
        <div className="reveal space-y-4">
          {contacts.map((c) => (
            <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="glass glow-hover flex items-center gap-4 rounded-2xl p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">{c.icon}</span>
              <span className="min-w-0 truncate">{c.label}</span>
            </a>
          ))}
          <div className="glass flex items-center gap-4 rounded-2xl p-5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-primary"><MapPin size={18} /></span>
            <span>{profile.location}</span>
          </div>
        </div>
        <form noValidate onSubmit={submit} className="reveal glass space-y-4 rounded-3xl p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            {field("name", "Name")}
            {field("email", "Email", "email")}
          </div>
          {field("subject", "Subject")}
          {field("message", "Message")}
          <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand px-6 py-3 font-semibold text-primary-foreground transition hover:-translate-y-0.5 sm:w-auto">
            <Send size={18} /> Send message
          </button>
          {sent && <p className="text-sm text-cyan">Your email app should now open with the message ready to send.</p>}
        </form>
      </div>
    </Section>
  );
}

/* ---------------- Footer ---------------- */
export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/40 py-12 px-5 text-center sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <a
            href="#home"
            className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand font-display text-xs font-bold text-primary-foreground"
          >
            {profile.initials}
          </a>
          <span className="text-sm font-medium text-foreground">{profile.name}</span>
        </div>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Built with precision, React &amp; Tailwind CSS.
        </p>

        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="inline-flex items-center gap-1.5 rounded-xl border bg-card/60 px-3 py-1.5 text-xs font-medium text-muted-foreground transition hover:border-primary hover:text-foreground"
        >
          <ChevronUp size={14} /> Back to top
        </button>
      </div>
    </footer>
  );
}
