const stats = [
  {
    value: "20+",
    label: "Years of manufacturing expertise",
    description: "Our founders have spent decades on factory floors and in supplier negotiations.",
  },
  {
    value: "10,000+",
    label: "Suppliers in our proprietary network",
    description: "A curated, verified network built through years of on-the-ground sourcing relationships.",
  },
];

export default function SocialProof() {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4 text-center">
          Why trust Heron
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 tracking-tight">
          Built by people who&apos;ve{" "}
          <span className="text-slate-400">been there</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="p-8 rounded-2xl border border-teal-400/15 bg-teal-400/[0.03] text-center group hover:border-teal-400/30 transition-all duration-300"
            >
              <div className="text-5xl md:text-6xl font-bold gradient-text mb-3">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-white mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="flex flex-wrap justify-center items-center gap-8 py-8 border-t border-border">
          {[
            "Manufacturing background",
            "Verified supplier network",
            "AI-powered matching",
            "Built for sourcing teams",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-slate-500">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-teal-500 flex-shrink-0">
                <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
