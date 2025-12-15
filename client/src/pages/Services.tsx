import PremiumNavigation from "../components/PremiumNavigation";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import {
  Monitor,
  Wrench,
  Network,
  GraduationCap,
  Globe,
  Shield,
  Printer,
  Database,
  ArrowRight,
  Check,
  FileText,
  Calculator,
  Phone,
  HardDrive,
  Settings,
} from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    id: "software",
    icon: Monitor,
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs. We design and develop applications that streamline operations and improve efficiency.",
    includes: ["Custom Application Development", "Database Solutions & Design", "Information Systems Design", "Software Maintenance & Support"],
    color: "from-blue-500 to-cyan-500",
    iconBg: "bg-blue-500",
  },
  {
    id: "repairs",
    icon: Wrench,
    title: "Computer Servicing & Maintenance",
    description: "Expert hardware diagnostics and repairs for desktops, laptops, and servers. Our certified technicians handle everything from simple fixes to complex repairs.",
    includes: ["Hardware Diagnostics & Repair", "Laptop & Desktop Servicing", "Component Replacement", "Preventive Maintenance"],
    color: "from-amber-500 to-orange-500",
    iconBg: "bg-amber-500",
  },
  {
    id: "network",
    icon: Network,
    title: "Computer Networking",
    description: "Design, installation, and maintenance of robust network infrastructure. We create secure, reliable networks for businesses of all sizes.",
    includes: ["LAN/WAN Installation", "Network Security Setup", "PBX Installations", "Wiring & Cabling"],
    color: "from-emerald-500 to-teal-500",
    iconBg: "bg-emerald-500",
  },
  {
    id: "training",
    icon: GraduationCap,
    title: "ICT Training",
    description: "Comprehensive IT training programs to build technical capacity for individuals and organizations. From basics to advanced skills.",
    includes: ["Computer Basics & Office Applications", "Microsoft Office Suite", "Networking Fundamentals", "Specialized Software Training"],
    color: "from-violet-500 to-purple-500",
    iconBg: "bg-violet-500",
  },
  {
    id: "web",
    icon: Globe,
    title: "Web Designing",
    description: "Modern, responsive websites that establish your online presence. We create professional sites that engage visitors and represent your brand.",
    includes: ["Business Websites", "E-commerce Solutions", "Web Applications", "Website Maintenance"],
    color: "from-pink-500 to-rose-500",
    iconBg: "bg-pink-500",
  },
  {
    id: "accounting",
    icon: Calculator,
    title: "Accounting Software",
    description: "Implementation and training for leading accounting software packages. We help businesses computerize their financial management.",
    includes: ["QuickBooks Setup & Training", "Tally Implementation", "Pastel Accounting", "Sage Software Solutions"],
    color: "from-cyan-500 to-blue-500",
    iconBg: "bg-cyan-500",
  },
  {
    id: "printing",
    icon: Printer,
    title: "Printing Services",
    description: "Professional printing solutions for all your business and personal needs. From documents to large format prints.",
    includes: ["Large Format Printing", "Document Printing & Binding", "Business Cards & Brochures", "Printer Cartridges & Toner"],
    color: "from-teal-500 to-emerald-500",
    iconBg: "bg-teal-500",
  },
  {
    id: "scanning",
    icon: FileText,
    title: "Document Scanning",
    description: "Convert your physical documents to digital format. We provide high-quality scanning services for archiving and easy retrieval.",
    includes: ["Hard Copy to Soft Copy Conversion", "Document Digitization", "Archive Management", "OCR Processing"],
    color: "from-indigo-500 to-violet-500",
    iconBg: "bg-indigo-500",
  },
  {
    id: "supplies",
    icon: HardDrive,
    title: "Computer & Printer Supplies",
    description: "Quality hardware and consumables at competitive prices. We supply genuine products from trusted manufacturers.",
    includes: ["Computers & Laptops", "Printers & Photocopiers", "Spare Parts & Components", "Consumables & Accessories"],
    color: "from-slate-600 to-slate-700",
    iconBg: "bg-slate-600",
  },
  {
    id: "security",
    icon: Shield,
    title: "Security Systems",
    description: "Protect your premises with comprehensive security solutions. Professional installation and ongoing support.",
    includes: ["CCTV Installation", "Access Control Systems", "Alarm Systems", "Remote Monitoring"],
    color: "from-red-500 to-rose-500",
    iconBg: "bg-red-500",
  },
  {
    id: "data",
    icon: Database,
    title: "Data Recovery",
    description: "Recover lost or corrupted data from damaged storage devices. Our specialists use advanced techniques to retrieve your valuable information.",
    includes: ["Hard Drive Recovery", "Flash Drive Recovery", "RAID Recovery", "Deleted File Recovery"],
    color: "from-orange-500 to-amber-500",
    iconBg: "bg-orange-500",
  },
  {
    id: "consultancy",
    icon: Settings,
    title: "ICT Consultancy",
    description: "Expert advice on technology strategy, infrastructure planning, and IT project management for organizations.",
    includes: ["IT Strategy Development", "Infrastructure Planning", "Project Management", "Technology Assessment"],
    color: "from-purple-500 to-indigo-500",
    iconBg: "bg-purple-500",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <PremiumNavigation />
      
      {/* Hero - Vibrant gradient */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-yellow-300/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">Comprehensive ICT Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Services That Drive Your Business Forward
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              From software development to hardware repairs, we offer a complete range of 
              ICT services designed to meet your unique business needs.
            </p>
          </div>
          
          {/* Quick stats */}
          <div className="mt-12 flex flex-wrap gap-8">
            <div>
              <p className="text-4xl font-bold">12+</p>
              <p className="text-white/80 text-sm">Services Offered</p>
            </div>
            <div>
              <p className="text-4xl font-bold">100+</p>
              <p className="text-white/80 text-sm">Clients Served</p>
            </div>
            <div>
              <p className="text-4xl font-bold">24/7</p>
              <p className="text-white/80 text-sm">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Colorful cards */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-emerald-600 font-semibold mb-3">WHAT WE OFFER</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Our Services
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Putting our client relationships as our priority, we meet expectations and 
              exercise a proactive approach to service delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Colorful header */}
                <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                
                <div className="p-6">
                  <div className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center mb-4`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-5">
                    {service.includes.slice(0, 3).map((item) => (
                      <span key={item} className="flex items-center gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        {item}
                      </span>
                    ))}
                  </div>
                  
                  <Link href="/contact">
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-emerald-50 group-hover:border-emerald-200 group-hover:text-emerald-700 transition-colors">
                      Get a Quote <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Vibrant */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-slate-300 mb-10">
            Contact us today for a free consultation. Let us help you find the right 
            technology solution for your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8">
                Contact Us <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a href="tel:+256755890406">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold">
                <Phone className="w-5 h-5 mr-2" /> Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
