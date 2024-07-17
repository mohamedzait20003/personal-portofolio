// Components
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#003434]">
      <Navbar />
      <div className="container mx-auto px-12 py-4">
        <HeroSection />
      </div> 
      <AboutSection />
      <div className="h-full px-12 py-4 bg-[#191919]">
        <ProjectsSection />
      </div> 
    </main>
  );
}
