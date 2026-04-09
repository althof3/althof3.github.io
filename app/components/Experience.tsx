"use client";
import { useState } from "react";

const jobs = [
  {
    company: "DAnS Multi Pro",
    title: "Fullstack Engineer",
    period: "Aug 2025 - Present",
    bullets: [
      "AI Content Summarization with Kafka async background processing",
      "Real-time WebSocket notification system for instant in-app updates",
      "Security hardening: obfuscation, clickjacking protection, HSTS & CORS",
      "Fixed midnight heap OOM crashes — switched to MongoDB streaming queries",
      "Single-flight refresh token mechanism to prevent concurrent auth races",
    ],
    tech: ["Node.js", "MongoDB", "Kafka", "WebSockets"],
  },
  {
    company: "Astra Property",
    title: "Backend Engineer",
    period: "Aug 2024 - Aug 2025",
    bullets: [
      "Loyalty voucher system with DB locking to prevent concurrent over-claims",
      "Full event lifecycle system — creation, booking, capacity management",
      "In-app payment gateway for paid events",
    ],
    tech: ["Golang", "PostgreSQL", "Payment Gateway"],
  },
  {
    company: "eFishery",
    title: "Backend Engineer",
    period: "Jun 2023 - Jul 2024",
    bullets: [
      "Diagnosed intermittent 503s from unclosed DB connections",
      "Proposed Elasticsearch to fix slow paginated queries",
      "Improved SQL performance ~25% across critical use cases",
      "Pub/Sub via Redis & RabbitMQ for cross-service DB sync",
    ],
    tech: ["Golang", "Elasticsearch", "Redis", "RabbitMQ", "SQL"],
  },
  {
    company: "Rey.id",
    title: "Backend Engineer Intern",
    period: "Feb 2023 - May 2023",
    bullets: [
      "Microservices architecture implementation",
      "Developed using Node.js, TypeScript & GraphQL",
      "Kafka Pub/Sub for cross-service synchronization",
    ],
    tech: ["Node.js", "TypeScript", "GraphQL", "Kafka"],
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="section-pad px-6 lg:px-12" id="experience">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white">Experience</h2>
        <div className="flex-1 h-[1px] bg-white/10 ml-4 max-w-[200px]" />
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-12 min-h-[350px]">
        {/* Modern Pill Tabs */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible no-scrollbar md:w-56 shrink-0 gap-2">
          {jobs.map((job, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-3 md:py-4 text-sm font-bold text-left whitespace-nowrap transition-all duration-300 rounded-xl
                ${activeTab === idx 
                  ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)] scale-[1.02]" 
                  : "text-slate-400 border-transparent hover:bg-white/5 hover:text-white"}
              `}
            >
              {job.company}
            </button>
          ))}
        </div>

        {/* Glassmorphic Content Panel */}
        <div className="flex-1 glass-panel p-6 md:p-10 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full" />
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-1">
              {jobs[activeTab].title}{" "}
            </h3>
            <p className="text-cyan-400 font-medium mb-6">
              {jobs[activeTab].period}
            </p>

            <ul className="space-y-4">
              {jobs[activeTab].bullets.map((bullet, idx) => (
                <li key={idx} className="flex gap-4 items-start text-slate-300 text-[15px] leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(0,242,254,0.8)]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t border-white/5">
              {jobs[activeTab].tech.map((techItem, idx) => (
                <span key={idx} className="text-xs font-bold px-4 py-1.5 glass-panel text-white rounded-full">
                  {techItem}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
