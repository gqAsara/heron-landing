import Image from "next/image";

const WAITLIST_URL = "https://forms.gle/5V79kktNtTPCFmzk8";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12"
      style={{ background: "rgba(6, 9, 15, 0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(28, 35, 51, 0.8)" }}>
      <div className="flex items-center gap-2.5">
        <Image
          src="/logo.png"
          alt="Heron logo"
          width={36}
          height={36}
          className="object-contain invert brightness-0 invert"
          style={{ filter: "invert(1) brightness(2)" }}
        />
        <span className="text-white font-semibold text-lg tracking-tight">Heron</span>
      </div>

      <a
        href={WAITLIST_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium px-4 py-2 rounded-lg text-teal-400 border border-teal-400/30 hover:bg-teal-400/10 transition-all duration-200"
      >
        Join Early Access
      </a>
    </nav>
  );
}
