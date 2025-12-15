import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoUrl from "@assets/1000222760_1765401590526.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Clients", href: "#clients" },
  { label: "Why Us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => handleNavClick("#")}
            className="flex items-center gap-3"
            data-testid="link-home"
          >
            {/* Circular logo icon */}
            <div 
              className="w-11 h-11 rounded-full flex items-center justify-center overflow-hidden shadow-md transition-all duration-300"
              style={{
                background: isScrolled 
                  ? "linear-gradient(135deg, #1a4a7a 0%, #0d2f4f 100%)" 
                  : "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(220,240,255,0.9) 100%)",
                border: isScrolled ? "2px solid rgba(100,180,255,0.3)" : "2px solid rgba(255,255,255,0.5)"
              }}
            >
              <img 
                src={logoUrl} 
                alt="EXTRA ICT Solutions" 
                className="w-9 h-9 object-contain"
              />
            </div>
            <span 
              className={`font-bold text-sm hidden sm:block transition-colors duration-300 ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              EXTRA ICT
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                size="sm"
                onClick={() => handleNavClick(link.href)}
                className={isScrolled ? "" : "text-white hover:bg-white/10"}
                data-testid={`link-nav-${link.label.toLowerCase().replace(" ", "-")}`}
              >
                {link.label}
              </Button>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${isScrolled ? "" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className={`md:hidden mt-2 pb-2 space-y-1 ${isScrolled ? "" : "bg-background/95 backdrop-blur-sm rounded-lg p-2 mt-3"}`}>
            {navLinks.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                className="w-full justify-start"
                onClick={() => handleNavClick(link.href)}
                data-testid={`link-mobile-nav-${link.label.toLowerCase().replace(" ", "-")}`}
              >
                {link.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
