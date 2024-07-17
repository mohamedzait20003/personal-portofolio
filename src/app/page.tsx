// Components
import Navbar from "@/components/Navbar";
import AchievementsSection from "@/components/AchievementsSection";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#003434]">
      <Navbar />
      <div className="container mx-auto px-12 py-4">
        <HeroSection />
      </div> 
      <div className="container mx-auto px-12 mt-32 mb-0">
        <AchievementsSection />
      </div>
      <AboutSection />
      <div className="h-full px-12 py-4 bg-[#191919]">
        <ProjectsSection />
      </div> 
      <ContactSection />
      <Footer />
    </main>
  );
}
