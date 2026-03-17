const features = [
  {
    number: "01",
    title: "Match you with relevant suppliers",
    description:
      "Describe your product and requirements. Heron searches its proprietary network to surface suppliers that actually fit.",
  },
  {
    number: "02",
    title: "Analyze supplier credibility",
    description:
      "AI cross-references certifications, production history, and third-party signals to flag risks before you engage.",
  },
  {
    number: "03",
    title: "Compare pricing signals",
    description:
      "Understand market pricing ranges instantly — so you walk into negotiations with data, not guesses.",
  },
  {
    number: "04",
    title: "Generate RFQs instantly",
    description:
      "Auto-generate professional Request for Quotation documents tailored to each supplier in seconds.",
  },
];

export default function Solution() {
  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(45, 212, 191, 0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-teal-500 mb-4 text-center">
          The Solution
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 tracking-tight">
          Heron uses AI to do the
          <br />
          <span className="gradient-text">heavy lifting for you</span>
        </h2>

        <p className="text-slate-500 text-center max-w-xl mx-auto mb-16 text-base">
          From discovery to RFQ, Heron compresses weeks of sourcing work into minutes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="p-8 bg-surface hover:bg-[#111827] transition-colors duration-300 group"
            >
              <span className="text-xs font-mono text-teal-500/60 mb-4 block">
                {feature.number}
              </span>
              <h3 className="text-base font-semibold text-white mb-3 group-hover:text-teal-400 transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
