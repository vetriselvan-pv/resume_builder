export function generateFallbackPackage(profile: any, company: string, position: string, jdText: string) {
  const companyName = company || "Target Company";
  const roleName = position || "Senior Full Stack Engineer";
  
  // Extract keywords from JD
  const lowerJd = jdText.toLowerCase();
  const keywordsToTest = [
    "Angular", "Spring Boot", "TypeScript", "Microservices", "RxJS", "Node.js", 
    "Nx Monorepo", "Micro Frontends", "Java", "PostgreSQL", "REST APIs", 
    "Docker", "CI/CD", "AWS", "Kubernetes", "GraphQL", "Kafka"
  ];

  const matched = keywordsToTest.filter(k => lowerJd.includes(k.toLowerCase()) && 
    JSON.stringify(profile).toLowerCase().includes(k.toLowerCase()));
  const missing = keywordsToTest.filter(k => lowerJd.includes(k.toLowerCase()) && 
    !JSON.stringify(profile).toLowerCase().includes(k.toLowerCase()));

  const matchPct = Math.min(96, Math.max(78, 80 + matched.length * 2 - missing.length * 3));

  const resumeLatex = `%-------------------------------------------------------------------------------
% Resume for Vetriselvan Panneerselvam - Tailored for ${companyName} (${roleName})
% ATS-Friendly Clean LaTeX Template
%-------------------------------------------------------------------------------
\\documentclass[10pt,a4paper]{article}
\\usepackage[utf8]{utf8}
\\usepackage[margin=0.6in]{geometry}
\\usepackage{hyperref}
\\usepackage{enumitem}
\\usepackage{titlesec}
\\usepackage{xcolor}

\\hypersetup{
    colorlinks=true,
    linkcolor=black,
    urlcolor=blue,
}

\\titleformat{\\section}{\\large\\bfseries\\uppercase}{}{0em}{}[\\titlerule]
\\titlespacing*{\\section}{0pt}{8pt}{4pt}
\\setlist[itemize]{noitemsep, topsep=1pt, parsep=1pt, partopsep=0pt, leftmargin=1.2em}

\\begin{document}

\\begin{center}
    {\\LARGE \\bfseries VETRISELVAN PANNEERSELVAM} \\\\ \\vspace{3pt}
    Senior Full Stack Engineer \\,|\\, Angular Architecture \\,|\\, Java Spring Boot \\,|\\, Node.js \\\\ \\vspace{3pt}
    Chennai, India \\,|\\, Open to Remote, On-site \\& International Relocation \\,|\\, Notice Period: 60 Days \\\\ \\vspace{3pt}
    Portfolio: \\url{https://vetriselvan-pv.github.io/profile} \\,|\\, GitHub: \\url{https://github.com/vetriselvan-pv} \\\\
    LinkedIn: \\url{https://linkedin.com/in/vetriselvan-panneerselvam} \\,|\\, Technical Blog: \\url{https://medium.com/@vetriselvan_11}
\\end{center}

\\section{Professional Summary}
Senior Full Stack Engineer with 7+ years of hands-on experience designing high-performance enterprise software, Banking as a Service (BaaS) platforms, and microservices for international banking leaders. Expert in Angular (v8-v21), TypeScript, RxJS, Java Spring Boot, and Node.js microservices. Proven leader in architecting configuration-driven UI frameworks and Nx Monorepos that reduced client engineering effort by 40\\%. Experienced in leading cross-functional teams of 3--6 engineers while driving hands-on technical architecture for fintech systems.

\\section{Technical Skills}
\\begin{itemize}
    \\item \\textbf{Frontend Engineering:} Angular (v8--v21), TypeScript, JavaScript, RxJS, NGXS, Angular Material, Tailwind CSS, SCSS, React, Next.js, Ionic, GSAP, D3.js
    \\item \\textbf{Backend \\& Microservices:} Java, Spring Boot, Node.js, Express.js, REST APIs, Microservices, Prisma ORM, JWT, Bcrypt, AES Encryption
    \\item \\textbf{Architecture \\& Monorepos:} Nx Monorepo, Module Federation, Native Federation, Micro Frontends, Configuration Driven UI
    \\item \\textbf{Databases \\& DevOps:} PostgreSQL, MongoDB, Docker, CI/CD, GitHub Actions, Jenkins, Jest, Vitest, Git
\\end{itemize}

\\section{Project Experience}

\\textbf{FPX Library} --- \\textit{Enterprise Angular UI Framework} \\hfill \\textbf{Lead Architect \\& Engineer}
\\begin{itemize}
    \\item Architected configuration-driven Angular framework using Nx Monorepos and custom NPM libraries, reducing duplicate development by 40\\% across banking applications.
    \\item Designed reusable backend-driven UI rendering architecture to dynamically materialize complex banking forms and data grids.
    \\item Led an engineering squad of 6 developers, conducting code reviews, establishing Angular coding standards, and automating CI/CD workflows.
\\end{itemize}

\\vspace{4pt}
\\textbf{Pulse} --- \\textit{Enterprise Banking as a Service (BaaS) Platform} \\hfill \\textbf{Senior Full Stack Engineer}
\\begin{itemize}
    \\item Engineered high-throughput Java Spring Boot and Node.js microservices powering API monetization, billing engines, and subscription management workflows.
    \\item Integrated JWT authentication and AES encryption mechanisms to enforce enterprise-grade security across sensitive core banking endpoints.
    \\item Collaborated with international banking stakeholders to streamline multi-tenant BaaS API integration pipelines.
\\end{itemize}

\\vspace{4pt}
\\textbf{API Exchange} --- \\textit{Enterprise API Marketplace} \\hfill \\textbf{Full Stack Engineer}
\\begin{itemize}
    \\item Developed developer API discovery engine, role-based access control (RBAC), and subscription approval workflows using Node.js and REST APIs.
    \\item Built responsive Angular dashboard interfaces with real-time analytics to monitor high-volume marketplace traffic.
\\end{itemize}

\\vspace{4pt}
\\textbf{Arab Bank} --- \\textit{Onsite Teller \\& Banking Platform (Jordan)} \\hfill \\textbf{Onsite Senior Engineer}
\\begin{itemize}
    \\item Developed mission-critical Teller applications onsite in Amman, Jordan, interfacing directly with senior banking executives and operations managers.
    \\item Optimized client-side rendering performance and API payload sizes, reducing teller station latency by 25\\%.
\\end{itemize}

\\vspace{4pt}
\\textbf{iTurmeric Studio \\& Sberbank} --- \\textit{Low Code Platform \\& Digital Banking} \\hfill \\textbf{Senior Engineer}
\\begin{itemize}
    \\item Built low-code enterprise UI modules and Java Spring Boot APIs for service requests, flex pay, and digital onboarding systems.
    \\item Mentored junior engineers on RxJS state management, unit testing with Jest, and modular architecture.
\\end{itemize}

\\section{Leadership \\& Accomplishments}
\\begin{itemize}
    \\item \\textbf{Engineering Leadership:} Led teams of 3 to 6 engineers through sprint planning, architecture design, and technical mentoring.
    \\item \\textbf{Open Source \\& Writing:} Active contributor to AnalogJS (Angular ecosystem); Author on Medium and Dev.to covering Angular performance and microservice architectures.
    \\item \\textbf{Honors \\& Awards:} Recipient of the Sergey Bubka Award, Spotlight Award, Ace Developer Award, and Rockstar Rookie Award.
\\end{itemize}

\\section{Education \\& Languages}
\\begin{itemize}
    \\item \\textbf{Education:} Bachelor of Engineering (Mechanical Engineering)
    \\item \\textbf{Languages:} English (Fluent), Tamil (Native)
\\end{itemize}

\\end{document}
`;

  const coverLetterLatex = `%-------------------------------------------------------------------------------
% Cover Letter for ${companyName} (${roleName})
%-------------------------------------------------------------------------------
\\documentclass[10pt,a4paper]{article}
\\usepackage[utf8]{utf8}
\\usepackage[margin=0.8in]{geometry}
\\usepackage{hyperref}
\\usepackage{parskip}

\\hypersetup{colorlinks=true, linkcolor=black, urlcolor=blue}

\\begin{document}

\\begin{center}
    {\\Large \\bfseries VETRISELVAN PANNEERSELVAM} \\\\ \\vspace{2pt}
    Senior Full Stack Engineer \\,|\\, Chennai, India \\,|\\, Open to Relocation \\& Sponsorship \\\\
    Portfolio: \\url{https://vetriselvan-pv.github.io/profile} \\,|\\, Email: vetriselvan\\_11@medium.com \\,|\\, GitHub: vetriselvan-pv
\\end{center}

\\vspace{10pt}
\\today

\\textbf{Hiring Manager / Recruiting Team} \\\\
${companyName}

\\vspace{10pt}
\\textbf{RE: Application for ${roleName}}

Dear Hiring Manager,

I am writing to express my strong enthusiasm for the ${roleName} position at ${companyName}. With over 7 years of professional experience building enterprise software, Banking as a Service (BaaS) platforms, and microservice architectures, I am eager to contribute my technical leadership and hands-on full-stack engineering skills to ${companyName}.

In my recent work, I architected the FPX Library—a configuration-driven Angular framework engineered using Nx Monorepos and module federation—which reduced client engineering effort by 40\\% across international banking applications. Additionally, as a Senior Full Stack Engineer on the Pulse BaaS platform, I developed core Java Spring Boot and Node.js microservices handling API monetization, billing, and secure financial integrations. My background also includes leading onsite engineering initiatives for Arab Bank in Jordan, collaborating directly with executive stakeholders to deploy high-concurrency teller applications.

${companyName}'s commitment to engineering scale and customer-focused product innovation strongly aligns with my career experience. I thrive in hands-on technical environments where I can lead architecture discussions, mentor engineering squads, and deliver resilient RESTful microservices paired with polished Angular/TypeScript user interfaces.

I am open to remote options as well as international relocation with visa sponsorship. I look forward to the opportunity to discuss how my background in banking applications, monorepos, and full-stack development will add immediate value to ${companyName}.

Thank you for your time and consideration.

Sincerely,

\\vspace{15pt}
\\textbf{Vetriselvan Panneerselvam} \\\\
Senior Full Stack Engineer
\\end{document}
`;

  return {
    company: companyName,
    position: roleName,
    resumeLatex,
    coverLetterLatex,
    atsReport: {
      matchPercentage: matchPct,
      matchingSkills: matched.length > 0 ? matched : ["Angular", "Spring Boot", "TypeScript", "Node.js", "REST APIs", "Nx Monorepo", "Microservices"],
      missingKeywords: missing.length > 0 ? missing : ["AWS / Cloud Native", "Kubernetes", "GraphQL"],
      skillsNotDemonstrated: ["Go / Golang", "Kubernetes Native Deployment"],
      suggestedImprovements: [
        `Highlight experience with configuration-driven UI to mirror ${companyName}'s scalability needs.`,
        `Emphasize Java Spring Boot microservice security (JWT/AES) relevant to ${companyName}.`,
        `Quantify team leadership (leading 3-6 engineers) prominently in the summary section.`
      ],
      keywordDensity: keywordsToTest.map(k => ({
        keyword: k,
        foundInProfile: JSON.stringify(profile).toLowerCase().includes(k.toLowerCase()),
        relevance: lowerJd.includes(k.toLowerCase()) ? 'High' : 'Medium'
      }))
    },
    recruiterEmail: `Subject: Senior Full Stack Engineer Application - Vetriselvan Panneerselvam (${companyName})

Dear ${companyName} Recruiting Team,

I recently applied for the ${roleName} position at ${companyName} and wanted to personally reach out.

With 7+ years of experience specializing in enterprise Angular architecture, Java Spring Boot, Node.js microservices, and Banking as a Service (BaaS) platforms, I have built mission-critical financial software for international banking clients (including onsite deployments in Jordan).

Key highlights relevant to ${companyName}:
• FPX Library: Architected configuration-driven Angular UI frameworks using Nx Monorepos, reducing engineering effort by 40%.
• Pulse BaaS Platform: Engineered Java Spring Boot & Node.js microservices for API monetization and billing systems.
• Team Leadership: Led teams of 3 to 6 engineers on architecture, code reviews, and CI/CD pipelines.

I am open to remote work as well as relocation with visa sponsorship. I would welcome 10 minutes to discuss how my experience aligns with your team's current technical initiatives.

My portfolio & GitHub:
• Portfolio: https://vetriselvan-pv.github.io/profile
• GitHub: https://github.com/vetriselvan-pv

Best regards,
Vetriselvan Panneerselvam
Senior Full Stack Engineer`,

    linkedinConnection: `Hi! I saw the ${roleName} opening at ${companyName}. With 7+ years in Angular (v8-v21), Java Spring Boot, Node.js microservices, & BaaS platforms (reduced dev effort by 40% at FPX Library), I'm very interested. Open to relocation/remote. Would love to connect! - Vetriselvan`,

    followUpEmail: `Subject: Following up - Vetriselvan Panneerselvam - ${roleName} Application

Dear ${companyName} Hiring Team,

Thank you for taking the time to review my application for the ${roleName} role. 

Given my background in architecting enterprise Angular UI frameworks (Nx Monorepos), high-concurrency Spring Boot microservices, and leading engineering squads for international banking platforms, I am confident in my ability to make an immediate impact at ${companyName}.

I remain very excited about this opportunity and look forward to hearing about next steps. Please let me know if you need any additional code samples or references.

Best regards,
Vetriselvan Panneerselvam`,

    starStories: [
      {
        title: "Architecting Enterprise Configuration-Driven UI Framework",
        project: "FPX Library",
        situation: "Multiple banking client teams were independently recreating similar UI components, resulting in redundant codebases and slow product rollout times.",
        task: "Architect a unified enterprise Angular UI framework and component library to standardize frontend development across product lines.",
        action: "Designed a configuration-driven UI framework using Angular and Nx Monorepos. Created reusable NPM packages and a backend-driven dynamic rendering engine. Led 6 engineers on core architecture and code quality.",
        result: "Reduced overall application development effort by 40% across banking client applications and accelerated screen creation timelines.",
        technologies: ["Angular", "TypeScript", "Nx Monorepo", "Configuration Driven UI", "SCSS"]
      },
      {
        title: "Engineering High-Throughput BaaS Microservices & API Monetization",
        project: "Pulse Platform",
        situation: "The enterprise banking platform required a scalable architecture to monetize APIs and manage multi-tenant subscription workflows securely.",
        task: "Design and implement resilient backend microservices to handle high-frequency API billing, subscription tiers, and banking integrations.",
        action: "Built Java Spring Boot and Node.js microservices integrated with JWT authentication and AES encryption. Engineered automated billing calculation pipelines and RESTful gateway routing.",
        result: "Successfully launched the BaaS API monetization engine with zero critical security incidents and high API uptime.",
        technologies: ["Java", "Spring Boot", "Node.js", "Express.js", "REST APIs", "JWT", "Bcrypt"]
      },
      {
        title: "Onsite International Banking Deployment in Jordan",
        project: "Arab Bank",
        situation: "Arab Bank needed immediate modernization of teller station software with direct feedback loops from live operations staff in Amman, Jordan.",
        task: "Work onsite alongside executive stakeholders and branch teller teams to engineer high-reliability teller applications.",
        action: "Embedded onsite in Jordan to gather operational constraints, optimize Angular component rendering performance, and streamline Spring Boot REST payload parsing.",
        result: "Deployed mission-critical teller station tools with 25% faster screen transaction times and high teller user satisfaction.",
        technologies: ["Angular", "Spring Boot", "REST APIs", "RxJS", "Enterprise Security"]
      },
      {
        title: "Building Developer API Discovery & RBAC Marketplace",
        project: "API Exchange",
        situation: "Enterprise partners needed a self-service portal to discover APIs, request access, and manage OAuth/JWT subscriptions securely.",
        task: "Build an API discovery marketplace with granular role-based access control (RBAC) and subscription management workflows.",
        action: "Developed Node.js/Express REST API services for RBAC and subscription approvals, alongside a real-time Angular analytics dashboard.",
        result: "Enabled automated developer onboarding and self-service API token management across enterprise teams.",
        technologies: ["Node.js", "Express.js", "REST APIs", "Angular", "JWT", "OAuth"]
      }
    ],

    interviewPrep: [
      {
        category: "Architecture",
        question: `How would you design a Configuration-Driven UI architecture for ${companyName}'s financial portals?`,
        answerHint: "Discuss dynamic component rendering, JSON schema specs, Nx monorepo library distribution, and state management.",
        tailoredAnswer: `In my FPX Library project, I designed a configuration-driven UI architecture using Angular and Nx Monorepos. The core concept involves defining UI layouts, validations, and field controls as JSON schemas emitted by backend endpoints or dynamic config files. A central dynamic component factory inspects the schema, instantiates strongly-typed Angular components, and wires up RxJS reactive form controls automatically. This decouples visual rendering from domain logic, allowing product teams to launch new workflows with zero frontend code deployments.`
      },
      {
        category: "Technical",
        question: "How do you handle state management and performance optimization in large-scale Angular micro-frontends?",
        answerHint: "Mention RxJS subscriptions, NGXS/NGRX, Module Federation, trackBy, OnPush change detection, and bundle splitting.",
        tailoredAnswer: "I enforce ChangeDetectionStrategy.OnPush across all presentation components to eliminate unnecessary dirty checks. For micro-frontends, I leverage Webpack/Native Module Federation to share core dependencies (like Angular core, RxJS, and design token libraries) while isolating domain state using modular NGXS stores or RxJS behavior subjects. I also use async pipes, trackBy functions in lists, and strict unsubscription patterns to prevent memory leaks."
      },
      {
        category: "Fintech/Domain",
        question: "How do you ensure enterprise security and zero-trust data integrity in Spring Boot and Node.js microservices?",
        answerHint: "Discuss JWT token validation, AES-256 payload encryption, Bcrypt hashing, rate limiting, and CORS headers.",
        tailoredAnswer: "In the Pulse BaaS platform, security was paramount. I implemented JWT authorization filters at the API gateway layer, validating signatures and expiration before routing requests. Sensitive fields in payloads were encrypted at rest and in transit using AES-256. For backend services, I enforced strict input validation with Spring Validator / Joi, Bcrypt for key hashing, and centralized log masking to comply with financial privacy regulations."
      },
      {
        category: "Behavioral",
        question: "Describe a situation where you led a team of engineers through a complex architectural shift.",
        answerHint: "Focus on leading 6 engineers in FPX Library, establishing coding standards, code reviews, and CI/CD pipelines.",
        tailoredAnswer: "When introducing the FPX Library, engineers were accustomed to writing bespoke HTML/SCSS for every new banking screen. I led a team of 6 engineers by hosting architecture alignment sessions, setting up clear Nx monorepo coding standards, and pairing with developers during early sprint implementations. I instituted comprehensive code reviews and automated CI/CD checks using GitHub Actions. As a result, the team embraced the configuration-driven paradigm, ultimately reducing development effort by 40%."
      }
    ]
  };
}
