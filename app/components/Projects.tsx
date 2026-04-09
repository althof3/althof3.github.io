import { Folder, ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";

const projects = [
  {
    name: "CrowdSource",
    achievement: "🏆 Startup Village Bogor Participant (by Superteam ID)",
    desc: "Empowering Indonesian citizens to map road damage and crime hotspots. This exact project successfully secured my placement as a participant in Startup Village Bogor by Superteam Indonesia. Supported by AI validation for reports and Solana-backed micro-rewards.",
    tech: ["Next.js", "Mapbox", "Solana", "AI Validation", "TailwindCSS"],
    github: "https://github.com/althof3/crowdSource",
    live: "https://crowd-source-s5j6.vercel.app/",
  },
  {
    name: "Votara",
    tag: "Web3 / Frontend",
    desc: "Decentralized voting interface featuring seamless Web3 wallet authentication, smart contract connection state management, and real-time polling updates. Executed as a high-fidelity UI prototype.",
    tech: ["Next.js", "Web3.js", "Wallet Connect", "Smart Contracts"],
    github: "https://github.com/althof3/votara",
    live: "https://votara.vercel.app/",
  },
  {
    name: "PBMadu Inventory",
    tag: "Thesis Project",
    desc: "Inventory Management System commissioned by a real company. Safely handles concurrent events in single-threaded Node.js with BullMQ, AWS S3 storage, and full Github CI/CD.",
    tech: ["NestJS", "BullMQ", "PostgreSQL", "AWS S3", "Docker"],
    github: "https://github.com/althof3",
    live: null,
  },
  {
    name: "Simple Bank",
    tag: "Personal",
    desc: "Backend banking simulator exploring deep transactional database semantics. Implemented deadlock prevention, DB isolation levels, and gRPC communication.",
    tech: ["Golang", "PostgreSQL", "gRPC", "Protobuf"],
    github: "https://github.com/althof3",
    live: null,
  },
  {
    name: "SusunJadwal",
    tag: "Open Source",
    desc: "Class schedule planner for Universitas Indonesia. Contributions drove user growth to 8,000+ new users and 145,000+ page visits via reusable components and UI revamp.",
    tech: ["Python", "Flask", "React.js", "Chakra UI", "RabbitMQ"],
    github: "https://github.com/ristekoss",
    live: "https://susunjadwal.cs.ui.ac.id",
  },
];

export default function Projects() {
  return (
    <section className="section-pad !px-6 lg:px-12 relative" id="projects">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex items-center gap-4 mb-12 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white">Projects</h2>
        <div className="flex-1 h-[1px] bg-white/10 ml-4 max-w-[200px]" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {projects.map((p) => (
          <div key={p.name} className="flex flex-col glass-panel border-[1px] border-[var(--color-brand-border)] hover:border-cyan-400/50 rounded-3xl p-8 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 group cursor-pointer relative overflow-hidden">
            
            {/* Subtle card Inner Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 transition-colors duration-500 pointer-events-none" />

            <div className="flex justify-between items-center mb-8 relative z-10">
              <div className="p-3 bg-white/5 rounded-2xl">
                <Folder size={32} className="text-white" />
              </div>
              <div className="flex items-center gap-3">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
                    <GithubIcon size={20} />
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>

            <div className="mb-3 relative z-10">
              <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                {p.name}
              </h3>
              {p.achievement && (
                <div className="inline-block mt-2 px-3 py-1 bg-gradient-to-r from-amber-500/20 to-yellow-500/10 border border-amber-500/30 rounded-full text-amber-300 text-xs font-bold shadow-[0_0_10px_rgba(251,191,36,0.2)]">
                  {p.achievement}
                </div>
              )}
            </div>
            
            <p className="text-[15px] text-slate-300 leading-relaxed mb-8 flex-1 relative z-10">
              {p.desc}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto relative z-10">
              {p.tech.map((tech) => (
                <span key={tech} className="text-[11px] font-bold px-3 py-1 bg-white/5 text-slate-300 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Soft Education Section */}
      <h2 className="text-2xl font-bold text-white mt-32 mb-8 ml-2">
        Education
      </h2>
      
      <div className="glass-panel p-8 rounded-3xl max-w-3xl flex flex-col md:flex-row md:justify-between md:items-center hover:bg-white/5 transition-colors cursor-default">
        <div>
          <h3 className="text-xl font-bold text-white">University of Indonesia</h3>
          <p className="text-slate-300 font-medium mt-1">Bachelor in Computer Science</p>
          <p className="text-cyan-400 text-sm mt-2 font-bold">Depok, Indonesia</p>
        </div>
        <div className="text-slate-400 font-bold text-sm mt-4 md:mt-0 bg-white/5 px-4 py-2 rounded-full">
          Sep 2019 — June 2023
        </div>
      </div>
    </section>
  );
}
