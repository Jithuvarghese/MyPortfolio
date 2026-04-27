export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: "web.png",
  },
  {
    title: "React Developer",
    icon: "mobile.png",
  },
  {
    title: "Cloud Engineer",
    icon: "backend.png",
  },
  {
    title: "Data Engineer",
    icon: "creator.png",
  },
];

const technologies = [
  { name: "Python", icon: "python.png" },
  { name: "JavaScript", icon: "javascript.png" },
  { name: "React JS", icon: "reactjs.png" },
  { name: "TypeScript", icon: "typescript.png" },
  { name: "MongoDB", icon: "mongodb.png" },
  { name: "MySQL", icon: "mongodb.png" },
  { name: "git", icon: "git.png" },
  { name: "docker", icon: "docker.png" },
  { name: "Azure", icon: "kubernetes.png" },
  { name: "AWS", icon: "kubernetes.png" },
  { name: "Django", icon: "nodejs.png" },
  { name: "TensorFlow", icon: "threejs.svg" },
  { name: "C", icon: "c.png" },
  { name: "C++", icon: "cpp.png" },
  { name: "Flutter", icon: "reactjs.png" },
  { name: "Power BI", icon: "nextjs.png" },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Corestrat",
    icon: "web.png",
    iconBg: "#0f3460",
    date: "Jan 2026 – Present",
    points: [
      "Built and scaled a real-time fintech analytics and trading platform across web (React, Redux) and mobile (Flutter).",
      "Designed modular, high-performance state architecture supporting portfolios, market data, authentication, and trading workflows.",
      "Delivered production-grade UX using Material Design with theming, localization, secure storage, and fully responsive layouts.",
      "Implemented secure authentication flows and real-time data pipelines for financial data processing.",
    ],
  },
  {
    title: "MCA Student",
    company_name: "CHRIST (Deemed to be University)",
    icon: "christ.png",
    iconBg: "#0d2137",
    date: "Jul 2024 – Present",
    points: [
      "Pursuing Master of Computer Applications with focus on advanced computing and software engineering.",
      "Serving as Student Councillor for the academic year 2025–2026.",
      "Researching Hand Gesture Recognition for Sign Language Translation; presented at ICETCSMA'25.",
      "Developing cloud-native and full-stack applications using modern frameworks and technologies.",
    ],
  },
  {
    title: "Cloud & Infra Engineer (Backup Administrator)",
    company_name: "Larsen & Toubro Infotech (LTI)",
    icon: "backend.png",
    iconBg: "#162032",
    date: "Sep 2022 – Jul 2024",
    points: [
      "Configured and managed Commvault backup systems across Windows, Linux, SQL Server, Oracle, and Exchange environments.",
      "Executed disaster recovery strategies achieving a 99.9% backup success rate with full compliance reporting.",
      "Managed IT infrastructure across multi-cloud environments including Azure and AWS EC2.",
      "Automated backup verification scripts and monitoring dashboards to reduce manual overhead.",
    ],
  },
  {
    title: "Software Development Trainee",
    company_name: "Bell NeuvoTech LLP",
    icon: "event.png",
    iconBg: "#1c1c2e",
    date: "Jul 2021 – Oct 2021",
    points: [
      "Designed and deployed a client portfolio website using HTML, CSS, and WordPress.",
      "Contributed to full-stack development projects using WordPress and CodeIgniter framework.",
      "Collaborated with the development team on client deliverables and feature implementations.",
      "Gained hands-on exposure to professional software development workflows and best practices.",
    ],
  },
  {
    title: "BCA Graduate",
    company_name: "Saintgits College of Applied Sciences",
    icon: "kristu.png",
    iconBg: "#1a2e1a",
    date: "Jun 2019 – Jun 2022",
    points: [
      "Completed Bachelor of Computer Applications with 84.2% distinction.",
      "Awarded Best Outgoing BCA Student (2019–22) by the college.",
      "Published research on lung cancer detection using deep learning at ICAMCTT 2021; featured in IJARTET journal.",
      "Served as University Councillor (2021–2022) and led student academic initiatives.",
    ],
  },
];

