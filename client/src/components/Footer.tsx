import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ChevronUp,
} from "lucide-react";
import logoUrl from "../../assets/1000222760_1765401590526.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    "Software Development",
    "Network Installation",
    "Computer Repairs",
    "IT Training",
    "Web Development",
    "Security Systems",
  ];

  const quickLinks = [
    { label: "About EXTRA ICT", href: "#about" },
    { label: "Our Services", href: "#services" },
    { label: "Our Team", href: "#about" },
    { label: "Our Clients", href: "#clients" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <footer className="relative bg-[#0a0d11] text-slate-200 pt-14 overflow-hidden">
      {/* Watermark logo */}
      <div 
        className="absolute inset-0 pointer-events-none flex items-center justify-center"
        style={{ opacity: 0.08 }}
      >
        <img 
          src={logoUrl} 
          alt="" 
          className="w-[600px] max-w-full"
          aria-hidden="true"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Contact Info */}
        <div>
          <h4 className="text-base font-semibold text-[#1FA44E] mb-5 uppercase tracking-wide">
            Contact Information
          </h4>
          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#0073C0] shrink-0 mt-1" />
              <div>
                <p>P.O. Box 268111, Kampala, Uganda</p>
                <p>Kansanga Ggaba Rd, UKMall Level 3</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-[#0073C0] shrink-0 mt-1" />
              <div>
                <p>+256 755 890 406</p>
                <p>+256 776 322 266</p>
                <p>+256 701 397 040</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-[#0073C0] shrink-0 mt-1" />
              <p>extraictsolutionsltd@ymail.com</p>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#0073C0] shrink-0 mt-1" />
              <p>Mon – Sat: 8:00am – 6:00pm</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-base font-semibold text-[#1FA44E] mb-5 uppercase tracking-wide">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-slate-400 hover:text-[#0073C0] transition-colors duration-200"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-base font-semibold text-[#1FA44E] mb-5 uppercase tracking-wide">
            Our Services
          </h4>
          <ul className="space-y-2 text-sm">
            {services.map((service) => (
              <li key={service}>
                <button
                  onClick={() => handleNavClick("#services")}
                  className="text-slate-400 hover:text-[#0073C0] transition-colors duration-200"
                >
                  {service}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* About */}
        <div>
          <h4 className="text-base font-semibold text-[#1FA44E] mb-5 uppercase tracking-wide">
            EXTRA ICT Solutions Ltd
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            Changing the state of art technology through applied science and
            delivery of high-quality ideas and support. Delivering dependable
            ICT solutions across Uganda.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gradient-to-r from-[#0073C0] via-[#1FA44E] to-[#0073C0] py-4 px-6 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-[13px] text-white">
          <p className="text-center md:text-left">
            © {currentYear} EXTRA ICT SOLUTIONS LTD. All rights reserved. |
            <span className="opacity-90 ml-1">
              Proudly empowering technology across Uganda
            </span>
          </p>
          <div className="flex items-center gap-3">
            {[
              { Icon: Facebook, href: "#" },
              { Icon: Twitter, href: "#" },
              { Icon: Linkedin, href: "#" },
              { Icon: Instagram, href: "#" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#0073C0] hover:to-[#1FA44E] hover:scale-110 transition-all duration-300 shadow-sm"
              >
                <Icon className="w-3.5 h-3.5 text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-7 right-5 z-50 bg-gradient-to-r from-[#0073C0] to-[#1FA44E] text-white p-2.5 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="Back to top"
      >
        <ChevronUp className="w-4 h-4" />
      </button>
    </footer>
  );
}
