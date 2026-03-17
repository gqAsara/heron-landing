import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Pain from "@/components/Pain";
import Solution from "@/components/Solution";
import SocialProof from "@/components/SocialProof";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg overflow-x-hidden">
      <Navbar />
      <Hero />
      <Pain />
      <Solution />
      <SocialProof />
      <CTASection />
      <Footer />
    </main>
  );
}
