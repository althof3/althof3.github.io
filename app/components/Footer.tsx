import { GithubIcon, LinkedinIcon } from "./Icons";
import { Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-6 text-center pb-8 border-t border-[var(--color-lightest-navy)]/30 mt-20">
      {/* Social Links for Mobile (Usually placed on fixed sides on Desktop, but centered here for simplicity) */}
      <div className="flex justify-center gap-6 mb-6 mt-8">
        <a href="https://github.com/althof3" target="_blank" rel="noopener noreferrer" className="text-[var(--color-light-slate)] hover:text-[var(--color-teal)] hover:-translate-y-1 transition-all">
          <GithubIcon size={24} />
        </a>
        <a href="https://linkedin.com/in/althofrr" target="_blank" rel="noopener noreferrer" className="text-[var(--color-light-slate)] hover:text-[var(--color-teal)] hover:-translate-y-1 transition-all">
          <LinkedinIcon size={24} />
        </a>
        <a href="https://wa.me/6281399101172" target="_blank" rel="noopener noreferrer" className="text-[var(--color-light-slate)] hover:text-[var(--color-teal)] hover:-translate-y-1 transition-all">
          <Phone size={24} />
        </a>
      </div>

      <div className="text-[var(--color-slate)] font-mono text-[13px] hover:text-[var(--color-teal)] transition-colors cursor-pointer">
        Designed &amp; Built by Althof Ramdhan © {new Date().getFullYear()}
      </div>
    </footer>
  );
}
