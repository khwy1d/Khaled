export const portfolioData = {
  personal: {
    ar: {
      name: "خالد أمين",
      title: "مطور ويب متكامل · طالب ذكاء اصطناعي وعلوم بيانات",
      subtitle: "أبني للويب. أدرس من أجل المستقبل.",
      bio: "أنا مطور ويب متكامل وطالب في السنة الثانية متخصص في الذكاء الاصطناعي وعلوم البيانات بجامعة تعز.\n\nتطوير الويب مهارة بنيتها قبل الجامعة، وما زلت أطوّرها. الذكاء الاصطناعي هو وجهتي القادمة.\n\nهذا الموقع صورة لأين أنا الآن. سيتغيّر كما أتغيّر.",
      location: "تعز، اليمن",
      email: "khaled.a.alsharabi@gmail.com",
      linkedin: "https://www.linkedin.com/in/khaled-ameen-30a0b9338",
      github: "https://github.com/khwyld",
      instagram: "https://www.instagram.com/khwy1d",
      x: "https://x.com/khwyld_alshraby",
      cv: "/cv-ar.pdf",
    },
    en: {
      name: "Khaled Ameen",
      title: "Full-Stack Developer · AI & Data Science Student",
      subtitle: "I build for the web. I study for the future.",
      bio: "I'm a full-stack web developer and a second-year AI & Data Science student at Taiz University.\n\nWeb development is a skill I built before university, and kept building since. AI is where I'm heading.\n\nThis portfolio is a snapshot of where I am right now. It'll change as I do.",
      location: "Taiz, Yemen",
      email: "khaled.a.alsharabi@gmail.com",
      linkedin: "https://www.linkedin.com/in/khaled-ameen-30a0b9338",
      github: "https://github.com/khwyld",
      instagram: "https://www.instagram.com/khwy1d",
      x: "https://x.com/khwyld_alshraby",
      cv: "/cv-en.pdf",
    },
  },

  // Kept in the data layer in case you want to bring them back later —
  // the section that renders these is commented out in About.tsx.
  stats: {
    ar: [
      { value: 4, label: "مشاريع منجزة" },
      { value: 6, label: "مجالات تقنية" },
    ],
    en: [
      { value: 4, label: "Completed Projects" },
      { value: 6, label: "Technical Skills" },
    ],
  },

  skills: {
    ar: [
      {
        category: "تطوير الويب المتكامل",
        items: ["HTML", "CSS", "JavaScript", "Node.js", "PHP", "Python", "تصميم متجاوب"],
      },
      {
        category: "الذكاء الاصطناعي والبيانات",
        items: ["أساسيات تعلم الآلة", "تحليل البيانات", "تصور البيانات", "النماذج التنبؤية"],
      },
      {
        category: "التصميم وواجهات المستخدم",
        items: ["Figma", "Photoshop", "Illustrator", "Premiere Pro", "After Effects"],
      },
      {
        category: "قواعد البيانات",
        items: ["MySQL", "Oracle Database", "تصميم قواعد البيانات", "نمذجة ER"],
      },
    ],
    en: [
      {
        category: "Full-Stack Development",
        items: ["HTML", "CSS", "JavaScript", "Node.js", "PHP", "Python", "Responsive Design"],
      },
      {
        category: "AI & Data",
        items: ["Machine Learning Fundamentals", "Data Analysis", "Data Visualization", "Predictive Modeling"],
      },
      {
        category: "Design & UI",
        items: ["Figma", "Photoshop", "Illustrator", "Premiere Pro", "After Effects"],
      },
      {
        category: "Databases",
        items: ["MySQL", "Oracle Database", "Database Design", "ER Modeling"],
      },
    ],
  },

  projects: {
    ar: [
      {
        id: 1,
        title: "متجر ملابس إلكتروني",
        description:
          "تطبيق ويب متجاوب لمتجر ملابس، مبني بالكامل بـ HTML و CSS و JavaScript: صفحات عرض المنتجات، التنقل، والتخطيط العام. هنا دفعت مهاراتي في الواجهة الأمامية إلى أبعد مدى.",
        technologies: ["HTML", "CSS", "JavaScript", "تصميم متجاوب"],
        link: "https://github.com/khwyld",
        demo: "https://khwyld.github.io/clothing-store",
      },
      {
        id: 2,
        title: "نظام ولاء ونقاط البيع للمقاهي",
        description:
          "نموذج يجمع بين تتبّع ولاء العملاء وعمليات الصراف. ساهمت في هيكلة التطبيق، تصميم قاعدة البيانات، والمنطق التجاري — من المعاملات إلى البحث عن المنتجات وإدارة نقاط الولاء.",
        technologies: ["Java", "تصميم قواعد البيانات", "منطق الأعمال"],
        link: "https://github.com/khwyld",
        demo: null,
      },
      {
        id: 3,
        title: "نموذج التنبؤ بسوق الفوركس",
        description:
          "دربت نموذج انحدار خطي على بيانات تاريخية لسوق الفوركس للتنبؤ باتجاه حركة السعر. الانحدار الخطي ليست الخوارزمية المثالية لهذه المشكلة — والعمل بها أوضح لي ذلك بالضبط. وثّقت خطة لإعادة بنائه باستخدام أساليب أفضل.",
        technologies: ["Python", "تعلم الآلة", "تحليل البيانات"],
        link: "https://github.com/khwyld",
        demo: null,
        note: "متوقف حالياً. النسخة الثانية قيد التخطيط.",
      },
      {
        id: 4,
        title: "نظام إدارة المدرسة",
        description:
          "نظام لإدارة العمليات الأكاديمية: الطلاب، الفصول، المواد، والسجلات. بُني بمبادئ البرمجة الموجهة للكائنات في Java، مع مشاركة فعلية في تصميم النظام وهيكلة الفصول والتخطيط لقاعدة البيانات.",
        technologies: ["Java", "OOP", "تصميم قواعد البيانات"],
        link: "https://github.com/khwyld",
        demo: null,
      },
    ],
    en: [
      {
        id: 1,
        title: "Online Clothing Store",
        description:
          "A responsive web application for an e-commerce clothing store, built entirely with HTML, CSS, and JavaScript: product presentation pages, navigation, and layout. This is where I pushed my front-end skills furthest.",
        technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        link: "https://github.com/khwyld",
        demo: "https://khwyld.github.io/clothing-store",
      },
      {
        id: 2,
        title: "Café Loyalty & Point-of-Sale System",
        description:
          "A prototype combining customer loyalty tracking with cashier operations. Contributed to the application structure, database design, and business logic — handling transactions, product lookup, and loyalty point management.",
        technologies: ["Java", "Database Design", "Business Logic"],
        link: "https://github.com/khwyld",
        demo: null,
      },
      {
        id: 3,
        title: "Forex Market Prediction Model",
        description:
          "Trained a Linear Regression model on historical forex market data to predict price movement direction. Linear Regression isn't the ideal algorithm for this problem — working with it showed me exactly why. I've documented a roadmap for a full rebuild with better-suited approaches.",
        technologies: ["Python", "Machine Learning", "Data Analysis"],
        link: "https://github.com/khwyld",
        demo: null,
        note: "Currently paused. Version 2 is planned.",
      },
      {
        id: 4,
        title: "School Management System",
        description:
          "A system for managing academic operations — students, classrooms, subjects, and records. Built with object-oriented principles in Java, with active contribution to system design, class structure, and database planning.",
        technologies: ["Java", "OOP", "Database Design"],
        link: "https://github.com/khwyld",
        demo: null,
      },
    ],
  },

  education: {
    ar: [
      {
        degree: "بكالوريوس الذكاء الاصطناعي وعلوم البيانات",
        school: "جامعة تعز - كلية السعيد للهندسة وتكنولوجيا المعلومات",
        period: "2024 - 2028 (متوقع)",
      },
      {
        degree: "الثانوية العامة",
        school: "مجمع الفوز التربوي",
        period: "تخرج 2023",
      },
    ],
    en: [
      {
        degree: "Bachelor of Artificial Intelligence and Data Science",
        school: "Taiz University — Al-Saeed College of Engineering and Information Technology",
        period: "2024 – Expected 2028",
      },
      {
        degree: "High School Diploma",
        school: "Al-Fawz Educational Complex",
        period: "Graduated 2023",
      },
    ],
  },

  certifications: {
    ar: ["رخصة قيادة الحاسوب الدولية (ICDL)", "تدريب اللغة الإنجليزية"],
    en: ["International Computer Driving License (ICDL)", "English Language Training"],
  },

  languages: {
    ar: [
      { name: "العربية", level: "لغة أم" },
      { name: "الإنجليزية", level: "متوسط (B1)" },
    ],
    en: [
      { name: "Arabic", level: "Native" },
      { name: "English", level: "Intermediate (B1)" },
    ],
  },

  process: {
    ar: [
      {
        title: "الفهم والتخطيط",
        description: "فهم الفكرة، تحديد نطاق المشروع، ووضع خطة واضحة للتنفيذ.",
      },
      {
        title: "هيكلة البيانات",
        description: "تخطيط هيكل البيانات والعلاقات بين الجداول عند الحاجة.",
      },
      {
        title: "التصميم",
        description: "تصميم واجهات تركز على تجربة المستخدم وتتجاوب مع مختلف الأجهزة.",
      },
      {
        title: "التطوير",
        description: "تحويل الأفكار والتصاميم إلى تطبيقات ومواقع عملية.",
      },
      {
        title: "الاختبار والتسليم",
        description: "مراجعة المشروع، اختباره، وتجهيزه للإطلاق أو التسليم.",
      },
    ],
    en: [
      {
        title: "Discover & Plan",
        description: "Understand the idea, define the scope, and establish a clear direction.",
      },
      {
        title: "Data Structure",
        description: "Plan data structures and relationships when required.",
      },
      {
        title: "Design",
        description: "Create responsive interfaces with a focus on UX / UI.",
      },
      {
        title: "Build",
        description: "Turn ideas and designs into practical digital solutions.",
      },
      {
        title: "Test & Deliver",
        description: "Review, test, and prepare the project for launch or delivery.",
      },
    ],
  },
};
