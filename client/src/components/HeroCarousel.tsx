import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { ChevronLeft, ChevronRight, Monitor, Wrench, GraduationCap, Phone } from "lucide-react";
import QuoteForm from "./QuoteForm";
import logoUrl from "../../assets/1000222760_1765401590526.png";
import heroBg1 from "../../assets/modern_server_room_d_c6e517ea.jpg";
import heroBg2 from "../../assets/vibrant_colorful_tec_e4a23e39.jpg";
import heroBg3 from "../../assets/futuristic_technolog_e1f00ac5.jpg";

interface Slide {
  id: number;
  background: string;
  badge?: { text: string; color: string };
  headline: string[];
  subheadline: string;
  description: string;
  cta: { text: string; action: string };
  showLogo?: boolean;
  features?: { icon: typeof Monitor; text: string }[];
}

const slides: Slide[] = [
  {
    id: 1,
    background: heroBg1,
    headline: ["YOUR ICT", "PARTNER"],
    subheadline: "Since 2012",
    description: "Empowering businesses and institutions with reliable technology, training, and innovation across Uganda.",
    cta: { text: "Get Started", action: "quote" },
    showLogo: true,
    badge: { text: "Trusted Partner", color: "green" },
  },
  {
    id: 2,
    background: heroBg2,
    headline: ["PROFESSIONAL", "SERVICES"],
    subheadline: "Expert Solutions",
    description: "From computer repairs to network installation, software development to IT training - we deliver excellence.",
    cta: { text: "Our Services", action: "services" },
    features: [
      { icon: Monitor, text: "Software Development" },
      { icon: Wrench, text: "Computer Repairs" },
      { icon: GraduationCap, text: "IT Training" },
    ],
    badge: { text: "Quality Assured", color: "blue" },
  },
  {
    id: 3,
    background: heroBg3,
    headline: ["LET'S BUILD", "TOGETHER"],
    subheadline: "Contact Us Today",
    description: "Ready to transform your technology infrastructure? Get a free consultation with our expert team.",
    cta: { text: "Contact Us", action: "contact" },
    showLogo: true,
    badge: { text: "Free Consultation", color: "green" },
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [quoteFormOpen, setQuoteFormOpen] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleCTA = (action: string) => {
    if (action === "quote") {
      setQuoteFormOpen(true);
    } else if (action === "services") {
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    } else if (action === "contact") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="relative min-h-[85vh] md:min-h-[90vh] overflow-hidden">
        {/* Slides Container - Everything slides together */}
        <div 
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ 
            width: `${slides.length * 100}%`,
            transform: `translateX(-${currentSlide * (100 / slides.length)}%)`
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative min-h-[85vh] md:min-h-[90vh] flex items-center"
              style={{ width: `${100 / slides.length}%` }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.background})` }}
              />
              
              {/* Gradient Overlay */}
              <div 
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, rgba(0,50,80,0.88) 0%, rgba(10,60,100,0.8) 40%, rgba(20,80,120,0.7) 100%)"
                }}
              />

              {/* Decorative Elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -left-20 top-1/4 w-96 h-[500px] bg-gradient-to-br from-[#1FA44E]/30 to-transparent rounded-full blur-3xl" />
                <div className="absolute -right-20 bottom-1/4 w-80 h-[400px] bg-gradient-to-tl from-[#0073C0]/40 to-transparent rounded-full blur-3xl" />
                <div 
                  className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#1FA44E]/10 to-transparent"
                  style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
                />
              </div>

              {/* Content */}
              <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 py-16">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  
                  {/* Left Content */}
                  <div className="text-white space-y-6">
                    {/* Badge */}
                    {slide.badge && (
                      <div 
                        className={`inline-block px-4 py-2 rounded-md text-sm font-semibold uppercase tracking-wide ${
                          slide.badge.color === "green" 
                            ? "bg-[#1FA44E] text-white" 
                            : "bg-[#0073C0] text-white"
                        }`}
                      >
                        {slide.badge.text}
                      </div>
                    )}

                    {/* Headline */}
                    <div className="space-y-1">
                      {slide.headline.map((line, i) => (
                        <h1 
                          key={i}
                          className={`text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight ${
                            i === 0 ? "text-white" : "text-[#1FA44E]"
                          }`}
                          style={{ textShadow: "2px 4px 20px rgba(0,0,0,0.3)" }}
                        >
                          {line}
                        </h1>
                      ))}
                    </div>

                    {/* Subheadline */}
                    <p className="text-xl md:text-2xl text-cyan-200 font-light">
                      {slide.subheadline}
                    </p>

                    {/* Accent Line */}
                    <div className="flex items-center gap-3">
                      <div className="h-1 w-16 bg-gradient-to-r from-[#1FA44E] to-[#0073C0] rounded-full" />
                      <div className="h-1 w-8 bg-white/30 rounded-full" />
                    </div>

                    {/* Description */}
                    <p className="text-lg text-white/80 max-w-lg leading-relaxed">
                      {slide.description}
                    </p>

                    {/* Features (if any) */}
                    {slide.features && (
                      <div className="flex flex-wrap gap-4 pt-2">
                        {slide.features.map((feature, i) => (
                          <div 
                            key={i}
                            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20"
                          >
                            <feature.icon className="w-5 h-5 text-[#1FA44E]" />
                            <span className="text-sm text-white font-medium">{feature.text}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* CTA Button */}
                    <div className="pt-4">
                      <Button
                        size="lg"
                        onClick={() => handleCTA(slide.cta.action)}
                        className="bg-gradient-to-r from-[#1FA44E] to-[#0073C0] text-white font-bold text-lg px-8 py-6 shadow-xl"
                        data-testid={`button-hero-cta-${index}`}
                      >
                        {slide.cta.text}
                        <Phone className="w-5 h-5 ml-2" />
                      </Button>
                    </div>
                  </div>

                  {/* Right Content - Logo */}
                  <div className="hidden md:flex items-center justify-center">
                    <div className="relative">
                      {/* Glow behind logo */}
                      <div 
                        className="absolute inset-0 scale-[2]"
                        style={{
                          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.95) 0%, rgba(240,250,255,0.7) 25%, rgba(200,230,255,0.4) 45%, rgba(100,180,255,0.15) 65%, transparent 80%)",
                          filter: "blur(30px)"
                        }}
                      />
                      <img
                        src={logoUrl}
                        alt="EXTRA ICT SOLUTIONS LTD"
                        className="relative w-[350px] lg:w-[450px] h-auto drop-shadow-2xl"
                        style={{
                          filter: "drop-shadow(0 10px 40px rgba(0,0,0,0.4)) contrast(1.1) saturate(1.15)"
                        }}
                      />
                      {/* Tagline under logo */}
                      <p className="text-center text-white/90 text-xl mt-6 font-light tracking-wide">
                        ...the world in your hands
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows - Fixed position outside slides */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20"
          aria-label="Previous slide"
          data-testid="button-prev-slide"
        >
          <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20"
          aria-label="Next slide"
          data-testid="button-next-slide"
        >
          <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "w-10 bg-gradient-to-r from-[#1FA44E] to-[#0073C0]" 
                  : "w-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              data-testid={`button-slide-${index}`}
            />
          ))}
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
      </header>

      <QuoteForm open={quoteFormOpen} onOpenChange={setQuoteFormOpen} />
    </>
  );
}
