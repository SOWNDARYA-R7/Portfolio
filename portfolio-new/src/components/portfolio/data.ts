const dev = (n: string, v = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${n}/${n}-${v}.svg`;

export const profile = {
  name: "Sowndarya R",
  initials: "SR",
  roles: ["Full Stack Developer", "Backend Developer", "Data Analytics Enthusiast"],
  intro:
    "Computer Science & Engineering student at KIT Coimbatore, building high-performance full-stack web platforms and applying machine learning to real-world data problems.",
  email: "kit28.24cs165@gmail.com",
  phone: "+91 7550332156",
  location: "Coimbatore, Tamil Nadu, India",
  linkedin: "http://www.linkedin.com/in/sowndaryar",
  leetcode: "https://leetcode.com/u/Kitcs165/",
  codechef: "https://www.codechef.com/users/kit28csa165",
  codolio: "https://codolio.com/profile/Kit28.bcs165",
  github: "https://github.com/SOWNDARYA-R7",
};

export const stats = [
  { label: "Current CGPA", value: 8.56, decimals: 2, suffix: "" },
  { label: "LeetCode Solved", value: 300, decimals: 0, suffix: "+" },
  { label: "CodeChef Solved", value: 800, decimals: 0, suffix: "+" },
  { label: "Contests Attended", value: 59, decimals: 0, suffix: "" },
];

export const interests = [
  "Full-stack web platforms",
  "REST API design",
  "Machine learning & NLP",
  "Data visualisation",
];

export const education = [
  {
    institution: "KIT – Kalaignarkarunanidhi Institute of Technology, Coimbatore",
    degree: "B.E. Computer Science & Engineering",
    year: "2024 – 2028",
    cgpa: "8.56 / 10",
    coursework: ["Software Development", "Operating Systems", "DBMS", "OOPS"],
  },
];

export const achievements = [
  { title: "DevJams 48-Hour Hackathon — Finalist", org: "VIT Campus" },
  { title: "Code Debugging — 2nd Prize", org: "KGiSL" },
  { title: "Treasure Hunt Coding — 2nd Prize", org: "SREC" },
  { title: "Diamond & Golden Badges", org: "100+ day streaks · 50+ weekly contests" },
  { title: "Shortlisted — Infosys Springboard Virtual Internship", org: "Infosys" },
  {
    title: "Recognised for communication & leadership",
    org: "5+ senior professionals · Team Everest",
  },
  { title: "IEEE Student Member", org: "IEEE Madras Section" },
];

export const certifications = [
  {
    title: "Problem Solving Through Programming in C",
    org: "NPTEL",
    year: "2025",
    url: "https://drive.google.com/file/d/19l6FJe0czzUJaajYTVC2fjes2-hF593h/view?usp=sharing",
  },
  {
    title: "Full Stack Development",
    org: "Novi-Tech",
    year: "2025",
    url: "https://drive.google.com/file/d/1XOVUGpS6u4XwJFYAChkONZIdzzz1Y6KZ/view?usp=sharing",
  },
  {
    title: "Java Foundation",
    org: "Infosys",
    year: "2026",
    url: "https://drive.google.com/file/d/1F_MUG7gq6qqTFB6drC13Oak91cWM832U/view?usp=sharing",
  },
  {
    title: "Python Essentials 1",
    org: "Cisco",
    year: "2026",
    url: "https://drive.google.com/file/d/1jEoNZsYoshKHayPZoCtQtRWBw_BB4bMX/view?usp=sharing",
  },
  {
    title: "Decision Making",
    org: "Team Everest",
    year: "2026",
    url: "https://drive.google.com/file/d/1f9_uuGmOLJfaksQaWbzYMP4k1vzy7JSR/view?usp=sharing",
  },
];

export const competitive = [
  {
    platform: "LeetCode",
    url: "https://leetcode.com/u/Kitcs165/",
    lines: ["Max rating 1455", "300+ problems solved", "Top 86.07% globally"],
  },
  {
    platform: "CodeChef",
    url: "https://www.codechef.com/users/kit28csa165",
    lines: ["Max DSA rating 1464 · 2 Star", "800+ problems solved", "59 contests attended"],
  },
];

export const volunteering = [
  {
    org: "Team Everest",
    role: "Peer Aptitude Tutor",
    desc: "Taught aptitude to peers in the First Penguin Class at Team Everest coaching.",
  },
  {
    org: "KIT Coimbatore",
    role: "Programming Mentor",
    desc: "Taught programming fundamentals and coding platforms to junior students through hands-on exercises.",
  },
  {
    org: "College Social Club",
    role: "Volunteer",
    desc: "Took part in campus cleanliness and community service initiatives.",
  },
];

export type Tech = { name: string; icon: string; invert?: boolean };
export const tech = {
  html: { name: "HTML5", icon: dev("html5") },
  css: { name: "CSS3", icon: dev("css3") },
  js: { name: "JavaScript", icon: dev("javascript") },
  react: { name: "React", icon: dev("react") },
  node: { name: "Node.js", icon: dev("nodejs") },
  express: { name: "Express.js", icon: dev("express"), invert: true },
  python: { name: "Python", icon: dev("python") },
  c: { name: "C", icon: dev("c") },
  cpp: { name: "C++", icon: dev("cplusplus") },
  java: { name: "Java", icon: dev("java") },
  mongodb: { name: "MongoDB", icon: dev("mongodb") },
  mysql: { name: "MySQL", icon: dev("mysql") },
  git: { name: "Git", icon: dev("git") },
  github: { name: "GitHub", icon: dev("github"), invert: true },
  vscode: { name: "VS Code", icon: dev("vscode") },
  powerbi: { name: "Power BI", icon: "https://img.icons8.com/color/96/power-bi.png" },
  figma: { name: "Figma", icon: dev("figma") },
  bootstrap: { name: "Bootstrap", icon: dev("bootstrap") },
  tailwind: { name: "Tailwind CSS", icon: dev("tailwindcss") },
  postman: { name: "Postman", icon: dev("postman") },
  pytorch: { name: "PyTorch", icon: dev("pytorch") },
  fastapi: { name: "FastAPI", icon: dev("fastapi") },
  sklearn: { name: "scikit-learn", icon: dev("scikitlearn") },
  spring: { name: "Spring Boot", icon: dev("spring") },
  jwt: { name: "JWT", icon: "https://cdn.simpleicons.org/jsonwebtokens/8b5cf6" },
} satisfies Record<string, Tech>;
export type TechKey = keyof typeof tech;

export const orbitKeys: TechKey[] = [
  "html",
  "css",
  "js",
  "react",
  "node",
  "express",
  "python",
  "c",
  "java",
  "mongodb",
  "mysql",
  "git",
  "github",
  "vscode",
  "powerbi",
  "figma",
  "bootstrap",
  "tailwind",
];

export const skillGroups = [
  {
    title: "Frontend Development",
    items: [
      ["html", 90],
      ["css", 85],
      ["js", 85],
      ["react", 82],
      ["tailwind", 80],
      ["bootstrap", 75],
    ],
  },
  {
    title: "Backend Development",
    items: [
      ["node", 85],
      ["express", 85],
      ["spring", 65],
      ["fastapi", 70],
      ["jwt", 75],
    ],
  },
  {
    title: "Programming Languages",
    items: [
      ["cpp", 85],
      ["c", 80],
      ["python", 82],
      ["java", 75],
    ],
  },
  {
    title: "Databases",
    items: [
      ["mongodb", 82],
      ["mysql", 78],
    ],
  },
  {
    title: "Tools & Technologies",
    items: [
      ["git", 85],
      ["github", 85],
      ["vscode", 90],
      ["postman", 80],
      ["figma", 65],
    ],
  },
  {
    title: "Data Analytics",
    items: [
      ["powerbi", 82],
      ["python", 80],
      ["sklearn", 70],
    ],
  },
] as const satisfies readonly { title: string; items: readonly (readonly [TechKey, number])[] }[];

export const experiences = [
  {
    role: "Virtual Intern — Java Full Stack (Spring Boot, React & SQL)",
    company: "Infosys Springboard",
    date: "Ongoing · 2 months · Remote",
    points: [
      "Building CarbonTrack, a web platform for environmental impact tracking and sustainability analytics, now in Milestone 3 (Week 5).",
      "Working in a team-based Agile (Scrum) workflow with daily standups, mentor feedback and iterative module milestones.",
    ],
    stack: ["java", "spring", "react", "mysql"] as TechKey[],
  },
  {
    role: "Backend Developer Intern — MERN Stack",
    company: "Clar Technologies, Coimbatore",
    date: "June 2026",
    points: [
      "Built and maintained RESTful APIs using Node.js and Express.js, improving frontend–backend data flow and reliability.",
      "Designed MongoDB schemas and implemented CRUD operations.",
      "Collaborated in Agile sprints with daily standups and peer code reviews.",
    ],
    stack: ["node", "express", "mongodb", "postman"] as TechKey[],
  },
  {
    role: "Data Analytics Intern — Power BI",
    company: "Appin Technology",
    date: "1 month",
    points: [
      "Executed end-to-end BI workflows: Power Query transformation, DAX measures and interactive sales dashboards for decision-making.",
    ],
    stack: ["powerbi"] as TechKey[],
  },
];

export const projects = [
  {
    title: "Manufacturing Quality Analysis & Defect Prediction Platform",
    category: "AI / ML",
    desc: "End-to-end predictive maintenance and quality analytics platform analyzing 10,000 production records to forecast machine failures with SHAP root-cause explanations and BI insights.",
    points: [
      "EDA and statistical testing (Chi-square, Mann-Whitney U) on 10,000 AI4I production records using Pandas to isolate failure drivers like torque and tool wear.",
      "FastAPI ML service benchmarking Logistic Regression, Random Forest, and XGBoost with SHAP explainability, integrated with a Node.js/Express + MongoDB API for real-time defect alerts.",
      "Power BI dashboard built on a fact/dimension star schema with DAX measures tracking defect rates, production line performance, and root-cause trends.",
    ],
    stack: ["python", "fastapi", "node", "express", "mongodb"] as TechKey[],
    tags: ["XGBoost", "SHAP", "Power BI", "In Progress"],
    metric: "10K+ Records Analyzed",
    github: "",
  },
  {
    title: "AI-Powered Government Scheme Gap Detector",
    category: "AI / ML",
    desc: "Proactive welfare-inclusion platform that finds eligible citizens overlooked by government schemes, with explainable ML reasons for every flag.",
    points: [
      "Python FastAPI microservice combining ML eligibility prediction with SHAP explainability.",
      "Node.js + Express REST backend on MongoDB for citizens, schemes, recommendations and verification status.",
      "React Officer Dashboard for human-in-the-loop approval.",
    ],
    stack: ["react", "node", "express", "python", "fastapi", "mongodb"] as TechKey[],
    tags: ["SHAP", "Explainable AI"],
    metric: "Explainable AI",
    github: "",
  },
  {
    title: "AI-Based SMS Spam Detection (xLSTM)",
    category: "AI / ML",
    desc: "Hybrid mLSTM + sLSTM model that classifies SMS messages as ham or spam, reaching 95.94% test accuracy.",
    points: [
      "NLP preprocessing with 128-dimensional embeddings.",
      "Evaluated with accuracy, precision, recall, F1-score and confusion matrix.",
      "Training/inference analysis: loss, accuracy, parameter count and CPU latency.",
    ],
    stack: ["python", "pytorch", "sklearn"] as TechKey[],
    tags: ["NLP", "xLSTM"],
    metric: "95.94% accuracy",
    github: "https://github.com/SOWNDARYA-R7/SMS_Spam_detection_in_xLSTM",
  },
  {
    title: "CareerHub — Learning & Career Discovery",
    category: "Full Stack",
    desc: "Full-stack career platform with domain-based learning resources, internship discovery and tech news, guided by Caro the career mascot.",
    points: [
      "Internship discovery with location and work-mode filters; technology news via SerpApi.",
      "MongoDB-based caching cuts repeated API requests and speeds up responses.",
      "Caro, a friendly mascot, gives interactive step-by-step guidance.",
    ],
    stack: ["react", "node", "express", "mongodb", "js"] as TechKey[],
    tags: ["SerpApi"],
    metric: "MongoDB caching",
    github: "https://github.com/SOWNDARYA-R7/CareerHUB",
  },
  {
    title: "Zoho-Style CRM System",
    category: "Full Stack",
    desc: "End-to-end customer workflow manager with JWT authentication and a custom validation engine.",
    points: [
      "Modular lead and contact pipeline management with automated stage progression.",
      "Secure authentication using JWT tokens and role-based permissions.",
      "Optimized query performance for contact records with MongoDB indexing.",
    ] as string[],
    stack: ["react", "node", "mongodb", "jwt"] as TechKey[],
    tags: ["JWT", "CRM"],
    metric: "JWT auth",
    github: "https://github.com/SOWNDARYA-R7",
  },
  {
    title: "Lunara — Digital Art Gallery",
    category: "Full Stack",
    desc: "Responsive web application for showcasing modern art with full backend CRUD infrastructure.",
    points: [
      "Dynamic gallery grid with responsive image layouts and high-fidelity modal previews.",
      "RESTful API endpoints for artwork curation, artist biographies, and tag filters.",
      "Clean UI design with smooth micro-interactions and mobile-first responsiveness.",
    ] as string[],
    stack: ["mongodb", "express", "react", "node"] as TechKey[],
    tags: ["REST API", "MERN"],
    metric: "MERN Stack",
    github: "https://github.com/SOWNDARYA-R7",
  },
];

export const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "experience", label: "Experience" },
  { id: "volunteering", label: "Volunteering" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
