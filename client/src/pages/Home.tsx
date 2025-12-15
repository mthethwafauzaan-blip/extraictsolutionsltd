import PremiumNavigation from "../components/PremiumNavigation";
import HeroCarousel from "../components/HeroCarousel";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ClientsSection from "../components/ClientsSection";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <PremiumNavigation />
      <HeroCarousel />
      <AboutSection />
      <ServicesSection />
      <ClientsSection />
      <WhyChooseUs />
      <ContactCTA />
      <Footer />
    </div>
  );
}
