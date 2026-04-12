import { GithubIcon, LinkedinIcon } from "./Icons";
import { Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-6 text-center pb-8 border-t border-white/5 mt-20">
      {/* Social Links for Mobile (Usually placed on fixed sides on Desktop, but centered here for simplicity) */}
      <div className="flex justify-center gap-6 mb-6 mt-8">
        <a href="https://github.com/althof3" target="_blank" rel="noopener noreferrer" aria-label="Github" className="text-slate-400 hover:text-cyan-400 hover:-translate-y-1 transition-all">
          <GithubIcon size={24} />
        </a>
        <a href="https://linkedin.com/in/althofrr" target="_blank" rel="noopener noreferrer" aria-label="Linkedin" className="text-slate-400 hover:text-cyan-400 hover:-translate-y-1 transition-all">
          <LinkedinIcon size={24} />
        </a>
        <a href="https://wa.me/6281399101172" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-slate-300 hover:text-cyan-400 hover:-translate-y-1 transition-all">
          <Phone size={24} />
        </a>
      </div>

      <div className="text-slate-300 font-mono text-sm hover:text-cyan-400 transition-colors cursor-pointer">
        Designed &amp; Built by Althof Ramdhan © {new Date().getFullYear()}
      </div>
    </footer>
  );
}
