/**
 * All editable content lives here.
 * TODO (owner): replace every URL marked PLACEHOLDER with the real one.
 */

export const profile = {
  name: "Divine Onyeka Nwose",
  short: "Divine",
  title: "Frontend Developer",
  tagline:
    "Building modern, responsive & scalable web applications with React, Next.js & Tailwind CSS",
  email: "nwosedivine40@gmail.com",
  github: "https://github.com/Divinenwose", // PLACEHOLDER – add your GitHub profile URL
  linkedin: "https://www.linkedin.com/in/divine-nwose-a90b2019a", // PLACEHOLDER – add your LinkedIn profile URL
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

export const stats = [
  { value: 5, suffix: "+", label: "Years experience" },
  { value: 20, suffix: "+", label: "Projects shipped" },
  { value: 10, suffix: "+", label: "Technologies" },
  { value: null, suffix: "∞", label: "Curiosity" },
] as const;

export const principles = [
  { title: "Design-conscious development", text: "Spacing, rhythm and motion are engineering decisions, not finishing touches." },
  { title: "Clean architecture", text: "Components with one job, clear boundaries and names that explain themselves." },
  { title: "Performance", text: "Fast first paint, lean bundles and animation that stays on the GPU." },
  { title: "Accessibility", text: "Semantic markup, keyboard paths and contrast built in from the first commit." },
  { title: "Responsive interfaces", text: "Layouts designed for each screen, not shrunk to fit it." },
  { title: "Maintainable code", text: "TypeScript, tests where they matter and code the next developer enjoys reading." },
];

export const experience = [
  {
    role: "Lead Frontend Developer",
    company: "Venofa TEQ",
    period: "Lead role",
    summary:
      "Leading frontend architecture and delivery for a technology and software development company, from design systems to production releases.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    role: "Lead Frontend Developer",
    company: "Elevouth",
    period: "Lead role",
    summary:
      "Owning the interface layer of a digital platform: component library, state management and performance budgets.",
    tags: ["Next.js", "Framer Motion", "TanStack Query", "Supabase"],
  },
  {
    role: "Frontend / Next.js Tutor",
    company: "TechAcademy Solution",
    period: "Mentoring",
    summary:
      "Teaching React and Next.js to aspiring developers, turning fundamentals into portfolio-ready projects.",
    tags: ["React", "Next.js", "JavaScript", "Mentoring"],
  },
  {
    role: "Freelance Frontend Developer",
    company: "Independent",
    period: "2021 – Present",
    summary:
      "Designing and building websites and web apps for clients: Figma-to-code, dashboards, business platforms and everything between.",
    tags: ["Figma-to-code", "Node.js", "PostgreSQL", "Accessibility"],
  },
];

export type VisualKind = "venofa" | "storely" | "carteon" | "elevouth" | "portal" | "carneiz";

export const projects: {
  slug: string;
  name: string;
  description: string;
  category: string;
  year: string;
  stack: string[];
  live: string;
  github?: string;
  kind: VisualKind;
}[] = [
  {
    slug: "venofateq",
    name: "VenofaTEQ",
    description: "A modern technology and software development platform that presents services, work and team with clarity.",
    category: "Corporate platform",
    year: "2025",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    live: "https://example.com/venofateq", // PLACEHOLDER
    kind: "venofa",
  },
  {
    slug: "storely",
    name: "Storely",
    description: "An inventory and business management platform for tracking stock, sales and performance in one place.",
    category: "SaaS dashboard",
    year: "2025",
    stack: ["React", "Redux Toolkit", "Node.js", "PostgreSQL"],
    live: "https://example.com/storely", // PLACEHOLDER
    github: "https://github.com/", // PLACEHOLDER
    kind: "storely",
  },
  {
    slug: "carteon",
    name: "Carteon",
    description: "A smart digital business card platform: create, share and update your professional identity with a tap or a scan.",
    category: "Web app",
    year: "2024",
    stack: ["Next.js", "Supabase", "Zustand", "Tailwind CSS"],
    live: "https://example.com/carteon", // PLACEHOLDER
    github: "https://github.com/", // PLACEHOLDER
    kind: "carteon",
  },
  {
    slug: "elevouth",
    name: "Elevouth",
    description: "A modern digital and technology platform with a fast, motion-rich interface and a scalable component system.",
    category: "Digital platform",
    year: "2024",
    stack: ["Next.js", "TanStack Query", "Supabase", "Framer Motion"],
    live: "https://example.com/elevouth", // PLACEHOLDER
    kind: "elevouth",
  },
  {
    slug: "school-result-portal",
    name: "School Result Portal",
    description: "A digital result management platform that lets schools publish results and students check them securely.",
    category: "Education system",
    year: "2023",
    stack: ["React", "Express", "PostgreSQL", "REST APIs"],
    live: "https://example.com/school-result-portal", // PLACEHOLDER
    github: "https://github.com/", // PLACEHOLDER
    kind: "portal",
  },
  {
    slug: "carneiz",
    name: "Carneiz",
    description: "A modern web experience built around editorial layout, strong type and carefully paced motion.",
    category: "Web experience",
    year: "2023",
    stack: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    live: "https://example.com/carneiz", // PLACEHOLDER
    kind: "carneiz",
  },
];

export const skillRows = [
  { label: "Frontend", items: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"], dur: 38, rev: false },
  { label: "State & Data", items: ["Redux Toolkit", "Zustand", "TanStack Query", "Context API"], dur: 46, rev: true },
  { label: "Backend", items: ["Node.js", "Express", "REST APIs"], dur: 34, rev: false },
  { label: "Database", items: ["Supabase", "PostgreSQL"], dur: 42, rev: true },
  { label: "Tools", items: ["Git", "GitHub", "Figma", "VS Code"], dur: 36, rev: false },
];

export const services = [
  { id: "frontend", title: "Frontend Development", text: "Modern, scalable and maintainable React and Next.js applications." },
  { id: "ui", title: "UI Implementation", text: "Pixel-perfect conversion of Figma files and design systems into responsive interfaces." },
  { id: "webapp", title: "Web Application Development", text: "Interactive dashboards, SaaS platforms and business applications." },
  { id: "perf", title: "Performance & Optimization", text: "Fast, accessible and optimized web experiences." },
  { id: "responsive", title: "Responsive Design", text: "Interfaces that work beautifully across desktop, tablet and mobile." },
];
