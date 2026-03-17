import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Heron — Find Reliable Suppliers in Minutes with AI",
  description:
    "Stop scrolling through hundreds of supplier listings. Heron analyzes your requirements and recommends the best suppliers.",
  openGraph: {
    title: "Heron — Find Reliable Suppliers in Minutes with AI",
    description:
      "Stop scrolling through hundreds of supplier listings. Heron analyzes your requirements and recommends the best suppliers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
