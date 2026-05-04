export type LocaleCode = "en" | "hi" | "ar" | "ml" | "fr";
export type ThemeMode = "dark" | "light";

export interface NavLinkItem {
  id: string;
  title: string;
}

export interface ServiceItem {
  title: string;
  icon: string;
}

export interface ExperienceItem {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

export interface ProjectItem {
  name: string;
  description: string;
  tags: Array<{ name: string; color: string }>;
  image: string;
  source_code_link: string;
  live_demo_link: string;
}

export interface SkillCategoryItem {
  title: string;
  skills: string[];
}

export interface Dictionary {
  languageName: string;
  dir: "ltr" | "rtl";
  meta: {
    title: string;
    description: string;
  };
  navLinks: NavLinkItem[];
  hero: {
    greeting: string;
    role: string;
    summary: string;
    connect: string;
    resume: string;
  };
  about: {
    intro: string;
    heading: string;
    body: string;
    certificationsHeading: string;
    certifications: string[];
  };
  experience: {
    intro: string;
    heading: string;
  };
  projects: {
    intro: string;
    heading: string;
    body: string;
    sourceCodeAria: string;
    liveDemoAria: string;
  };
  skills: {
    intro: string;
    heading: string;
    body: string;
  };
  contact: {
    intro: string;
    heading: string;
    successTitle: string;
    successBody: string;
    labels: {
      name: string;
      email: string;
      message: string;
      contactInfo: string;
      phone: string;
      location: string;
      resume: string;
      downloadResume: string;
      send: string;
      sending: string;
      emailTitle: string;
    };
    placeholders: {
      name: string;
      email: string;
      message: string;
    };
    errors: {
      nameRequired: string;
      emailRequired: string;
      emailInvalid: string;
      messageRequired: string;
      sendFailed: string;
    };
  };
  loader: {
    role: string;
  };
  data: {
    services: ServiceItem[];
    experiences: ExperienceItem[];
    projects: ProjectItem[];
    skillCategories: SkillCategoryItem[];
  };
}

const sharedProjects: ProjectItem[] = [
  {
    name: "Dubai Mall Interactive Sales Deck",
    description:
      "Premium scene-based web presentation built with Next.js, TypeScript, GSAP, Lenis, and Framer Motion to showcase Dubai Mall through cinematic storytelling, interactive navigation, data visualizations, and modular inquiry flows for leasing, sponsorship, and events.",
    tags: [
      { name: "next.js", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "gsap", color: "pink-text-gradient" },
      { name: "framer motion", color: "orange-text-gradient" },
    ],
    image: "/images/dubaimall.png",
    source_code_link: "https://github.com/Jithuvarghese",
    live_demo_link: "https://dubaimall-three.vercel.app/",
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
      "Real-time ISL gesture recognition system that translates hand gestures into text and speech using computer vision and deep learning. Presented at ICETCSMA'25.",
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
      "End-to-end ETL pipeline using Bronze-Silver-Gold medallion architecture for financial data processing with Power BI dashboards.",
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
];

const sharedSkillCategories: SkillCategoryItem[] = [
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

const sharedServices: ServiceItem[] = [
  { title: "Software Engineer", icon: "web.png" },
  { title: "React Developer", icon: "mobile.png" },
  { title: "Cloud Engineer", icon: "backend.png" },
  { title: "Data Engineer", icon: "creator.png" },
];

const sharedExperiences: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company_name: "Corestrat",
    icon: "web.png",
    iconBg: "#0f3460",
    date: "Jan 2026 - Present",
    points: [
      "Built and scaled a real-time fintech analytics and trading platform across web and mobile.",
      "Designed modular, high-performance state architecture for portfolios, market data, and trading workflows.",
      "Delivered production UX with theming, localization, secure storage, and responsive layouts.",
      "Implemented secure authentication flows and real-time data pipelines for financial processing.",
    ],
  },
  {
    title: "MCA Student",
    company_name: "CHRIST (Deemed to be University)",
    icon: "christ.png",
    iconBg: "#0d2137",
    date: "Jul 2024 - Present",
    points: [
      "Pursuing Master of Computer Applications with a focus on advanced computing and software engineering.",
      "Serving as Student Councillor for the academic year 2025-2026.",
      "Researching hand gesture recognition for sign language translation.",
      "Developing cloud-native and full-stack applications using modern frameworks.",
    ],
  },
  {
    title: "Cloud & Infra Engineer",
    company_name: "Larsen & Toubro Infotech (LTI)",
    icon: "backend.png",
    iconBg: "#162032",
    date: "Sep 2022 - Jul 2024",
    points: [
      "Managed Commvault backup systems across Windows, Linux, SQL Server, Oracle, and Exchange.",
      "Executed disaster recovery strategies with 99.9% backup success and compliance reporting.",
      "Managed IT infrastructure across Azure and AWS EC2.",
      "Automated backup verification scripts and monitoring dashboards.",
    ],
  },
  {
    title: "Software Development Trainee",
    company_name: "Bell NeuvoTech LLP",
    icon: "event.png",
    iconBg: "#1c1c2e",
    date: "Jul 2021 - Oct 2021",
    points: [
      "Designed and deployed a client portfolio website using HTML, CSS, and WordPress.",
      "Contributed to WordPress and CodeIgniter full-stack features.",
      "Collaborated with the team on client deliverables and implementations.",
      "Gained hands-on exposure to professional software workflows.",
    ],
  },
  {
    title: "BCA Graduate",
    company_name: "Saintgits College of Applied Sciences",
    icon: "kristu.png",
    iconBg: "#1a2e1a",
    date: "Jun 2019 - Jun 2022",
    points: [
      "Completed Bachelor of Computer Applications with distinction.",
      "Awarded Best Outgoing BCA Student (2019-22).",
      "Published research on lung cancer detection using deep learning.",
      "Served as University Councillor and led student initiatives.",
    ],
  },
];

const sharedExperiencesHi: ExperienceItem[] = [
  {
    title: "सॉफ्टवेयर इंजीनियर",
    company_name: "Corestrat",
    icon: "web.png",
    iconBg: "#0f3460",
    date: "Jan 2026 - Present",
    points: [
      "वेब और मोबाइल पर रियल-टाइम फिनटेक प्लेटफॉर्म विकसित और स्केल किया।",
      "पोर्टफोलियो, मार्केट डेटा और ट्रेडिंग के लिए उच्च-प्रदर्शन स्टेट आर्किटेक्चर बनाया।",
      "थीमिंग, लोकलाइजेशन और रिस्पॉन्सिव UX के साथ प्रोडक्शन समाधान दिए।",
      "सुरक्षित ऑथ फ्लो और रियल-टाइम डेटा पाइपलाइन लागू की।",
    ],
  },
  {
    title: "MCA छात्र",
    company_name: "CHRIST (Deemed to be University)",
    icon: "christ.png",
    iconBg: "#0d2137",
    date: "Jul 2024 - Present",
    points: [
      "उन्नत कंप्यूटिंग और सॉफ्टवेयर इंजीनियरिंग पर फोकस के साथ MCA कर रहा हूं।",
      "2025-26 के लिए स्टूडेंट काउंसलर के रूप में सेवा दे रहा हूं।",
      "साइन लैंग्वेज ट्रांसलेशन के लिए हैंड जेस्चर रिकग्निशन पर रिसर्च कर रहा हूं।",
      "आधुनिक फ्रेमवर्क के साथ क्लाउड-नेटिव और फुल-स्टैक ऐप्स बना रहा हूं।",
    ],
  },
  {
    title: "क्लाउड और इंफ्रा इंजीनियर",
    company_name: "Larsen & Toubro Infotech (LTI)",
    icon: "backend.png",
    iconBg: "#162032",
    date: "Sep 2022 - Jul 2024",
    points: [
      "Windows, Linux, SQL Server, Oracle और Exchange पर Commvault बैकअप मैनेज किए।",
      "99.9% बैकअप सफलता दर के साथ DR रणनीतियां लागू कीं।",
      "Azure और AWS EC2 पर इंफ्रास्ट्रक्चर का प्रबंधन किया।",
      "बैकअप वेरिफिकेशन और मॉनिटरिंग को ऑटोमेट किया।",
    ],
  },
  {
    title: "सॉफ्टवेयर डेवलपमेंट ट्रेनी",
    company_name: "Bell NeuvoTech LLP",
    icon: "event.png",
    iconBg: "#1c1c2e",
    date: "Jul 2021 - Oct 2021",
    points: [
      "HTML, CSS और WordPress का उपयोग करके क्लाइंट पोर्टफोलियो वेबसाइट बनाई।",
      "WordPress और CodeIgniter आधारित फुल-स्टैक फीचर्स में योगदान दिया।",
      "क्लाइंट डिलीवरी और फीचर इम्प्लीमेंटेशन में टीम के साथ काम किया।",
      "प्रोफेशनल सॉफ्टवेयर वर्कफ्लो का व्यावहारिक अनुभव प्राप्त किया।",
    ],
  },
  {
    title: "BCA स्नातक",
    company_name: "Saintgits College of Applied Sciences",
    icon: "kristu.png",
    iconBg: "#1a2e1a",
    date: "Jun 2019 - Jun 2022",
    points: [
      "BCA को उत्कृष्ट प्रदर्शन के साथ पूरा किया।",
      "Best Outgoing BCA Student (2019-22) पुरस्कार प्राप्त किया।",
      "डीप लर्निंग आधारित कैंसर डिटेक्शन पर शोध प्रकाशित किया।",
      "University Councillor के रूप में छात्र पहलों का नेतृत्व किया।",
    ],
  },
];

const sharedExperiencesAr: ExperienceItem[] = [
  {
    title: "مهندس برمجيات",
    company_name: "Corestrat",
    icon: "web.png",
    iconBg: "#0f3460",
    date: "Jan 2026 - Present",
    points: [
      "طورت منصة فنتك لحظية على الويب والجوال وقمت بتوسيعها.",
      "صممت بنية حالة عالية الأداء للمحافظ وبيانات السوق وسير التداول.",
      "قدمت تجربة مستخدم إنتاجية مع الثيمات والتوطين والتجاوب.",
      "نفذت تدفقات مصادقة آمنة وخطوط بيانات لحظية.",
    ],
  },
  {
    title: "طالب MCA",
    company_name: "CHRIST (Deemed to be University)",
    icon: "christ.png",
    iconBg: "#0d2137",
    date: "Jul 2024 - Present",
    points: [
      "أتابع درجة MCA مع تركيز على الحوسبة المتقدمة وهندسة البرمجيات.",
      "أعمل كممثل طلابي للعام الأكاديمي 2025-2026.",
      "أجري بحثا في التعرف على إشارات اليد لترجمة لغة الإشارة.",
      "أطور تطبيقات سحابية ومتكاملة باستخدام أطر حديثة.",
    ],
  },
  {
    title: "مهندس سحابة وبنية تحتية",
    company_name: "Larsen & Toubro Infotech (LTI)",
    icon: "backend.png",
    iconBg: "#162032",
    date: "Sep 2022 - Jul 2024",
    points: [
      "أدرت أنظمة Commvault عبر Windows وLinux وSQL Server وOracle وExchange.",
      "نفذت خطط التعافي من الكوارث بنسبة نجاح نسخ احتياطي 99.9%.",
      "أدرت البنية التحتية على Azure وAWS EC2.",
      "أتمتّ عمليات التحقق والمراقبة للنسخ الاحتياطي.",
    ],
  },
  {
    title: "متدرب تطوير برمجيات",
    company_name: "Bell NeuvoTech LLP",
    icon: "event.png",
    iconBg: "#1c1c2e",
    date: "Jul 2021 - Oct 2021",
    points: [
      "صممت ونشرت موقع محفظة عميل باستخدام HTML وCSS وWordPress.",
      "ساهمت في ميزات Full-stack باستخدام WordPress وCodeIgniter.",
      "تعاونت مع الفريق لتنفيذ تسليمات العملاء.",
      "اكتسبت خبرة عملية في سير عمل التطوير الاحترافي.",
    ],
  },
  {
    title: "خريج BCA",
    company_name: "Saintgits College of Applied Sciences",
    icon: "kristu.png",
    iconBg: "#1a2e1a",
    date: "Jun 2019 - Jun 2022",
    points: [
      "أكملت درجة BCA بتفوق.",
      "حصلت على جائزة أفضل خريج BCA للأعوام 2019-22.",
      "نشرت بحثا عن كشف سرطان الرئة باستخدام التعلم العميق.",
      "عملت كممثل طلابي وقُدت مبادرات طلابية.",
    ],
  },
];

const sharedExperiencesMl: ExperienceItem[] = [
  {
    title: "സോഫ്റ്റ്വെയർ എൻജിനീയർ",
    company_name: "Corestrat",
    icon: "web.png",
    iconBg: "#0f3460",
    date: "Jan 2026 - Present",
    points: [
      "വെബിലും മൊബൈലിലും റിയൽ-ടൈം ഫിൻടെക് പ്ലാറ്റ്‌ഫോം നിർമ്മിച്ച് സ്കെയിൽ ചെയ്തു.",
      "പോർട്ട്ഫോളിയോ, മാർക്കറ്റ് ഡാറ്റ, ട്രേഡിംഗ് വർക്ക്‌ഫ്ലോ എന്നിവയ്ക്കായി ഹൈ-പെർഫോർമൻസ് സ്റ്റേറ്റ് ആർക്കിടെക്ചർ രൂപകൽപ്പന ചെയ്തു.",
      "തീമിംഗ്, ലോക്കലൈസേഷൻ, സുരക്ഷിത സ്റ്റോറേജ് എന്നിവയോടെ പ്രൊഡക്ഷൻ UX നടപ്പാക്കി.",
      "സുരക്ഷിത ഓത് ഫ്ലോകളും റിയൽ-ടൈം ഡാറ്റ പൈപ്പ്‌ലൈൻകളും നടപ്പാക്കി.",
    ],
  },
  {
    title: "MCA വിദ്യാർത്ഥി",
    company_name: "CHRIST (Deemed to be University)",
    icon: "christ.png",
    iconBg: "#0d2137",
    date: "Jul 2024 - Present",
    points: [
      "അഡ്വാൻസ്ഡ് കമ്പ്യൂട്ടിംഗിലും സോഫ്റ്റ്വെയർ എഞ്ചിനീയറിംഗിലും ശ്രദ്ധയോടെ MCA പഠിക്കുന്നു.",
      "2025-26 അക്കാദമിക് വർഷത്തിൽ സ്റ്റുഡന്റ് കൗൺസിലറായി പ്രവർത്തിക്കുന്നു.",
      "സൈൻ ലാംഗ്വേജ് വിവർത്തനത്തിനായി ഹാൻഡ് ജെസ്‌ചർ റെക്കഗ്നിഷൻ ഗവേഷണം നടത്തുന്നു.",
      "ആധുനിക ഫ്രെയിംവർക്കുകൾ ഉപയോഗിച്ച് ക്ലൗഡ്-നെറ്റീവ്, ഫുൾ-സ്റ്റാക്ക് ആപ്പുകൾ വികസിപ്പിക്കുന്നു.",
    ],
  },
  {
    title: "ക്ലൗഡ് & ഇൻഫ്ര എഞ്ചിനീയർ",
    company_name: "Larsen & Toubro Infotech (LTI)",
    icon: "backend.png",
    iconBg: "#162032",
    date: "Sep 2022 - Jul 2024",
    points: [
      "Windows, Linux, SQL Server, Oracle, Exchange എന്നിവയിൽ Commvault ബാക്കപ്പ് സംവിധാനങ്ങൾ കൈകാര്യം ചെയ്തു.",
      "99.9% ബാക്കപ്പ് വിജയനിരക്കോടെ DR തന്ത്രങ്ങൾ നടപ്പാക്കി.",
      "Azure, AWS EC2 എന്നിവയിൽ IT ഇൻഫ്രാസ്ട്രക്ചർ മാനേജ് ചെയ്തു.",
      "ബാക്കപ്പ് വെരിഫിക്കേഷൻ, മോണിറ്ററിംഗ് ഡാഷ്‌ബോർഡുകൾ എന്നിവ ഓട്ടോമേറ്റ് ചെയ്തു.",
    ],
  },
  {
    title: "സോഫ്റ്റ്വെയർ ഡെവലപ്പ്മെന്റ് ട്രെയിനി",
    company_name: "Bell NeuvoTech LLP",
    icon: "event.png",
    iconBg: "#1c1c2e",
    date: "Jul 2021 - Oct 2021",
    points: [
      "HTML, CSS, WordPress ഉപയോഗിച്ച് ക്ലയന്റ് പോർട്ട്ഫോളിയോ വെബ്സൈറ്റ് രൂപകൽപ്പനയും ഡിപ്ലോയും ചെയ്തു.",
      "WordPress, CodeIgniter ഉപയോഗിച്ചുള്ള ഫുൾ-സ്റ്റാക്ക് ഫീച്ചറുകളിൽ സംഭാവന നൽകി.",
      "ക്ലയന്റ് ഡെലിവറബിളുകളും ഫീച്ചർ നടപ്പാക്കലുകളും ടീമിനൊപ്പം ചെയ്തു.",
      "പ്രൊഫഷണൽ സോഫ്റ്റ്വെയർ വർക്ക്‌ഫ്ലോയിൽ പ്രായോഗിക പരിചയം നേടി.",
    ],
  },
  {
    title: "BCA ബിരുദധാരി",
    company_name: "Saintgits College of Applied Sciences",
    icon: "kristu.png",
    iconBg: "#1a2e1a",
    date: "Jun 2019 - Jun 2022",
    points: [
      "BCA മികച്ച വിജയം നേടി പൂർത്തിയാക്കി.",
      "Best Outgoing BCA Student (2019-22) അവാർഡ് നേടി.",
      "ഡീപ് ലേണിംഗ് ഉപയോഗിച്ചുള്ള ലംഗ് കാൻസർ കണ്ടെത്തൽ വിഷയത്തിൽ ഗവേഷണം പ്രസിദ്ധീകരിച്ചു.",
      "University Councillor ആയി വിദ്യാർത്ഥി പ്രവർത്തനങ്ങൾക്ക് നേതൃത്വം നൽകി.",
    ],
  },
];

const sharedExperiencesFr: ExperienceItem[] = [
  {
    title: "Ingenieur Logiciel",
    company_name: "Corestrat",
    icon: "web.png",
    iconBg: "#0f3460",
    date: "Jan 2026 - Present",
    points: [
      "Developpement et mise a l'echelle d'une plateforme fintech temps reel sur web et mobile.",
      "Conception d'une architecture d'etat performante pour portefeuilles, donnees marche et trading.",
      "Livraison d'une UX de production avec theming, localisation et securite.",
      "Mise en place de flux d'authentification securises et pipelines de donnees temps reel.",
    ],
  },
  {
    title: "Etudiant MCA",
    company_name: "CHRIST (Deemed to be University)",
    icon: "christ.png",
    iconBg: "#0d2137",
    date: "Jul 2024 - Present",
    points: [
      "Poursuite d'un MCA axe sur l'informatique avancee et l'ingenierie logicielle.",
      "Representant etudiant pour l'annee academique 2025-2026.",
      "Recherche sur la reconnaissance de gestes pour la traduction en langue des signes.",
      "Developpement d'applications cloud-native et full-stack avec des frameworks modernes.",
    ],
  },
  {
    title: "Ingenieur Cloud et Infra",
    company_name: "Larsen & Toubro Infotech (LTI)",
    icon: "backend.png",
    iconBg: "#162032",
    date: "Sep 2022 - Jul 2024",
    points: [
      "Gestion de Commvault sur Windows, Linux, SQL Server, Oracle et Exchange.",
      "Execution de plans DR avec 99.9% de succes de sauvegarde.",
      "Administration d'infrastructures sur Azure et AWS EC2.",
      "Automatisation de la verification des sauvegardes et du monitoring.",
    ],
  },
  {
    title: "Stagiaire Developpement Logiciel",
    company_name: "Bell NeuvoTech LLP",
    icon: "event.png",
    iconBg: "#1c1c2e",
    date: "Jul 2021 - Oct 2021",
    points: [
      "Conception et deploiement d'un site portfolio client avec HTML, CSS et WordPress.",
      "Contribution a des fonctionnalites full-stack sous WordPress et CodeIgniter.",
      "Collaboration avec l'equipe sur les livrables clients.",
      "Experience pratique des workflows professionnels de developpement.",
    ],
  },
  {
    title: "Diplome BCA",
    company_name: "Saintgits College of Applied Sciences",
    icon: "kristu.png",
    iconBg: "#1a2e1a",
    date: "Jun 2019 - Jun 2022",
    points: [
      "Obtention du BCA avec distinction.",
      "Prix de meilleur etudiant sortant BCA (2019-22).",
      "Publication d'une recherche sur la detection du cancer du poumon via deep learning.",
      "Representant universitaire et leadership d'initiatives etudiantes.",
    ],
  },
];

export const dictionaries: Record<LocaleCode, Dictionary> = {
  en: {
    languageName: "English",
    dir: "ltr",
    meta: {
      title: "Jithu Varghese | Software Engineer",
      description: "Software Engineer specializing in fintech, cloud infrastructure, and full-stack development.",
    },
    navLinks: [
      { id: "about", title: "About" },
      { id: "work", title: "Experience" },
      { id: "projects", title: "Projects" },
      { id: "skills", title: "Skills" },
      { id: "contact", title: "Contact" },
    ],
    hero: {
      greeting: "Hi, I'm",
      role: "Software Engineer",
      summary: "Building scalable fintech and cloud solutions with precision.",
      connect: "Let's Connect",
      resume: "Resume",
    },
    about: {
      intro: "Introduction",
      heading: "About Me.",
      body:
        "I'm a software engineer with hands-on experience in full-stack web development, cloud infrastructure, and data engineering. Currently pursuing MCA at CHRIST University while working as a Software Engineer at Corestrat.",
      certificationsHeading: "Certifications",
      certifications: [
        "Microsoft Certified: Azure Fundamentals",
        "AWS Partner: Technical & Sales Accreditation",
        "IBM Cybersecurity Analyst (Coursera)",
        "Managing Big Data with MySQL (Coursera)",
        "AI for Everyone - Andrew Ng (Coursera)",
      ],
    },
    experience: {
      intro: "What I've done so far",
      heading: "Experience & Leadership.",
    },
    projects: {
      intro: "My work",
      heading: "Projects.",
      body:
        "The following projects showcase my skills through real-world examples, code repositories, and practical implementation outcomes.",
      sourceCodeAria: "View source code",
      liveDemoAria: "View live demo",
    },
    skills: {
      intro: "What I can do",
      heading: "Skills & Technologies.",
      body:
        "I'm proficient in a wide range of programming languages and technologies with expertise in web development, cloud technologies, and software engineering.",
    },
    contact: {
      intro: "Get in touch",
      heading: "Contact.",
      successTitle: "Thank you!",
      successBody: "Your message has been sent successfully. I'll get back to you soon.",
      labels: {
        name: "Your Name",
        email: "Your Email",
        message: "Your Message",
        contactInfo: "Contact Info",
        phone: "Phone",
        location: "Location",
        resume: "Resume",
        downloadResume: "Download my CV",
        send: "Send Message",
        sending: "Sending...",
        emailTitle: "Email",
      },
      placeholders: {
        name: "What's your name?",
        email: "What's your email?",
        message: "What would you like to say?",
      },
      errors: {
        nameRequired: "Name is required",
        emailRequired: "Email is required",
        emailInvalid: "Email is invalid",
        messageRequired: "Message is required",
        sendFailed: "Something went wrong. Please try again or email me directly at jithuv01@gmail.com",
      },
    },
    loader: {
      role: "Software Engineer",
    },
    data: {
      services: sharedServices,
      experiences: sharedExperiences,
      projects: sharedProjects,
      skillCategories: sharedSkillCategories,
    },
  },
  hi: {
    languageName: "Hindi",
    dir: "ltr",
    meta: {
      title: "जितु वर्गीज | सॉफ्टवेयर इंजीनियर",
      description: "फिनटेक, क्लाउड इंफ्रास्ट्रक्चर और फुल-स्टैक डेवलपमेंट में विशेषज्ञ सॉफ्टवेयर इंजीनियर।",
    },
    navLinks: [
      { id: "about", title: "परिचय" },
      { id: "work", title: "अनुभव" },
      { id: "projects", title: "प्रोजेक्ट्स" },
      { id: "skills", title: "कौशल" },
      { id: "contact", title: "संपर्क" },
    ],
    hero: {
      greeting: "नमस्ते, मैं हूँ",
      role: "सॉफ्टवेयर इंजीनियर",
      summary: "मैं सटीकता के साथ स्केलेबल फिनटेक और क्लाउड समाधान बनाता हूँ।",
      connect: "संपर्क करें",
      resume: "रिज्यूमे",
    },
    about: {
      intro: "परिचय",
      heading: "मेरे बारे में.",
      body:
        "मैं एक सॉफ्टवेयर इंजीनियर हूँ, जिसके पास फुल-स्टैक वेब डेवलपमेंट, क्लाउड इंफ्रास्ट्रक्चर और डेटा इंजीनियरिंग का व्यावहारिक अनुभव है।",
      certificationsHeading: "प्रमाणपत्र",
      certifications: [
        "माइक्रोसॉफ्ट सर्टिफाइड: Azure Fundamentals",
        "AWS पार्टनर: Technical & Sales Accreditation",
        "IBM साइबरसिक्योरिटी एनालिस्ट (Coursera)",
        "Managing Big Data with MySQL (Coursera)",
        "AI for Everyone - Andrew Ng (Coursera)",
      ],
    },
    experience: {
      intro: "अब तक का मेरा काम",
      heading: "अनुभव और नेतृत्व.",
    },
    projects: {
      intro: "मेरा काम",
      heading: "प्रोजेक्ट्स.",
      body:
        "ये प्रोजेक्ट्स वास्तविक उदाहरणों, कोड रिपॉजिटरी और प्रैक्टिकल इम्प्लीमेंटेशन के माध्यम से मेरी क्षमता दिखाते हैं।",
      sourceCodeAria: "स्रोत कोड देखें",
      liveDemoAria: "लाइव डेमो देखें",
    },
    skills: {
      intro: "मैं क्या कर सकता हूँ",
      heading: "कौशल और तकनीकें.",
      body:
        "वेब डेवलपमेंट, क्लाउड टेक्नोलॉजी और सॉफ्टवेयर इंजीनियरिंग में मेरे पास विभिन्न प्रोग्रामिंग भाषाओं और तकनीकों का अच्छा अनुभव है।",
    },
    contact: {
      intro: "संपर्क करें",
      heading: "संपर्क.",
      successTitle: "धन्यवाद!",
      successBody: "आपका संदेश सफलतापूर्वक भेज दिया गया है। मैं जल्द संपर्क करूंगा।",
      labels: {
        name: "आपका नाम",
        email: "आपका ईमेल",
        message: "आपका संदेश",
        contactInfo: "संपर्क जानकारी",
        phone: "फोन",
        location: "स्थान",
        resume: "रिज्यूमे",
        downloadResume: "मेरा CV डाउनलोड करें",
        send: "संदेश भेजें",
        sending: "भेजा जा रहा है...",
        emailTitle: "ईमेल",
      },
      placeholders: {
        name: "आपका नाम क्या है?",
        email: "आपका ईमेल क्या है?",
        message: "आप क्या कहना चाहते हैं?",
      },
      errors: {
        nameRequired: "नाम आवश्यक है",
        emailRequired: "ईमेल आवश्यक है",
        emailInvalid: "ईमेल अमान्य है",
        messageRequired: "संदेश आवश्यक है",
        sendFailed: "कुछ गलत हो गया। कृपया दोबारा कोशिश करें या सीधे jithuv01@gmail.com पर ईमेल करें",
      },
    },
    loader: {
      role: "सॉफ्टवेयर इंजीनियर",
    },
    data: {
      services: [
        { title: "सॉफ्टवेयर इंजीनियर", icon: "web.png" },
        { title: "रिएक्ट डेवलपर", icon: "mobile.png" },
        { title: "क्लाउड इंजीनियर", icon: "backend.png" },
        { title: "डेटा इंजीनियर", icon: "creator.png" },
      ],
      experiences: sharedExperiencesHi,
      projects: sharedProjects,
      skillCategories: [
        { title: "भाषाएं और वेब", skills: sharedSkillCategories[0].skills },
        { title: "फ्रेमवर्क और लाइब्रेरी", skills: sharedSkillCategories[1].skills },
        { title: "क्लाउड और टूल्स", skills: sharedSkillCategories[2].skills },
      ],
    },
  },
  ar: {
    languageName: "Arabic",
    dir: "rtl",
    meta: {
      title: "جيثو فارجيس | مهندس برمجيات",
      description: "مهندس برمجيات متخصص في التكنولوجيا المالية والبنية السحابية والتطوير المتكامل.",
    },
    navLinks: [
      { id: "about", title: "نبذة" },
      { id: "work", title: "الخبرة" },
      { id: "projects", title: "المشاريع" },
      { id: "skills", title: "المهارات" },
      { id: "contact", title: "تواصل" },
    ],
    hero: {
      greeting: "مرحباً، أنا",
      role: "مهندس برمجيات",
      summary: "أبني حلولاً مالية وسحابية قابلة للتوسع بدقة عالية.",
      connect: "دعنا نتواصل",
      resume: "السيرة الذاتية",
    },
    about: {
      intro: "مقدمة",
      heading: "نبذة عني.",
      body:
        "أنا مهندس برمجيات لدي خبرة عملية في تطوير الويب المتكامل والبنية السحابية وهندسة البيانات.",
      certificationsHeading: "الشهادات",
      certifications: [
        "Microsoft Certified: Azure Fundamentals",
        "AWS Partner: Technical & Sales Accreditation",
        "IBM Cybersecurity Analyst (Coursera)",
        "Managing Big Data with MySQL (Coursera)",
        "AI for Everyone - Andrew Ng (Coursera)",
      ],
    },
    experience: {
      intro: "ما أنجزته حتى الآن",
      heading: "الخبرة والقيادة.",
    },
    projects: {
      intro: "أعمالي",
      heading: "المشاريع.",
      body:
        "توضح هذه المشاريع مهاراتي من خلال أمثلة عملية وروابط المستودعات ونتائج تنفيذ حقيقية.",
      sourceCodeAria: "عرض الشيفرة المصدرية",
      liveDemoAria: "عرض النسخة الحية",
    },
    skills: {
      intro: "ما الذي أستطيع فعله",
      heading: "المهارات والتقنيات.",
      body:
        "أمتلك خبرة قوية في لغات وتقنيات متعددة مع تركيز على تطوير الويب والتقنيات السحابية وهندسة البرمجيات.",
    },
    contact: {
      intro: "تواصل معي",
      heading: "تواصل.",
      successTitle: "شكراً لك!",
      successBody: "تم إرسال رسالتك بنجاح. سأرد عليك قريباً.",
      labels: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        message: "الرسالة",
        contactInfo: "معلومات التواصل",
        phone: "الهاتف",
        location: "الموقع",
        resume: "السيرة الذاتية",
        downloadResume: "تحميل السيرة الذاتية",
        send: "إرسال الرسالة",
        sending: "جارٍ الإرسال...",
        emailTitle: "البريد الإلكتروني",
      },
      placeholders: {
        name: "ما اسمك؟",
        email: "ما بريدك الإلكتروني؟",
        message: "ماذا تريد أن تقول؟",
      },
      errors: {
        nameRequired: "الاسم مطلوب",
        emailRequired: "البريد الإلكتروني مطلوب",
        emailInvalid: "البريد الإلكتروني غير صالح",
        messageRequired: "الرسالة مطلوبة",
        sendFailed: "حدث خطأ ما. حاول مرة أخرى أو راسلني مباشرة على jithuv01@gmail.com",
      },
    },
    loader: {
      role: "مهندس برمجيات",
    },
    data: {
      services: [
        { title: "مهندس برمجيات", icon: "web.png" },
        { title: "مطور React", icon: "mobile.png" },
        { title: "مهندس سحابة", icon: "backend.png" },
        { title: "مهندس بيانات", icon: "creator.png" },
      ],
      experiences: sharedExperiencesAr,
      projects: sharedProjects,
      skillCategories: [
        { title: "اللغات والويب", skills: sharedSkillCategories[0].skills },
        { title: "الأطر والمكتبات", skills: sharedSkillCategories[1].skills },
        { title: "السحابة والأدوات", skills: sharedSkillCategories[2].skills },
      ],
    },
  },
  ml: {
    languageName: "Malayalam",
    dir: "ltr",
    meta: {
      title: "ജിത്തു വർഗീസ് | സോഫ്റ്റ്വെയർ എൻജിനീയർ",
      description: "ഫിൻടെക്, ക്ലൗഡ് ഇൻഫ്രാസ്ട്രക്ചർ, ഫുൾ-സ്റ്റാക്ക് ഡെവലപ്പ്മെന്റ് എന്നിവയിൽ വിദഗ്ധനായ സോഫ്റ്റ്വെയർ എൻജിനീയർ.",
    },
    navLinks: [
      { id: "about", title: "പരിചയം" },
      { id: "work", title: "അനുഭവം" },
      { id: "projects", title: "പ്രോജക്റ്റുകൾ" },
      { id: "skills", title: "കൗശലങ്ങൾ" },
      { id: "contact", title: "ബന്ധപ്പെടുക" },
    ],
    hero: {
      greeting: "ഹായ്, ഞാൻ",
      role: "സോഫ്റ്റ്വെയർ എൻജിനീയർ",
      summary: "കൃത്യതയോടെ സ്കെയിലബിൾ ഫിൻടെക്കും ക്ലൗഡ് സൊല്യൂഷനുകളും നിർമ്മിക്കുന്നു.",
      connect: "ബന്ധപ്പെടാം",
      resume: "റെസ്യൂമെ",
    },
    about: {
      intro: "ആമുഖം",
      heading: "എന്നെ കുറിച്ച്.",
      body:
        "ഫുൾ-സ്റ്റാക്ക് വെബ് ഡെവലപ്പ്മെന്റ്, ക്ലൗഡ് ഇൻഫ്രാസ്ട്രക്ചർ, ഡാറ്റ എഞ്ചിനീയറിംഗ് എന്നിവയിൽ പ്രായോഗിക പരിചയമുള്ള സോഫ്റ്റ്വെയർ എൻജിനീയറാണ് ഞാൻ.",
      certificationsHeading: "സർട്ടിഫിക്കേഷനുകൾ",
      certifications: [
        "Microsoft Certified: Azure Fundamentals",
        "AWS Partner: Technical & Sales Accreditation",
        "IBM Cybersecurity Analyst (Coursera)",
        "Managing Big Data with MySQL (Coursera)",
        "AI for Everyone - Andrew Ng (Coursera)",
      ],
    },
    experience: {
      intro: "ഇതുവരെ ചെയ്ത പ്രവർത്തികൾ",
      heading: "അനുഭവവും നേതൃത്വവും.",
    },
    projects: {
      intro: "എന്റെ പ്രവർത്തികൾ",
      heading: "പ്രോജക്റ്റുകൾ.",
      body:
        "ഈ പ്രോജക്റ്റുകൾ യാഥാർത്ഥ്യ ഉദാഹരണങ്ങൾ, കോഡ് റിപ്പോസിറ്ററികൾ, പ്രായോഗിക ഫലങ്ങൾ എന്നിവ വഴി എന്റെ കഴിവുകൾ പ്രകടിപ്പിക്കുന്നു.",
      sourceCodeAria: "സോഴ്‌സ് കോഡ് കാണുക",
      liveDemoAria: "ലൈവ് ഡെമോ കാണുക",
    },
    skills: {
      intro: "എനിക്ക് ചെയ്യാൻ കഴിയുന്നത്",
      heading: "കൗശലങ്ങളും സാങ്കേതികവിദ്യകളും.",
      body:
        "വെബ് ഡെവലപ്പ്മെന്റ്, ക്ലൗഡ് ടെക്നോളജി, സോഫ്റ്റ്വെയർ എൻജിനീയറിംഗ് എന്നിവയിൽ ശക്തമായ പരിചയത്തോടെ നിരവധി ഭാഷകളിലും സാങ്കേതികവിദ്യകളിലും പ്രാവീണ്യമുണ്ട്.",
    },
    contact: {
      intro: "ബന്ധപ്പെടുക",
      heading: "ബന്ധപ്പെടുക.",
      successTitle: "നന്ദി!",
      successBody: "നിങ്ങളുടെ സന്ദേശം വിജയകരമായി അയച്ചു. ഞാൻ ഉടൻ മറുപടി നൽകും.",
      labels: {
        name: "നിങ്ങളുടെ പേര്",
        email: "നിങ്ങളുടെ ഇമെയിൽ",
        message: "നിങ്ങളുടെ സന്ദേശം",
        contactInfo: "ബന്ധപ്പെടാനുള്ള വിവരം",
        phone: "ഫോൺ",
        location: "സ്ഥലം",
        resume: "റെസ്യൂമെ",
        downloadResume: "എന്റെ CV ഡൗൺലോഡ് ചെയ്യുക",
        send: "സന്ദേശം അയക്കുക",
        sending: "അയക്കുന്നു...",
        emailTitle: "ഇമെയിൽ",
      },
      placeholders: {
        name: "നിങ്ങളുടെ പേര് എന്താണ്?",
        email: "നിങ്ങളുടെ ഇമെയിൽ എന്താണ്?",
        message: "നിങ്ങൾ പറയാൻ ആഗ്രഹിക്കുന്നത് എന്താണ്?",
      },
      errors: {
        nameRequired: "പേര് ആവശ്യമാണ്",
        emailRequired: "ഇമെയിൽ ആവശ്യമാണ്",
        emailInvalid: "ഇമെയിൽ അസാധുവാണ്",
        messageRequired: "സന്ദേശം ആവശ്യമാണ്",
        sendFailed: "എന്തോ പിശക് സംഭവിച്ചു. വീണ്ടും ശ്രമിക്കുകയോ നേരിട്ട് jithuv01@gmail.com ലേക്ക് ഇമെയിൽ അയയ്ക്കുകയോ ചെയ്യുക",
      },
    },
    loader: {
      role: "സോഫ്റ്റ്വെയർ എൻജിനീയർ",
    },
    data: {
      services: [
        { title: "സോഫ്റ്റ്വെയർ എൻജിനീയർ", icon: "web.png" },
        { title: "റീയാക്റ്റ് ഡെവലപ്പർ", icon: "mobile.png" },
        { title: "ക്ലൗഡ് എൻജിനീയർ", icon: "backend.png" },
        { title: "ഡാറ്റ എൻജിനീയർ", icon: "creator.png" },
      ],
      experiences: sharedExperiencesMl,
      projects: sharedProjects,
      skillCategories: [
        { title: "ഭാഷകളും വെബും", skills: sharedSkillCategories[0].skills },
        { title: "ഫ്രെയിംവർക്കുകളും ലൈബ്രറികളും", skills: sharedSkillCategories[1].skills },
        { title: "ക്ലൗഡും ടൂളുകളും", skills: sharedSkillCategories[2].skills },
      ],
    },
  },
  fr: {
    languageName: "French",
    dir: "ltr",
    meta: {
      title: "Jithu Varghese | Ingenieur Logiciel",
      description: "Ingenieur logiciel specialise en fintech, infrastructure cloud et developpement full-stack.",
    },
    navLinks: [
      { id: "about", title: "A propos" },
      { id: "work", title: "Experience" },
      { id: "projects", title: "Projets" },
      { id: "skills", title: "Competences" },
      { id: "contact", title: "Contact" },
    ],
    hero: {
      greeting: "Bonjour, je suis",
      role: "Ingenieur Logiciel",
      summary: "Je construis des solutions fintech et cloud evolutives avec precision.",
      connect: "Me Contacter",
      resume: "CV",
    },
    about: {
      intro: "Introduction",
      heading: "A propos de moi.",
      body:
        "Je suis ingenieur logiciel avec une experience pratique en developpement web full-stack, infrastructure cloud et ingenierie des donnees.",
      certificationsHeading: "Certifications",
      certifications: [
        "Microsoft Certified: Azure Fundamentals",
        "AWS Partner: Technical & Sales Accreditation",
        "IBM Cybersecurity Analyst (Coursera)",
        "Managing Big Data with MySQL (Coursera)",
        "AI for Everyone - Andrew Ng (Coursera)",
      ],
    },
    experience: {
      intro: "Ce que j'ai fait jusqu'ici",
      heading: "Experience et Leadership.",
    },
    projects: {
      intro: "Mon travail",
      heading: "Projets.",
      body:
        "Ces projets presentent mes competences a travers des exemples reels, des depots de code et des resultats concrets de mise en oeuvre.",
      sourceCodeAria: "Voir le code source",
      liveDemoAria: "Voir la demo",
    },
    skills: {
      intro: "Ce que je peux faire",
      heading: "Competences et Technologies.",
      body:
        "Je maitrise un large eventail de langages et technologies avec une expertise en web, cloud et ingenierie logicielle.",
    },
    contact: {
      intro: "Entrer en contact",
      heading: "Contact.",
      successTitle: "Merci !",
      successBody: "Votre message a ete envoye avec succes. Je vous repondrai bientot.",
      labels: {
        name: "Votre nom",
        email: "Votre email",
        message: "Votre message",
        contactInfo: "Infos de contact",
        phone: "Telephone",
        location: "Localisation",
        resume: "CV",
        downloadResume: "Telecharger mon CV",
        send: "Envoyer le message",
        sending: "Envoi...",
        emailTitle: "Email",
      },
      placeholders: {
        name: "Quel est votre nom ?",
        email: "Quel est votre email ?",
        message: "Que souhaitez-vous dire ?",
      },
      errors: {
        nameRequired: "Le nom est requis",
        emailRequired: "L'email est requis",
        emailInvalid: "L'email est invalide",
        messageRequired: "Le message est requis",
        sendFailed: "Une erreur est survenue. Veuillez reessayer ou m'ecrire directement a jithuv01@gmail.com",
      },
    },
    loader: {
      role: "Ingenieur Logiciel",
    },
    data: {
      services: [
        { title: "Ingenieur Logiciel", icon: "web.png" },
        { title: "Developpeur React", icon: "mobile.png" },
        { title: "Ingenieur Cloud", icon: "backend.png" },
        { title: "Ingenieur Data", icon: "creator.png" },
      ],
      experiences: sharedExperiencesFr,
      projects: sharedProjects,
      skillCategories: [
        { title: "Langages et Web", skills: sharedSkillCategories[0].skills },
        { title: "Frameworks et Bibliotheques", skills: sharedSkillCategories[1].skills },
        { title: "Cloud et Outils", skills: sharedSkillCategories[2].skills },
      ],
    },
  },
};

export const supportedLocales: Array<{ code: LocaleCode; label: string }> = [
  { code: "en", label: "English" },
  { code: "hi", label: "Hindi" },
  { code: "ar", label: "Arabic" },
  { code: "ml", label: "Malayalam" },
  { code: "fr", label: "French" },
];
