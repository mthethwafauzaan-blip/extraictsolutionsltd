import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "./ui/button";
import { Phone, Mail, Menu, X } from "lucide-react";
import logoUrl from "../../assets/1000222760_1765401590526.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function PremiumNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <nav
      className={`sticky top-0 z-50 bg-white border-b border-slate-200 transition-shadow ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <img
              src={logoUrl}
              alt="EXTRA ICT Solutions"
              className="h-10 md:h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                data-testid={`link-nav-${link.name.toLowerCase()}`}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-emerald-600"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <Button
              size="sm"
              onClick={() => window.location.href = "/contact"}
              data-testid="button-nav-quote"
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600"
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`link-mobile-nav-${link.name.toLowerCase()}`}
                className={`block px-3 py-2 rounded text-sm font-medium ${
                  isActive(link.href)
                    ? "bg-emerald-50 text-emerald-600"
                    : "text-slate-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button
              className="w-full mt-2"
              size="sm"
              onClick={() => {
                setMobileMenuOpen(false);
                window.location.href = "/contact";
              }}
              data-testid="button-mobile-nav-quote"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
