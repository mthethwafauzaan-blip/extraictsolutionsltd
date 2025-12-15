import { useState } from "react";
import { Button } from "@/components/ui/button";
import QuoteForm from "./QuoteForm";
import logoUrl from "@assets/1000222760_1765401590526.png";
import heroBgUrl from "@assets/stock_images/modern_server_room_d_c6e517ea.jpg";

export default function Hero() {
  const [quoteFormOpen, setQuoteFormOpen] = useState(false);

  return (
    <>
      <header className="relative min-h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBgUrl})` }}
        />

        {/* Overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(10,35,65,0.8) 0%, rgba(15,50,90,0.7) 50%, rgba(20,70,100,0.6) 100%)",
          }}
        />

        {/* Decorative glow shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-80 h-80 bg-green-400/15 rounded-full blur-3xl top-20 left-10" />
          <div className="absolute w-96 h-96 bg-blue-400/20 rounded-full blur-3xl bottom-10 right-20" />
          <div className="absolute w-64 h-64 bg-cyan-300/10 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Foreground */}
        <div className="relative z-10 px-6 py-20 max-w-4xl mx-auto">
          {/* Logo */}
          <div className="relative inline-block mb-6">
            <div
              className="absolute inset-0 rounded-3xl scale-[1.8]"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(240,250,255,0.85) 30%, rgba(200,230,255,0.5) 50%, rgba(100,180,255,0.2) 70%, transparent 85%)",
                filter: "blur(20px)",
              }}
            />
            <img
              src={logoUrl}
              alt="EXTRA ICT SOLUTIONS LTD Logo"
              className="relative max-w-[320px] md:max-w-[420px] h-auto mx-auto"
              style={{
                filter:
                  "drop-shadow(0 4px 20px rgba(0,0,0,0.5)) drop-shadow(0 0 40px rgba(255,255,255,0.4))",
              }}
            />
          </div>

          {/* Primary value proposition */}
          <h1 className="text-3xl md:text-5xl font-semibold mb-4 leading-tight">
            Reliable ICT Solutions for Businesses, NGOs, Institutions & Schools
          </h1>

          <p className="text-lg md:text-xl text-white/85 mb-6 max-w-2xl mx-auto leading-relaxed">
            We deliver ICT infrastructure support, computer maintenance, ICT
            training and technology solutions trusted across Uganda since 2012.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/70 mb-10">
            <span>✔ 12+ Years Experience</span>
            <span>✔ Government & NGO Clients</span>
            <span>✔ Nationwide Support</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => setQuoteFormOpen(true)}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg"
              data-testid="button-request-quote"
            >
              Get a Free Consultation
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-white border-white/40"
              data-testid="button-view-services"
            >
              View Our Services
            </Button>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </header>

      <QuoteForm open={quoteFormOpen} onOpenChange={setQuoteFormOpen} />
    </>
  );
}
