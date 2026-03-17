const painPoints = [
  {
    icon: "📋",
    title: "Endless supplier listings",
    description: "Hundreds of unvetted directories with no signal on who's actually reliable.",
  },
  {
    icon: "🏭",
    title: "Hard to verify factories",
    description: "No easy way to confirm if a supplier is legitimate before committing.",
  },
  {
    icon: "📄",
    title: "Fake certifications",
    description: "Fraudulent ISO and compliance documents are rampant and nearly impossible to spot.",
  },
  {
    icon: "⚖️",
    title: "Price vs. quality confusion",
    description: "The cheapest quote rarely reflects the true cost of poor quality or delays.",
  },
];

export default function Pain() {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4 text-center">
          The Problem
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 tracking-tight">
          Sourcing today is{" "}
          <span className="text-slate-400">exhausting</span>
        </h2>

        <p className="text-slate-500 text-center max-w-xl mx-auto mb-16 text-base">
          Finding the right manufacturer shouldn&apos;t feel like searching for a needle in a haystack — but it does.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="group p-6 rounded-2xl bg-surface border border-border hover:border-teal-400/20 transition-all duration-300"
            >
              <span className="text-2xl mb-4 block">{point.icon}</span>
              <h3 className="text-base font-semibold text-white mb-2">
                {point.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