const projects = [
  {
    name: "BookBuddy",
    description:
      "AI-powered book discovery app with dynamic search and recommendation features. Built with React and external APIs, featuring reusable components, smart filtering, favorites management, and robust error handling.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "axios", color: "green-text-gradient" },
      { name: "css3", color: "pink-text-gradient" },
    ],
    image: "/images/bookbuddy.png",
    source_code_link: "https://github.com/Jithuvarghese",
    live_demo_link: "https://github.com/Jithuvarghese",
  },
  {
    name: "Hand Gesture Recognition",
    description:
      "Real-time ISL (Indian Sign Language) gesture recognition system translating hand gestures into text and speech using computer vision and deep learning. Presented at ICETCSMA'25.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "opencv", color: "green-text-gradient" },
      { name: "tensorflow", color: "pink-text-gradient" },
    ],
    image: "/images/scheduler.png",
    source_code_link: "https://github.com/Jithuvarghese",
    live_demo_link: "https://github.com/Jithuvarghese",
  },
  {
    name: "Financial Data Lakehouse",
    description:
      "End-to-end ETL pipeline using Bronze–Silver–Gold medallion architecture for financial data processing, with analytical dashboards built in Power BI for actionable business intelligence.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "pandas", color: "green-text-gradient" },
      { name: "power bi", color: "pink-text-gradient" },
      { name: "mysql", color: "orange-text-gradient" },
    ],
    image: "/images/annapurna.png",
    source_code_link: "https://github.com/Jithuvarghese",
    live_demo_link: "https://github.com/Jithuvarghese",
  },
  {
    name: "Flight Explorer",
    description:
      "Modern flight tracking web app built with React and Vite. Integrates Aviationstack for live flight data, supports search and filtering, detailed modal views, and a persistent watchlist with localStorage.",
    tags: [
      { name: "react 19", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "tailwind css", color: "pink-text-gradient" },
      { name: "aviationstack api", color: "orange-text-gradient" },
    ],
    image: "/images/flight.png",
    source_code_link: "https://github.com/Jithuvarghese/Flightexplorer.git",
    live_demo_link: "https://flightexplorer-9l6ufwqb7-jithu-vargheses-projects.vercel.app/",
  },
  {
    name: "CityReport",
    description:
      "Map-driven city issue reporting app with a mobile-first experience for discovering, reporting, and tracking civic problems. Includes geolocation, auth, comments, support/upvotes, status tracking, and PWA support.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "vite", color: "green-text-gradient" },
      { name: "tailwind css", color: "pink-text-gradient" },
      { name: "leaflet", color: "orange-text-gradient" },
    ],
    image: "/images/city%20report.png",
    source_code_link: "https://github.com/Jithuvarghese/Cityhub",
    live_demo_link: "https://cityhub-bd0e6j0tf-jithu-vargheses-projects.vercel.app/",
  },
];

const testimonials = [
  {
    testimonial:
      "Jithu's analytical mindset and dedication to research are truly impressive. His work on gesture recognition showcased exceptional problem-solving skills and a strong grasp of applied machine learning.",
    name: "Dr. Anita Joseph",
    designation: "Associate Professor",
    company: "CHRIST University",
    image: "professor1.jpg",
  },
  {
    testimonial:
      "Working with Jithu at LTI was a great experience. His meticulous approach to managing cloud infrastructure and his commitment to 99.9% uptime made him a highly reliable team member.",
    name: "Naveen Rajan",
    designation: "Senior Cloud Architect",
    company: "LTI Mindtree",
    image: "colleague1.jpg",
  },
  {
    testimonial:
      "Jithu brings a rare combination of cloud expertise and full-stack development skills. His contributions to our fintech platform have been instrumental in delivering high-quality, scalable solutions.",
    name: "Priya Krishnan",
    designation: "Engineering Lead",
    company: "Corestrat",
    image: "colleague2.jpg",
  },
];

const skillCategories = [
  {
    title: "Languages & Web",
    skills: ["Python", "JavaScript", "PHP", "C/C++", "SQL", "HTML", "TypeScript", "React"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Redux", "Flutter", "Django", "TensorFlow", "OpenCV", "Pandas", "NumPy"],
  },
  {
    title: "Cloud & Tools",
    skills: ["Azure", "AWS EC2", "Docker", "Git", "Power BI", "Postman", "Firebase", "MySQL", "MongoDB", "Commvault"],
  },
];

export { services, technologies, experiences, testimonials, projects, skillCategories }; 