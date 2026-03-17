const WAITLIST_URL = "https://forms.gle/5V79kktNtTPCFmzk8";

export default function CTASection() {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <div
          className="relative rounded-3xl p-12 md:p-16 text-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(45, 212, 191, 0.08) 0%, rgba(96, 165, 250, 0.05) 100%)",
            border: "1px solid rgba(45, 212, 191, 0.2)",
          }}
        >
          {/* Glow blob */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse, rgba(45, 212, 191, 0.15) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-500 mb-4">
              Early Access
            </p>

            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Be the first to source
              <br />
              <span className="gradient-text">smarter</span>
            </h2>

            <p className="text-slate-400 max-w-md mx-auto mb-10 leading-relaxed">
              Join our early access waitlist and get priority access when Heron launches. Limited spots available.
            </p>

            <a
              href={WAITLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-bg bg-teal-400 hover:bg-teal-500 transition-all duration-200 glow-teal hover:scale-[1.02] active:scale-[0.98]"
            >
              Join the Early Access Waitlist
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <p className="mt-4 text-xs text-slate-600">
              Free to join · No credit card required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
