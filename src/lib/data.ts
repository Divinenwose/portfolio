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
  // WhatsApp (Nigeria): 08069248565 -> 2348069248565, opens a chat with the message below pre-filled
  whatsapp: `https://wa.me/2348069248565?text=${encodeURIComponent("Hi Divine, I saw your portfolio and I would like to talk about a project.")}`,
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
  { value: 10, suffix: "+", label: "Projects shipped" },
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
    period: "2025 – Present",
    summary:
      "Built the company's main website with a team of junior frontend developers, and supervised the team: setting standards, reviewing code and guiding delivery to production.",
  },
  {
    role: "Lead Frontend Developer",
    company: "Elevouth",
    period: "2024 – Present, contract",
    summary:
      "Built the main website, including the Global Talent Summit 2025 event page, with a team of junior frontend developers, and supervised them through planning, code review and release. Also led the development team at Elevouth Labs on Storely.",
  },
  {
    role: "Freelance Frontend Developer",
    company: "Independent",
    period: "2021 – Present",
    summary:
      "Designing and building websites and web apps for clients: Figma-to-code, dashboards, business platforms and everything between.",
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
    year: "2026",
    stack: ["React.js (Vite)", "API integration", "Tailwind CSS", "Figma to code", "Framer Motion", "Responsive design"],
    live: "https://venofateq.com/",
  },
  {
    slug: "storely",
    image: "/projects/storely.webp",
    imagePosition: "50% 45%",
    name: "Storely",
    description: "An inventory and business management platform for tracking stock, sales and performance in one place. Built as a product at Elevouth Labs, where I led the development team.",
    category: "SaaS platform",
    year: "2026",
    status: "In progress",
    stack: ["React.js (Vite)", "Tailwind CSS", "API integration", "Figma to code", "Redux Toolkit"],
    live: "https://www.appstorely.com/",
  },
  {
    slug: "elevouth",
    image: "/projects/elevouth.webp",
    name: "Elevouth",
    description: "The main website for Elevouth, including the Global Talent Summit 2025 event page, built with a team of junior frontend developers and supervised through release.",
    category: "Company website",
    year: "2024",
    stack: ["React.js (Vite)", "Vanilla CSS", "Node.js", "Payment integration", "Express"],
    live: "https://www.elevouth.com/",
  },
  {
    slug: "carteon",
    image: "/projects/carteon.webp",
    name: "Carteon",
    description: "A smart digital business card platform: create, share and update your professional identity with a tap or a scan.",
    category: "Web app",
    year: "2025",
    stack: ["React.js (Vite)", "Tailwind CSS", "Payment integration", "API integration", "Framer Motion", "Figma to code", "Zustand"],
    live: "https://carteon.vercel.app/",
  },
  {
    slug: "jkic-result-portal",
    image: "/projects/jkic-result-portal.webp",
    imagePosition: "50% 67%",
    name: "John Kennedy International Schools Result Portal",
    description: "A secure result management portal where administrators, teachers and parents view term-based reports for JSS and SS students.",
    category: "Education system",
    year: "2025",
    stack: ["React.js (Vite)", "Tailwind CSS", "Supabase", "TypeScript", "TanStack Query"],
    live: "https://jkresultportal.vercel.app/",
  },
  {
    slug: "john-kennedy-schools",
    image: "/projects/john-kennedy-schools.webp",
    imagePosition: "50% 50%",
    name: "John Kennedy Schools",
    description: "The website for a nursery, primary and secondary school in Surulere, Lagos, with academics, online admissions registration, news and a result portal link.",
    category: "School website",
    year: "2026",
    stack: ["Next.js", "TypeScript", "Supabase", "Framer Motion", "Tailwind CSS"],
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
    stack: ["Next.js", "Supabase", "PostgreSQL", "TypeScript"],
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
    stack: ["React.js (Vite)", "Framer Motion", "Supabase", "Tailwind CSS"],
    live: "https://directory-sage-alpha.vercel.app/",
  },
  {
    slug: "script-benin",
    image: "/projects/script-benin.webp",
    name: "Script Experience Benin 2026",
    description: "A trip-planning site for a group journey from Lagos to Cotonou: countdown, itinerary, packing list, stays, a vote on transport and payments, all in one place.",
    category: "Event platform",
    year: "2026",
    stack: ["React.js (Vite)", "Supabase", "Framer Motion", "Tailwind CSS"],
    live: "https://benin-trip.vercel.app/",
  },
];

export const skillRows = [
  { label: "Frontend", items: ["React (Vite)", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"], dur: 38, rev: false },
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

/** Testimonials: wording is the author's own, shown verbatim. */
export const testimonials = [
  {
    name: "Toluwani Ogundele",
    role: "Founder, Elevouth",
    initials: "TO",
    photo: "/testimonials/toluwani-ogundele.webp",
    pull: "From its simplicity and functionality to the overall look and user experience, he did an amazing job bringing our vision to life.",
    paragraphs: [
      "Divine is one of the amazing developers I’ve had the pleasure of working with, and his contributions to Elevouth and Elevouth Labs have been immense.",
      "Last year, he worked with me on the development of Elevouth’s website, and till today, we still receive compliments from people who visit the website. From its simplicity and functionality to the overall look and user experience, he did an amazing job bringing our vision to life.",
      "He also developed the event page for Global Talent Summit 2025, and that was another project he delivered really well.",
      "One thing I particularly appreciate about Divine is how proactive and fast he is when it comes to delivery. Sometimes, I see a task that I expect will take a while, and before you know it, Divine is already back with a working solution. And it's not just about speed. The quality of his work is impressive, and we rarely have issues with his deliverables.",
      "Earlier this year, he also led the development team at Elevouth Labs, working on one of our software products, and he did a great job in that capacity.",
      "Beyond his technical skills, Divine is willing to learn, open to new ideas, and always looking for ways to get better. He’s someone I’ve genuinely enjoyed working with, and I look forward to seeing all the amazing things he’ll go on to build.",
    ],
  },
  {
    name: "Favour Osaro",
    role: "IT Project Manager",
    initials: "FO",
    photo: "/testimonials/favour-osaro.webp",
    pull: "He puts the quality of the work before money, respects deadlines, and is sincere and down to earth.",
    paragraphs: [
      "Working with Divine has been a genuine pleasure. We have delivered several IT projects together, and he consistently stands out as one of the most reliable front-end developers I have worked with.",
      "Divine is patient, detail-oriented and an excellent communicator. He keeps the team informed, asks the right questions, and makes collaboration easy. He is open to feedback and always eager to grow.",
      "What I value most is his character. He puts the quality of the work before money, respects deadlines, and is sincere and down to earth. Any team or organisation would be fortunate to have Divine on board.",
    ],
  },
];
