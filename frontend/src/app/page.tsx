import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { BusinessCategories } from "@/components/sections/BusinessCategories";
import { StatsAndVideo } from "@/components/sections/StatsAndVideo";
import { CTABanner } from "@/components/sections/CTABanner";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { TemplatePreviews } from "@/components/sections/TemplatePreviews";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { TrustedCompanies } from "@/components/sections/TrustedCompanies";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-primary/30">
      <Navbar />
      <HeroSection />
      <BusinessCategories />
      <StatsAndVideo />
      <CTABanner />
      <FeaturesSection />
      <TemplatePreviews />
      <WorkflowSection />
      <TrustedCompanies />
      <Testimonials />
      <Footer />
    </main>
  );
}
