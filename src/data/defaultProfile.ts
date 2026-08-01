import { Profile, SampleJD } from '../types';

export const VETRISELVAN_PROFILE: Profile = {
  name: "Vetriselvan Panneerselvam",
  currentTitle: "Senior Full Stack Engineer",
  experience: "7+ years of professional software engineering experience",
  location: "Chennai, India",
  openTo: [
    "Remote",
    "Hybrid",
    "On-site",
    "International Relocation",
    "Visa Sponsorship"
  ],
  noticePeriod: "60 Days",
  portfolio: "https://vetriselvan-pv.github.io/profile",
  github: "https://github.com/vetriselvan-pv",
  linkedin: "https://linkedin.com/in/vetriselvan-panneerselvam",
  medium: "https://medium.com/@vetriselvan_11",
  summary: "I specialize in enterprise software development with a strong focus on fintech platforms. My expertise includes Angular Architecture, Enterprise Frontend Engineering, Full Stack Development, Java Spring Boot, Node.js, REST APIs, Microservices, Nx Monorepos, Micro Frontends, Module Federation, Configuration Driven UI, Banking Applications, API Platforms, and BaaS Platforms. Experienced in international banking clients including India and Jordan. Led engineering teams while remaining hands-on in architecture and development.",
  skills: {
    frontend: [
      "Angular (v8-v21)",
      "TypeScript",
      "JavaScript",
      "RxJS",
      "NGXS",
      "Angular Material",
      "Tailwind CSS",
      "SCSS",
      "HTML",
      "CSS",
      "React",
      "Next.js",
      "Ionic",
      "GSAP",
      "D3.js"
    ],
    backend: [
      "Java",
      "Spring Boot",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Microservices",
      "Prisma ORM",
      "JWT",
      "Bcrypt",
      "AES Encryption"
    ],
    architecture: [
      "Nx Monorepo",
      "Module Federation",
      "Native Federation",
      "Micro Frontends",
      "Configuration Driven Architecture"
    ],
    databases: [
      "PostgreSQL",
      "MongoDB"
    ],
    cloudDevOps: [
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "Jenkins"
    ],
    testing: [
      "Jest",
      "Vitest"
    ],
    versionControl: [
      "Git",
      "GitHub",
      "GitLab"
    ],
    tools: [
      "VS Code",
      "Cursor",
      "Postman"
    ]
  },
  projects: [
    {
      name: "FPX Library",
      description: "Enterprise Angular UI Framework",
      tech: ["Angular", "TypeScript", "Nx Monorepo", "SCSS", "Configuration Driven UI"],
      responsibilities: [
        "Architected configuration-driven Angular framework enabling dynamic UI rendering across enterprise platforms.",
        "Designed reusable NPM libraries to standardize component design systems across product lines.",
        "Created backend-driven UI rendering architecture to accelerate screen creation.",
        "Led team of 6 engineers on core architecture design, code reviews, and technical standards.",
        "Reduced development effort by 40% across banking client applications."
      ]
    },
    {
      name: "Pulse",
      description: "Enterprise Banking as a Service (BaaS) Platform",
      tech: ["Java", "Spring Boot", "Node.js", "Angular", "REST APIs", "Microservices"],
      responsibilities: [
        "Architected enterprise Banking as a Service platform components using Java Spring Boot and Node.js microservices.",
        "Implemented API monetization, billing engines, and subscription management modules.",
        "Engineered secure enterprise integration gateways handling core banking workflows.",
        "Integrated high-throughput REST APIs and JWT/encryption mechanisms for banking transaction safety."
      ]
    },
    {
      name: "API Exchange",
      description: "Enterprise API Marketplace",
      tech: ["Node.js", "Express.js", "REST APIs", "JWT", "OAuth", "Angular"],
      responsibilities: [
        "Developed API Discovery engine and subscription approval workflows for developer ecosystem.",
        "Implemented fine-grained Role Based Access Control (RBAC), authentication, and authorization logic.",
        "Engineered scalable REST APIs serving high-concurrency enterprise marketplace traffic."
      ]
    },
    {
      name: "iTurmeric Studio",
      description: "Low Code Enterprise Platform",
      tech: ["Angular", "Node.js", "Express.js", "TypeScript", "Micro Frontends"],
      responsibilities: [
        "Mentored frontend engineers on Angular best practices and Nx monorepo structures.",
        "Designed modular reusable Angular libraries and secure Node.js middleware APIs.",
        "Accelerated platform adoption through configuration-driven low-code UI builders."
      ]
    },
    {
      name: "Retail Banking Platform",
      description: "Omnichannel Banking Application",
      tech: ["Angular", "Ionic", "Cordova", "RxJS", "SCSS"],
      responsibilities: [
        "Developed cross-platform mobile and web retail banking modules using Angular, Ionic, and Cordova.",
        "Engineered customer service request flows, fund management screens, and role maintenance modules."
      ]
    },
    {
      name: "Arab Bank",
      description: "Onsite Teller & Core Banking Application (Jordan)",
      tech: ["Angular", "Spring Boot", "REST APIs", "Enterprise Security"],
      responsibilities: [
        "Worked onsite in Amman, Jordan directly with international banking stakeholders and product managers.",
        "Developed high-reliability teller operations and cashier workflow applications.",
        "Optimized client-side rendering speed and backend API integration latency for teller stations."
      ]
    },
    {
      name: "Sberbank",
      description: "Digital Banking & Flex Pay Platform",
      tech: ["Java", "Spring Boot", "Angular", "RxJS", "REST APIs"],
      responsibilities: [
        "Developed core Service Request, Flex Pay, and customer Onboarding workflows.",
        "Built robust Java Spring Boot microservice endpoints and responsive Angular frontend components."
      ]
    },
    {
      name: "Newage Software",
      description: "ERP Logistics & Supply Chain System",
      tech: ["Angular", "Spring Boot", "NGXS", "Nx Workspace"],
      responsibilities: [
        "Engineered scalable ERP logistics modules utilizing Angular and Spring Boot in an Nx Workspace.",
        "Implemented state management using NGXS for real-time logistics tracking and order processing."
      ]
    }
  ],
  leadership: [
    "Led engineering teams of 3 to 6 engineers across high-stakes banking projects.",
    "Performed technical architecture design, code reviews, mentoring, and sprint planning.",
    "Established frontend coding standards, CI/CD pipeline improvements, and cross-functional technical alignment."
  ],
  openSource: [
    "Open Source Contributor to AnalogJS and the broader Angular ecosystem."
  ],
  technicalWriting: [
    "Medium & Dev.to Author covering Angular, Spring Boot, Architecture, Performance, and Deployment."
  ],
  awards: [
    "Sergey Bubka Award",
    "Spotlight Award",
    "Ace Developer Award",
    "Rockstar Rookie Award"
  ],
  education: "Bachelor of Engineering in Mechanical Engineering",
  languages: ["English", "Tamil"]
};

