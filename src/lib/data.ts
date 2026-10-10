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
      "Built the company's main website with a team of junior frontend developers, and supervised the team: setting standards, reviewing code and guiding delivery to production.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Team leadership"],
  },
  {
    role: "Lead Frontend Developer",
    company: "Elevouth",
    period: "Lead role",
    summary:
      "Built the main website with a team of junior frontend developers, and supervised them through planning, code review and release.",
    tags: ["Next.js", "Framer Motion", "Code review", "Team leadership"],
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

export const projects: {
  slug: string;
  name: string;
  description: string;
  category: string;
  year: string;
  status?: string;
  stack: string[];
  live: string;
  github?: string;
  /** Screenshot in /public/projects */
  image?: string;
  /** CSS object-position for the 16:10 crop, e.g. "50% 30%" */
  imagePosition?: string;
}[] = [
  {
    slug: "venofateq",
    image: "/projects/venofateq.webp",
    name: "VenofaTEQ",
    description: "The main website for a technology and software development company, built with a team of junior frontend developers under my lead.",
    category: "Company website",
    year: "2025",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    live: "https://venofateq.com/",
  },
  {
    slug: "storely",
    image: "/projects/storely.webp",
    imagePosition: "50% 45%",
    name: "Storely",
    description: "An inventory and business management platform for tracking stock, sales and performance in one place.",
    category: "SaaS platform",
    year: "2025",
    status: "In progress",
    stack: ["React", "Redux Toolkit", "Node.js", "PostgreSQL"],
    live: "https://www.appstorely.com/",
  },
  {
    slug: "elevouth",
    image: "/projects/elevouth.webp",
    name: "Elevouth",
    description: "The main website for Elevouth, built with a team of junior frontend developers and supervised through release.",
    category: "Company website",
    year: "2024",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    live: "https://www.elevouth.com/",
  },
  {
    slug: "carteon",
    image: "/projects/carteon.webp",
    name: "Carteon",
    description: "A smart digital business card platform: create, share and update your professional identity with a tap or a scan.",
    category: "Web app",
    year: "2024",
    stack: ["Next.js", "Supabase", "Zustand", "Tailwind CSS"],
    live: "https://carteon.vercel.app/",
  },
  {
    slug: "jkic-result-portal",
    image: "/projects/jkic-result-portal.webp",
    imagePosition: "50% 67%",
    name: "JKIC Result Portal",
    description: "A secure result management portal where administrators, teachers and parents view term-based reports for JSS and SS students.",
    category: "Education system",
    year: "2024",
    stack: ["React", "Express", "PostgreSQL", "REST APIs"],
    live: "https://jkresultportal.vercel.app/",
  },
  {
    slug: "john-kennedy-schools",
    image: "/projects/john-kennedy-schools.webp",
    imagePosition: "50% 50%",
    name: "John Kennedy Schools",
    description: "The website for a nursery, primary and secondary school in Surulere, Lagos, with academics, online admissions registration, news and a result portal link.",
    category: "School website",
    year: "2025",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://johnkennedyschools.vercel.app/",
  },
  {
    slug: "nexaerp",
    image: "/projects/nexaerp.webp",
    name: "NexaERP",
    description: "A cloud ERP platform bringing HR, finance, procurement, CRM, inventory, projects and analytics together for growing businesses.",
    category: "Enterprise software",
    year: "2026",
    status: "In progress",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "TanStack Query"],
    live: "https://erp-alpha-bice.vercel.app/",
  },
  {
    slug: "haven-za2-directory",
    image: "/projects/haven-za2-directory.webp",
    imagePosition: "50% 33%",
    name: "Haven ZA2 Directory",
    description: "The official listing platform for the Haven ZA2 community, connecting professionals, founders, companies and service providers.",
    category: "Directory platform",
    year: "2026",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    live: "https://directory-sage-alpha.vercel.app/",
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
