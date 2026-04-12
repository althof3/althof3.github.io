"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const jobs = [
  {
    company: "DAnS Multi Pro",
    title: "Fullstack Engineer",
    period: "Aug 2025 - Present",
    logo: "/dans.jpg",
    bullets: [
      "AI Content Summarization with Kafka async background processing",
      "Real-time WebSocket notification system for instant in-app updates",
      "Security hardening: obfuscation, clickjacking protection, HSTS & CORS",
      "Fixed midnight heap OOM crashes — switched to MongoDB streaming queries",
    ],
    tech: ["Node.js", "MongoDB", "Kafka", "WebSockets"],
  },
  {
    company: "Astra Property",
    title: "Backend Engineer",
    period: "Aug 2024 - Aug 2025",
    logo: "/aspro.jpg",
    bullets: [
      "Loyalty voucher system with DB locking to prevent concurrent over-claims",
      "Full event lifecycle system — creation, booking, capacity management",
      "In-app payment gateway for paid events",
    ],
    tech: ["Java", "Spring Boot", "MySQL", "Payment Gateway"],
  },
  {
    company: "eFishery",
    title: "Backend Engineer",
    period: "Jun 2023 - Jul 2024",
    logo: "/efishery.jpg",
    bullets: [
      "Diagnosed intermittent 503s from unclosed DB connections",
      "Proposed Elasticsearch to fix slow paginated queries",
      "Improved SQL performance ~25% across critical use cases",
      "Pub/Sub via Redis & RabbitMQ for sync all database on each service",
    ],
    tech: ["Golang", "Elasticsearch", "Redis", "RabbitMQ"],
  },
  {
    company: "Rey.id",
    title: "Backend Engineer Intern",
    period: "Feb 2023 - May 2023",
    logo: "/rey.jpg",
    bullets: [
      "Microservices architecture implementation",
      "Developed using Node.js, TypeScript & GraphQL",
      "Kafka Pub/Sub for cross-service synchronization",
    ],
    tech: ["Node.js", "TypeScript", "GraphQL", "Kafka"],
  },
  {
    company: "Bahasa.ai",
    title: "Backend Engineer Intern",
    period: "Aug 2022 - Dec 2022",
    logo: "/bahasa_ai_logo.jpeg",
    bullets: [
      "Implemented chatbot workflow for clients using Typescript, Express.js",
      "Created an error code framework for easier debugging",
      "Initiated documentation for error code mechanism",
    ],
    tech: ["TypeScript", "Express.js", "Kafka", "MongoDB"],
  },
  {
    company: "Kargo Technologies",
    title: "Software Engineer Intern",
    period: "Apr 2022 - Aug 2022",
    logo: "/kargo-tech.jpeg",
    bullets: [
      "Built Nexus Analytics dashboard for delivery data visualization",
      "Developed backend services with Golang (Gin) and Next.js frontend",
      "Deployed on Ubuntu Server with Docker and Nginx",
    ],
    tech: ["Golang", "Gin", "Next.js", "Docker"],
  },
  {
    company: "Lumina",
    title: "Frontend Engineer Intern",
    period: "Dec 2021 - Feb 2022",
    logo: "/lumina.jpeg",
    bullets: [
      "Revamped landing page for job seekers enhancing user engagement",
      "Developed scalable web components using Next.js and Redux",
      "Implemented dynamic sitemap with AWS EventBridge for SEO",
    ],
    tech: ["Next.js", "TypeScript", "Redux", "AWS"],
  },
  {
    company: "9cv9",
    title: "Frontend Engineer Intern",
    period: "Aug 2021 - Nov 2021",
    logo: "/9cv9_logo.jpeg",
    bullets: [
      "Developed dynamic web application for instant CV generation",
      "Engineered reusable CV templates with real-time preview",
      "Resolved critical bugs for platform reliability",
    ],
    tech: ["React", "TypeScript", "Redux"],
  },
];

function ExperienceCard({ job }: { job: typeof jobs[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div 
      onClick={() => setExpanded(!expanded)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setExpanded(!expanded);
        }
      }}
      role="button"
      tabIndex={0}
      aria-expanded={expanded}
      className="glass-panel p-6 md:p-8 rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group relative overflow-hidden flex flex-col cursor-pointer select-none' active:scale-[0.99] shadow-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl rounded-full" />
      
      {/* Mobile date badge */}
      <div className="md:hidden mb-4">
        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-bold tracking-widest uppercase">
          {job.period}
        </span>
      </div>

      <div className="flex items-center gap-4 mb-4 relative z-10">
        {job.logo && (
          <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-xl md:rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-1 group-hover:border-cyan-500/50 transition-colors">
            <img src={job.logo} alt={job.company} className="w-full h-full object-contain rounded-lg md:rounded-xl" />
          </div>
        )}
        <div className="flex flex-col">
          <h3 className="text-lg md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors leading-tight">
            {job.title}
          </h3>
          <p className="text-slate-300 font-bold text-xs md:text-sm">
            @ {job.company}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-white transition-colors mb-4 group/btn">
        <span>{expanded ? "HIDE DETAILS" : "SHOW DETAILS"}</span>
        {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </div>

      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${expanded ? "max-h-[800px] opacity-100 mb-6" : "max-h-0 opacity-0"}`}>
        <ul className="space-y-3 pt-2">
          {job.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-3 text-sm text-slate-300 leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)] shrink-0" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 mt-auto">
        {job.tech.map((t, i) => (
          <span key={i} className="text-xs font-bold px-2 py-1 bg-white/5 text-slate-400 rounded-md border border-white/5">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section className="section-pad relative overflow-hidden" id="experience">
      <div className="max-w-4xl mx-auto px-6 mb-20">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Experience</h2>
          <div className="flex-1 h-[1px] bg-white/10 ml-4 max-w-[200px]" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* The Timeline Vertical Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-transparent translate-x-[62px] md:-translate-x-1/2 z-0" />

        <div className="relative z-10">
          {jobs.map((job, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className="flex flex-col md:flex-row md:items-center relative mb-6 md:mb-0 last:mb-0">
                
                {/* Date on the Opposite Side (Desktop only) */}
                <div className={`hidden md:flex w-1/2 items-center px-12 ${isEven ? 'justify-end' : 'justify-start md:order-last'}`}>
                  <span className="text-sm font-black tracking-[0.2em] uppercase origin-center transform transition-all duration-500 text-cyan-400 hover:scale-105 cursor-default">
                    {job.period}
                  </span>
                </div>

                {/* Timeline Dot - Mathematically centered on the line, filled color on the first item */}
                <div className={`absolute left-0 md:left-1/2 w-4 h-4 md:w-4 md:h-4 rounded-full border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] translate-x-[31px] md:-translate-x-1/2 z-20 mt-[30px] md:mt-0 ${idx === 0 ? 'bg-cyan-400' : 'bg-[#030014]'}`} />
                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:order-last md:pl-16' : 'md:pr-16'}`}>
                  <ExperienceCard job={job} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
