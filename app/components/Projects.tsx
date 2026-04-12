"use client";
import { useState, useEffect, useRef } from "react";
import { Folder, ExternalLink, ChevronLeft, ChevronRight, GraduationCap } from "lucide-react";
import { GithubIcon } from "./Icons";

const projects = [
  {
    name: "CrowdRadar",
    achievement: "🏆 Startup Village Bogor Participant",
    desc: "Empowering Indonesian citizens to map road damage and crime hotspots. This project successfully secured my placement as a participant in Startup Village Bogor by Superteam Indonesia. Supported by AI validation for reports and Solana-backed micro-rewards.",
    tech: ["Next.js", "Mapbox", "Solana", "AI Validation", "TailwindCSS"],
    github: "https://github.com/althof3/crowdSource",
    live: "https://crowd-source-s5j6.vercel.app/",
    image: "/crowdradar/crowdradar-1.png",
  },
  {
    name: "Votara",
    tag: "Web3 / Frontend",
    desc: "Decentralized voting interface featuring seamless Web3 wallet authentication, smart contract connection state management, and real-time polling updates. Executed as a high-fidelity UI prototype.",
    tech: ["Next.js", "Web3.js", "Wallet Connect", "Smart Contracts"],
    github: "https://github.com/althof3/votara",
    live: "https://votara.vercel.app/",
    image: "/votara/votara-1.png",
  },
  {
    name: "PBMadu Inventory",
    tag: "Thesis Project",
    desc: "Inventory Management System commissioned by a real company. Safely handles concurrent events in single-threaded Node.js with BullMQ, AWS S3 storage, and full Github CI/CD.",
    tech: ["NestJS", "BullMQ", "PostgreSQL", "AWS S3", "Docker"],
    github: "https://github.com/althof3",
    live: null,
    image: "/PBMadu Inventory/Aset.jpg",
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
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToActive = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.querySelector(`[data-id="${index}"]`) as HTMLElement;
    if (card) {
      const offsetLeft = card.offsetLeft;
      const cardWidth = card.clientWidth;
      const containerWidth = container.clientWidth;
      container.scrollTo({
        left: offsetLeft - (containerWidth / 2) + (cardWidth / 2),
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    scrollToActive(activeTab);
  }, [activeTab]);

  useEffect(() => {
    if (!isInView || isHovered || userInteracted) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % projects.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isInView, isHovered, userInteracted]);

  const navigate = (direction: "left" | "right") => {
    setUserInteracted(true);
    if (direction === "left") {
      setActiveTab((prev) => Math.max(0, prev - 1));
    } else {
      setActiveTab((prev) => Math.min(projects.length - 1, prev + 1));
    }
  };

  return (
    <section ref={sectionRef} className="section-pad relative overflow-hidden" id="projects">
      {/* Background glow - moved further from boundaries to avoid clipping patah even with overflow-hidden */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 mb-12 relative z-10">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Projects</h2>
          <div className="flex-1 h-[1px] bg-white/10 ml-4 max-w-[200px]" />
        </div>
      </div>

      <div 
        className="relative py-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 z-20 pointer-events-none flex items-center justify-start pl-4 md:pl-12">
          <button onClick={() => navigate("left")} className="pointer-events-auto p-4 rounded-full bg-white/5 hover:bg-white/10 text-white backdrop-blur-md border border-white/10 shadow-2xl transition-all hover:scale-110 disabled:opacity-0" disabled={activeTab === 0}>
            <ChevronLeft size={24} />
          </button>
        </div>

        <div className="absolute inset-y-0 right-0 w-24 md:w-48 z-20 pointer-events-none flex items-center justify-end pr-4 md:pr-12">
          <button onClick={() => navigate("right")} className="pointer-events-auto p-4 rounded-full bg-white/5 hover:bg-white/10 text-white backdrop-blur-md border border-white/10 shadow-2xl transition-all hover:scale-110 disabled:opacity-0" disabled={activeTab === projects.length - 1}>
            <ChevronRight size={24} />
          </button>
        </div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory pt-10 pb-20"
          style={{ paddingLeft: "calc(50vw - 275px)", paddingRight: "calc(50vw - 275px)" }}
          onTouchStart={() => setUserInteracted(true)}
          onMouseDown={() => setUserInteracted(true)}
          onWheel={() => setUserInteracted(true)}
        >
          {projects.map((p, idx) => {
            const isActive = activeTab === idx;
            return (
              <div 
                key={p.name}
                data-id={idx}
                onClick={() => { setActiveTab(idx); setUserInteracted(true); }}
                className={`snap-center shrink-0 w-[90vw] max-w-[550px] mx-6 first:ml-10 md:first:ml-0 last:mr-[30px] md:last:mr-0 glass-panel border-[1px] p-10 rounded-[3rem] relative transition-all duration-700 ease-out cursor-pointer overflow-hidden flex flex-col group
                  ${isActive 
                    ? "scale-100 opacity-100 z-10 border-cyan-400/50 shadow-[0_20px_60px_rgba(0,242,254,0.2)] bg-white/10" 
                    : "scale-90 opacity-20 z-0 border-transparent bg-white/5 hover:opacity-50"}
                `}
              >
                {/* Background Image / Placeholder */}
                {p.image ? (
                  <div className={`absolute inset-0 z-0 transition-all duration-700 ease-in-out transform 
                    ${isActive ? "opacity-10 scale-110 md:opacity-40 md:blur-0 md:scale-100" : "opacity-40"}
                    group-hover:opacity-10 group-hover:blur-sm group-hover:scale-110`}
                  >
                    <img 
                      src={p.image} 
                      alt={p.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/95" />
                  </div>
                ) : (
                  <div className="absolute inset-0 z-0 bg-white/5 opacity-50" />
                )}

                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 transition-colors duration-500 pointer-events-none" />

                {/* Content Area */}
                <div className="relative flex-1 flex flex-col min-h-[320px] z-10 pt-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">{p.name}</h3>
                      {p.achievement && (
                        <div className="inline-block mt-3 px-3 py-1 bg-gradient-to-r from-amber-500/20 to-yellow-500/10 border border-amber-500/30 rounded-full text-amber-300 text-[10px] font-bold shadow-[0_0_10px_rgba(251,191,36,0.2)] uppercase tracking-wider">
                          {p.achievement}
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-all p-2 hover:bg-white/10 rounded-full backdrop-blur-md border border-white/5 hover:border-white/20">
                          <GithubIcon size={18} />
                        </a>
                      )}
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-all p-2 hover:bg-white/10 rounded-full backdrop-blur-md border border-white/5 hover:border-white/20">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description - Revealed on Hover OR Active (Mobile) */}
                  <div className="relative flex-1 overflow-hidden mt-2">
                    <div className={`absolute inset-0 transition-all duration-700 ease-in-out transform flex flex-col
                      ${isActive ? "opacity-100 translate-y-0 md:opacity-0 md:translate-y-4" : "opacity-0 translate-y-4"}
                      group-hover:opacity-100 group-hover:translate-y-0`}
                    >
                      <p className="text-[15px] text-slate-200 leading-relaxed overflow-y-auto pr-2 custom-scrollbar">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-auto relative z-10 pt-6 border-t border-white/10">
                  {p.tech.map((tech) => (
                    <span key={tech} className="text-[10px] font-bold px-3 py-1 bg-white/10 text-slate-300 rounded-full border border-white/10 backdrop-blur-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Enhanced Education Section */}
      <div className="max-w-4xl mx-auto px-6 mt-16 relative z-10">
        <div className="flex items-center gap-3 mb-8 ml-2">
          <GraduationCap className="text-cyan-400" size={28} />
          <h2 className="text-2xl font-bold text-white tracking-tight">Education</h2>
        </div>
        
        <div className="glass-panel p-8 md:p-10 rounded-[2.5rem] flex flex-col md:flex-row md:justify-between md:items-center hover:bg-white/10 border border-white/10 transition-all duration-500 group relative overflow-hidden shadow-2xl">
          {/* Internal Glow Effect */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">University of Indonesia</h3>
            <p className="text-slate-300 font-medium mt-1 text-lg">Bachelor in Computer Science</p>
            <div className="flex items-center gap-2 mt-4">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,1)]" />
              <p className="text-cyan-400/80 text-sm font-bold uppercase tracking-wider">Depok, Indonesia</p>
            </div>
          </div>
          <div className="relative z-10 text-slate-400 font-bold text-sm mt-8 md:mt-0 bg-white/5 px-6 py-3 rounded-2xl border border-white/10 backdrop-blur-md group-hover:border-cyan-500/30 transition-colors">
            Sep 2019 — June 2023
          </div>
        </div>
      </div>
    </section>
  );
}
