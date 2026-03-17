const WAITLIST_URL = "https://forms.gle/5V79kktNtTPCFmzk8";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-24 pb-20 text-center overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(45, 212, 191, 0.08) 0%, transparent 70%)",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full text-xs font-medium text-teal-400 border border-teal-400/20 bg-teal-400/5">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
          Now accepting early access applications
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
          Find reliable suppliers{" "}
          <br className="hidden md:block" />
          <span className="gradient-text">in minutes</span> with AI
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Stop scrolling through hundreds of supplier listings. Heron analyzes
          your requirements and recommends the best suppliers.
        </p>

        {/* CTA */}
        <a
          href={WAITLIST_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-bg bg-teal-400 hover:bg-teal-500 transition-all duration-200 glow-teal hover:scale-[1.02] active:scale-[0.98]"
        >
          Join Early Access
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        <p className="mt-4 text-xs text-slate-600">Free to join · No credit card required</p>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(transparent, #06090F)",
        }}
      />
    </section>
  );
}
