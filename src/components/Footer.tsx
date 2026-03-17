import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6 md:px-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="Heron logo"
            width={24}
            height={24}
            className="object-contain"
            style={{ filter: "invert(1) brightness(2)" }}
          />
          <span className="text-sm font-semibold text-white">Heron</span>
        </div>

        <p className="text-xs text-slate-600">
          © {new Date().getFullYear()} Heron. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
