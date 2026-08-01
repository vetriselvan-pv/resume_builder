import React from 'react';
import { FileText, Download, Printer, ExternalLink } from 'lucide-react';

interface VisualResumePreviewProps {
  latexCode: string;
  candidateName?: string;
  companyName?: string;
  positionName?: string;
  onCopyLatex: () => void;
  onDownloadTex: () => void;
}

export const VisualResumePreview: React.FC<VisualResumePreviewProps> = ({
  latexCode,
  candidateName = "Vetriselvan Panneerselvam",
  companyName,
  positionName,
  onCopyLatex,
  onDownloadTex
}) => {
  // Simple LaTeX parser for paper preview simulation
  const isCoverLetter = latexCode.includes("Cover Letter") || latexCode.includes("Dear Hiring Manager");

  const cleanText = (str: string) => {
    return str
      .replace(/\\textbf\{([^}]+)\}/g, '$1')
      .replace(/\\textit\{([^}]+)\}/g, '$1')
      .replace(/\\url\{([^}]+)\}/g, '$1')
      .replace(/\\\\/g, '')
      .replace(/\\vspace\{[^}]+\}/g, '')
      .replace(/\\%/, '%')
      .replace(/\\&/, '&')
      .replace(/\\_/g, '_')
      .replace(/\\/g, '');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-md">
      {/* Action Bar */}
      <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between text-xs">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-slate-900">
            {isCoverLetter ? "coverletter.tex Preview" : "resume.tex Paper Simulation"}
          </span>
          {companyName && (
            <span className="text-[10px] bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded border border-indigo-200">
              For {companyName}
            </span>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handlePrint}
            id="btn-print-preview"
            className="flex items-center space-x-1.5 bg-white hover:bg-slate-50 text-slate-700 px-2.5 py-1 rounded text-[11px] font-medium border border-slate-200 shadow-sm transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Save PDF</span>
          </button>
          <button
            onClick={onDownloadTex}
            id="btn-download-tex"
            className="flex items-center space-x-1.5 bg-indigo-600 hover:bg-indigo-500 text-white px-2.5 py-1 rounded text-[11px] font-medium shadow transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download .tex</span>
          </button>
        </div>
      </div>

      {/* Paper Container Viewport */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-200/50 flex justify-center">
        <div className="w-full max-w-[800px] bg-white text-slate-900 shadow-xl rounded-sm p-8 sm:p-12 font-sans text-xs leading-relaxed transition-all my-2 border border-slate-300 print:shadow-none print:m-0 print:w-full print:max-w-none">
          
          {/* Paper Header */}
          <div className="text-center pb-4 border-b border-slate-300 mb-4 space-y-1">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 uppercase">
              VETRISELVAN PANNEERSELVAM
            </h1>
            <p className="text-[11px] font-semibold text-slate-700">
              Senior Full Stack Engineer &nbsp;|&nbsp; Angular Architecture &nbsp;|&nbsp; Java Spring Boot &nbsp;|&nbsp; Node.js
            </p>
            <p className="text-[10px] text-slate-600 font-mono">
              Chennai, India &nbsp;|&nbsp; Open to Remote & Relocation (Visa Sponsorship) &nbsp;|&nbsp; Notice Period: 60 Days
            </p>
            <div className="text-[10px] text-indigo-700 flex flex-wrap justify-center gap-x-3 gap-y-0.5 pt-0.5">
              <a href="https://vetriselvan-pv.github.io/profile" target="_blank" rel="noreferrer" className="hover:underline">Portfolio</a>
              <span>•</span>
              <a href="https://github.com/vetriselvan-pv" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
              <span>•</span>
              <a href="https://linkedin.com/in/vetriselvan-panneerselvam" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
              <span>•</span>
              <a href="https://medium.com/@vetriselvan_11" target="_blank" rel="noreferrer" className="hover:underline">Medium Tech Blog</a>
            </div>
          </div>

          {!isCoverLetter ? (
            /* RESUME SIMULATION CONTENT */
            <div className="space-y-4">
              
              {/* Summary Section */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5">
                  Professional Summary
                </h2>
                <p className="text-[11px] text-slate-800 leading-relaxed">
                  Senior Full Stack Engineer with 7+ years of hands-on experience architecting high-concurrency enterprise applications, Banking as a Service (BaaS) platforms, and RESTful microservices for international financial institutions. Expert in Angular (v8-v21), TypeScript, RxJS, Java Spring Boot, Node.js, and configuration-driven UI frameworks. Architected FPX Library using Nx Monorepos, reducing engineering effort by 40%. Proven technical leader who led squads of 3–6 engineers while remaining hands-on in architecture, code reviews, and CI/CD automation.
                </p>
              </div>

              {/* Skills Section */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5">
                  Technical Expertise
                </h2>
                <div className="space-y-1 text-[11px] text-slate-800">
                  <p><strong>Frontend Engineering:</strong> Angular (v8-v21), TypeScript, JavaScript, RxJS, NGXS, Angular Material, Tailwind CSS, SCSS, React, Next.js, Ionic, GSAP, D3.js</p>
                  <p><strong>Backend & Microservices:</strong> Java, Spring Boot, Node.js, Express.js, REST APIs, Microservices, Prisma ORM, JWT, Bcrypt, AES Encryption</p>
                  <p><strong>Architecture & Monorepos:</strong> Nx Monorepo, Module Federation, Native Federation, Micro Frontends, Configuration Driven UI</p>
                  <p><strong>Databases & DevOps:</strong> PostgreSQL, MongoDB, Docker, CI/CD, GitHub Actions, Jenkins, Jest, Vitest, Git</p>
                </div>
              </div>

              {/* Project Experience */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5">
                  Project Experience
                </h2>

                <div className="space-y-3 pt-1">
                  <div>
                    <div className="flex items-center justify-between font-bold text-[11px] text-slate-900">
                      <span>FPX Library --- Enterprise Angular UI Framework</span>
                      <span className="text-slate-600 font-normal">Lead Architect & Engineer</span>
                    </div>
                    <ul className="list-disc list-inside text-[10.5px] text-slate-800 space-y-0.5 mt-0.5 pl-1">
                      <li>Architected configuration-driven Angular framework using Nx Monorepos and reusable NPM libraries, reducing duplicate development by 40% across enterprise banking applications.</li>
                      <li>Designed dynamic backend-driven UI rendering architecture to auto-render complex banking forms and transaction grids.</li>
                      <li>Led an engineering squad of 6 developers on core architecture design, strict code reviews, and CI/CD pipelines.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center justify-between font-bold text-[11px] text-slate-900">
                      <span>Pulse --- Enterprise Banking as a Service (BaaS) Platform</span>
                      <span className="text-slate-600 font-normal">Senior Full Stack Engineer</span>
                    </div>
                    <ul className="list-disc list-inside text-[10.5px] text-slate-800 space-y-0.5 mt-0.5 pl-1">
                      <li>Engineered high-throughput Java Spring Boot and Node.js microservices powering API monetization, billing engines, and subscription management.</li>
                      <li>Integrated JWT token authentication and AES encryption to enforce zero-trust security across sensitive banking endpoints.</li>
                      <li>Collaborated with international banking stakeholders to streamline multi-tenant BaaS API integration pipelines.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center justify-between font-bold text-[11px] text-slate-900">
                      <span>API Exchange --- Enterprise API Marketplace</span>
                      <span className="text-slate-600 font-normal">Full Stack Engineer</span>
                    </div>
                    <ul className="list-disc list-inside text-[10.5px] text-slate-800 space-y-0.5 mt-0.5 pl-1">
                      <li>Developed developer API discovery engine, role-based access control (RBAC), and subscription approval workflows using Node.js and REST APIs.</li>
                      <li>Built responsive Angular dashboard interfaces with real-time metrics to monitor high-volume marketplace traffic.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center justify-between font-bold text-[11px] text-slate-900">
                      <span>Arab Bank --- Onsite Teller & Banking Platform (Amman, Jordan)</span>
                      <span className="text-slate-600 font-normal">Onsite Senior Engineer</span>
                    </div>
                    <ul className="list-disc list-inside text-[10.5px] text-slate-800 space-y-0.5 mt-0.5 pl-1">
                      <li>Developed mission-critical Teller applications onsite in Amman, Jordan, collaborating directly with senior banking executives and branch managers.</li>
                      <li>Optimized client-side rendering performance and REST payload parsing, reducing teller station transaction latency by 25%.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center justify-between font-bold text-[11px] text-slate-900">
                      <span>iTurmeric Studio & Sberbank --- Low Code Platform & Digital Banking</span>
                      <span className="text-slate-600 font-normal">Senior Engineer</span>
                    </div>
                    <ul className="list-disc list-inside text-[10.5px] text-slate-800 space-y-0.5 mt-0.5 pl-1">
                      <li>Engineered low-code enterprise UI modules and Java Spring Boot APIs for service requests, flex pay, and digital onboarding.</li>
                      <li>Mentored junior engineers on RxJS state management, unit testing with Jest, and modular architecture.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Leadership & Awards */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5">
                  Leadership, Open Source & Awards
                </h2>
                <div className="space-y-1 text-[10.5px] text-slate-800">
                  <p><strong>Leadership:</strong> Led engineering teams of 3 to 6 engineers through sprint planning, architecture design, code reviews, and CI/CD improvements.</p>
                  <p><strong>Open Source & Writing:</strong> Contributor to AnalogJS (Angular ecosystem); Author on Medium and Dev.to covering Angular performance and Spring Boot microservices.</p>
                  <p><strong>Awards:</strong> Recipient of Sergey Bubka Award, Spotlight Award, Ace Developer Award, and Rockstar Rookie Award.</p>
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5">
                  Education & Languages
                </h2>
                <div className="flex justify-between text-[11px] text-slate-800">
                  <span><strong>Bachelor of Engineering:</strong> Mechanical Engineering</span>
                  <span><strong>Languages:</strong> English (Fluent), Tamil (Native)</span>
                </div>
              </div>

            </div>
          ) : (
            /* COVER LETTER SIMULATION CONTENT */
            <div className="space-y-4 text-[11px] text-slate-800 leading-relaxed pt-2">
              <p className="font-semibold text-slate-900">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

              <div>
                <p className="font-bold text-slate-900">Hiring Manager / Recruiting Team</p>
                <p className="font-semibold text-indigo-800">{companyName || "Target Company"}</p>
              </div>

              <p className="font-bold text-slate-900">
                RE: Application for {positionName || "Senior Full Stack Engineer"}
              </p>

              <p>Dear Hiring Manager,</p>

              <p>
                I am writing to express my enthusiastic interest in the <strong>{positionName || "Senior Full Stack Engineer"}</strong> role at <strong>{companyName || "Target Company"}</strong>. With over 7 years of professional experience engineering enterprise software, Banking as a Service (BaaS) platforms, and RESTful microservices, I am excited about the opportunity to bring my hands-on technical architecture skills and engineering leadership to your team.
              </p>

              <p>
                In my recent position, I architected the <strong>FPX Library</strong>—a configuration-driven Angular framework built on Nx Monorepos and module federation that reduced duplicate development effort by 40% across banking client applications. As a Senior Full Stack Engineer on the <strong>Pulse BaaS platform</strong>, I engineered core Java Spring Boot and Node.js microservices for API monetization, billing, and subscription management. Furthermore, my experience includes leading onsite engineering deployments for <strong>Arab Bank in Jordan</strong>, interfacing directly with branch stakeholders to deploy high-reliability teller systems.
              </p>

              <p>
                {companyName || "Target Company"}'s commitment to engineering scalability and product innovation closely matches my career focus. I thrive in collaborative environments where I can drive hands-on microservice architecture, mentor developers, and deliver resilient RESTful APIs coupled with polished TypeScript UI frameworks.
              </p>

              <p>
                I am open to remote arrangements as well as international relocation with visa sponsorship. I welcome the opportunity to discuss how my background in banking applications, monorepos, and full-stack development will add immediate value to {companyName || "your engineering team"}.
              </p>

              <p>Thank you for your time and consideration.</p>

              <div className="pt-4">
                <p>Sincerely,</p>
                <p className="font-bold text-slate-900 mt-2">Vetriselvan Panneerselvam</p>
                <p className="text-slate-600">Senior Full Stack Engineer</p>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
