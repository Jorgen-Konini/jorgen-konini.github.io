// All site content lives here — edit this file to update the site.

export const site = {
  name: "Jorgen Konini",
  role: "Software Engineer — React & React Native",
  email: "jorgenkonini@gmail.com",
  github: "https://github.com/Jorgen-Konini",
  githubLabel: "github.com/Jorgen-Konini",
  linkedin: "https://www.linkedin.com/in/jorgen-konini-635722255",
  linkedinLabel: "linkedin.com/in/jorgen-konini",
  location: "Based in Albania",
  availability: "Open to remote",
  years: "5+ years experience",
};

export const about = {
  heading: "Engineer with a product mindset.",
  paragraphs: [
    "I work across the whole stack — React and React Native frontends in TypeScript, Go and PostgreSQL backends — but what sets my work apart is the product layer in between: breaking down requirements, writing user stories, running stakeholder demos, and shipping on two-week cycles.",
    "Over the last five-plus years I have delivered production platforms for US healthcare, HR, and legal companies — leading migrations, rewrites, and frontend teams along the way.",
  ],
  stats: [
    { value: "5+", label: "years building production software" },
    { value: "3", label: "industries shipped for — healthcare, HR, legal" },
    { value: "2", label: "major legacy rewrites led — AngularJS→React, jQuery→React" },
  ],
};

export const experience = [
  {
    title: "Software Engineer · Ritech International AG",
    period: "Dec 2021 — Present",
    tagline: "US healthcare & HRA platforms",
    bullets: [
      "Engineered and maintained two large-scale production platforms serving US healthcare providers — a patient pharmacy services app (prescription refills, medication transfers, secure messaging) and an HRA employee reimbursement web platform, in React, React Native, and TypeScript.",
      "Led a full TypeScript migration of the frontend codebase and drove a rewrite of core AngularJS modules to React.",
      "Participated in sprint planning, broke feature specs into dev tasks, and presented release demos to stakeholders on two-week cycles.",
      "Mentored junior developers through code reviews, pair programming, and architectural guidance.",
    ],
    tags: ["React Native", "React", "TypeScript", "AngularJS"],
  },
  {
    title: "React Developer & Frontend Team Lead · Rightsearch & Advocar",
    period: "Nov 2020 — Aug 2021",
    tagline: "Legal services platform rebuild",
    bullets: [
      "Led the full frontend rebuild of a legacy legal services platform, replacing an outdated jQuery/CakePHP stack with a modern React and TypeScript architecture.",
      "Assigned and coordinated frontend tasks across the team, ran pre-release demos, and managed communication between the dev team and product stakeholders.",
      "Delivered the rewrite on schedule across multiple sprint cycles, with demo checkpoints before each release.",
    ],
    tags: ["React", "TypeScript", "Team lead"],
  },
  {
    title: "Web & Mobile Application Developer · Aldek Italia",
    period: "Mar 2021 — Nov 2021",
    tagline: "Social & membership platform",
    bullets: [
      "Built a web and mobile social networking platform with member management, subscription tracking, fee payments, file approvals, and connection matching.",
    ],
    tags: ["React", "React Native", "Laravel", "MySQL"],
  },
  {
    title: "Freelance Software Developer · Independent",
    period: "Nov 2019 — Mar 2021",
    tagline: "Custom web applications",
    bullets: [
      "Delivered custom web application projects for clients, managing the full project lifecycle from requirements gathering through delivery.",
    ],
    tags: ["Web apps", "Full lifecycle"],
  },
];

export const projects = [
  {
    name: "gymplatform-backend",
    url: "https://github.com/Jorgen-Konini/gymplatform-backend",
    description:
      "Multi-tenant gym SaaS backend in Go — PostgreSQL row-level security for tenant isolation, RBAC, Redis job queue, AI coaching via Claude with token budgets and output validation, OpenTelemetry, and testcontainers integration tests.",
    tags: ["Go", "PostgreSQL", "Redis", "Claude API"],
  },
  {
    name: "gymplatform-frontend",
    url: "https://github.com/Jorgen-Konini/gymplatform-frontend",
    description:
      "React and React Native client for the gym platform — one TypeScript codebase serving members and coaches on web and mobile.",
    tags: ["React", "React Native", "TypeScript"],
  },
  {
    name: "Pharmacy app & HRA platform",
    url: null,
    description:
      "Patient pharmacy app and HRA reimbursement platform serving US healthcare providers — built at Ritech International, including a full TypeScript migration and AngularJS-to-React rewrite.",
    tags: ["React Native", "React", "TypeScript"],
  },
  {
    name: "Legal services platform",
    url: null,
    description:
      "Ground-up rebuild of a legal services platform for Rightsearch & Advocar — led the frontend team replacing a legacy jQuery/CakePHP stack with React and TypeScript.",
    tags: ["React", "TypeScript"],
  },
];

export const skills = [
  { group: "Frontend", items: ["React", "React Native", "TypeScript", "JavaScript", "HTML5", "CSS3"] },
  { group: "Backend", items: ["Go", "REST APIs", "C#", "PHP / Laravel"] },
  { group: "Data", items: ["PostgreSQL", "MySQL", "Redis"] },
  { group: "AI", items: ["LLM integration", "AI agents", "Prompt engineering"] },
  { group: "Tooling", items: ["Git", "Docker", "Xcode", "Android Studio", "Jira"] },
  { group: "Product", items: ["Sprint planning", "User stories", "Stakeholder demos", "Agile / Scrum"] },
];

export const education = [
  {
    title: "MSc Management Information Systems",
    org: "Universiteti Mesdhetar i Shqipërisë, Tirana",
    period: "2018 — 2020",
    kind: "degree",
  },
  {
    title: "BSc Computer Engineering",
    org: "Epoka University, Tirana",
    period: "2015 — 2018",
    kind: "degree",
  },
  {
    title: "AI Agents Fundamentals",
    org: "Hugging Face",
    period: "Feb 2025",
    kind: "certification",
  },
];
