"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <div className="fixed top-0 inset-x-0 z-50 flex justify-center mt-4 px-4 pointer-events-none">
        <header 
          className={`flex items-center justify-between pointer-events-auto w-full max-w-4xl px-4 md:px-6 py-3 rounded-[2rem] transition-all duration-500 ${
            scrolled 
              ? "bg-[#050510]/50 backdrop-blur-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]" 
              : "bg-transparent border border-transparent"
          }`}
        >
          <a href="#" className="font-bold text-xl tracking-tighter text-white flex items-center gap-2 hover:opacity-80 transition-opacity pl-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 flex items-center justify-center text-sm shadow-[0_0_15px_rgba(0,242,254,0.3)]">
              AR
            </div>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8 pr-2">
            {links.map((l) => (
              <a key={l.href} href={l.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <a href="https://docs.google.com/document/d/1vNeTutNHTIIhde6e6Bw3ugan-Xp6Ha4DHiEupsD1aXk/edit?usp=sharing" target="_blank" rel="noopener noreferrer"
              className="px-6 py-2.5 text-sm font-bold rounded-full bg-white/10 text-white border border-white/20 hover:bg-white hover:text-black hover:scale-105 transition-all">
              Resume
            </a>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </header>
      </div>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed inset-0 bg-[#030014]/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-8 z-[45] md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="https://docs.google.com/document/d/1vNeTutNHTIIhde6e6Bw3ugan-Xp6Ha4DHiEupsD1aXk/edit?usp=sharing" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
             className="px-10 py-4 mt-6 text-lg font-bold rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/50">
            Resume
          </a>
        </div>
      )}
    </>
  );
}
