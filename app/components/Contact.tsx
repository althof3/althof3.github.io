export default function Contact() {
  return (
    <section className="section-pad !px-6 text-center max-w-2xl mx-auto relative" id="contact">
      
      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="relative z-10 glass-panel p-10 md:p-16 rounded-[40px]">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Let&apos;s Connect
        </h2>
        <p className="text-slate-300 text-lg mb-10 leading-relaxed max-w-md mx-auto">
          Whether you have a question, an opportunity, or just want to say hi, my inbox is always open. 
          I&apos;ll try my best to get back to you!
        </p>
        
        <a href="mailto:althoframdhan3@gmail.com"
          className="px-10 py-5 rounded-full bg-white text-black font-bold text-sm hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all inline-block">
          Say Hello
        </a>
      </div>
    </section>
  );
}