export const SAMPLE_JOB_DESCRIPTIONS: SampleJD[] = [
  {
    id: "stripe-fullstack",
    company: "Stripe",
    role: "Senior Full Stack Engineer - Financial Products",
    location: "Remote (Global) / London / Singapore",
    type: "Fintech",
    description: `About the Role:
We are looking for a Senior Full Stack Engineer to join our Banking as a Service (BaaS) and Financial Connections team. You will lead the design and implementation of customer-facing financial portals, microservices, and API developer platforms.

Key Responsibilities:
• Architect scalable, high-performance web applications using modern TypeScript (Angular or React) and Java/Node.js backends.
• Build reusable frontend libraries and configuration-driven UI frameworks to support rapid experimentation and integration.
• Design robust RESTful microservices and authorization systems for high-volume banking workflows.
• Mentor junior/mid-level software engineers and drive engineering excellence, code reviews, and CI/CD best practices.
• Collaborate closely with product managers, security engineers, and international compliance teams.

Required Qualifications:
• 6+ years of professional full-stack development experience.
• Strong expertise in modern frontend frameworks (Angular, TypeScript, RxJS, or React) and state management.
• Hands-on experience with Java (Spring Boot) or Node.js microservices architecture.
• Experience with Banking, Fintech, BaaS, or API Marketplace platforms.
• Deep understanding of micro-frontend architecture, Nx monorepos, module federation, and REST APIs.
• Strong passion for clean code, automated testing (Jest, Vitest), and security standards (JWT, encryption).`
  },
  {
    id: "barclays-lead",
    company: "Barclays",
    role: "Lead Frontend Architect - Retail & Digital Banking",
    location: "Hybrid / London / Pune / Remote",
    type: "Banking",
    description: `Position Summary:
Barclays is seeking a Lead Frontend Architect with extensive experience in enterprise banking applications. In this role, you will define the architectural roadmap for our global retail banking web applications and customer service teller systems.

Responsibilities:
• Architect enterprise-grade Angular applications using Nx Monorepo structures, Micro Frontends, and Module Federation.
• Lead a dedicated engineering squad of 5-8 developers, enforcing architectural guidelines and performance optimizations.
• Partner with backend microservice teams (Java Spring Boot / Node.js) to design seamless API contracts and security protocols.
• Build reusable UI component libraries and configuration-driven UI capabilities for rapid multi-country deployments.
• Engage with international banking stakeholders and lead technical discussions on modernization efforts.

Requirements:
• 7+ years of hands-on software development experience with focus on enterprise Angular architecture (v12+).
• Expert knowledge of TypeScript, RxJS, state management (NGXS/NGRX), and SCSS/Tailwind CSS.
• Proven track record leading engineering teams, performing code reviews, and driving CI/CD automation (Jenkins/GitHub Actions).
• Background in Retail Banking, Teller applications, Service Requests, or Payment Gateways.
• Experience with Java Spring Boot backend integration and Docker containerized deployments.`
  },
  {
    id: "revolut-staff",
    company: "Revolut",
    role: "Senior / Staff Software Engineer - API & Platform Monetization",
    location: "Remote / London / Dubai",
    type: "Fintech Platform",
    description: `What We Are Looking For:
Revolut is growing its Business & Developer Platform team. We are searching for an exceptional Senior/Staff Full Stack Engineer to build next-generation API Marketplaces, monetization engines, and subscription management infrastructure.

What You Will Do:
• Build high-throughput API gateway management systems, developer portals, and API monetization dashboards using Node.js and Java Spring Boot.
• Develop intuitive, configuration-driven web portals in Angular / TypeScript for developer onboarding and RBAC management.
• Optimize application latency, memory consumption, and database query performance on PostgreSQL and MongoDB.
• Drive technical design discussions, author technical blogs/specs, and contribute to developer community tools.
• Work in a fast-paced environment with high release velocity and rigorous unit/integration test coverage (Jest, Vitest).

Requirements:
• 7+ years of experience engineering distributed systems and full-stack web platforms.
• Proficiency in Node.js, Express.js, Java Spring Boot, and PostgreSQL.
• Expertise in Angular or React, Micro Frontends, Nx Monorepos, and RxJS.
• Experience building API Marketplaces, Billing/Subscription engines, or BaaS solutions.
• Strong team leadership, code review standards, and open-source mindset.`
  }
];
