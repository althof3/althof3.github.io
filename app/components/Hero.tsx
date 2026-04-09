export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center section-pad !px-6 lg:px-12 relative" id="hero">
      
      {/* Decorative Blob */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl rounded-full z-0 pointer-events-none var(--animate-blob)" />
      
      <div className="max-w-4xl relative z-10">
        <h1 className="text-cyan-400 font-bold mb-4 ml-1 flex items-center gap-2">
          <span className="w-8 h-[2px] bg-cyan-400 rounded-full"></span>
          Hey there, I&apos;m
        </h1>
        
        <h2 className="text-5xl sm:text-7xl font-extrabold text-white mb-2 tracking-tight">
          Althof Ramdhan.
        </h2>
        
        <h3 className="text-4xl sm:text-6xl font-bold text-slate-400 mb-8 tracking-tight">
          I build <span className="text-gradient">scalable</span> applications.
        </h3>
        
        <div className="max-w-xl text-slate-400 text-lg leading-relaxed mb-12">
          <p className="mb-4">
            I&apos;m a fullstack engineer with over 3 years of experience specializing in <span className="text-white font-medium">Golang</span>, <span className="text-white font-medium">Node.js</span>, and <span className="text-white font-medium">React</span>. 
          </p>
          <p>
            Currently, I am deeply focused on developing robust architecture and exploring decentralized systems.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5">
          <a href="https://docs.google.com/document/d/1vNeTutNHTIIhde6e6Bw3ugan-Xp6Ha4DHiEupsD1aXk/edit?usp=sharing" target="_blank" rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-white text-black font-bold text-sm hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all">
            View Resume
          </a>
          <a href="#contact"
            className="px-8 py-4 rounded-full glass-panel text-white font-bold text-sm hover:bg-white/10 hover:scale-105 transition-all">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
