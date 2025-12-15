import PremiumNavigation from "../components/PremiumNavigation";
import Footer from "../components/Footer";
import { MapPin, Calendar, Users, CheckCircle, Target, Eye, Award, Building, Briefcase, Globe } from "lucide-react";

const leadership = [
  { 
    name: "Nakigozi Rachel", 
    role: "Executive Director", 
    initials: "NR",
    bio: "Provides strategic direction and oversees all company operations with a focus on sustainable growth and client relationships."
  },
  { 
    name: "Ssenyonga Ezra", 
    role: "Technical Director", 
    initials: "SE",
    bio: "Leads our technical team with extensive expertise in software development, networking, and IT infrastructure."
  },
  { 
    name: "Bakabulindi Musa", 
    role: "Company Manager", 
    initials: "BM",
    contact: "+256 701 397 040",
    bio: "Manages day-to-day operations and client relationships to ensure customer satisfaction."
  },
];

const clients = [
  "Ministry of Trade and Co-operatives",
  "Atomic Energy Council",
  "Makerere University Business School",
  "Mityana Local Government Council",
  "MTAC",
  "NARO",
  "Mulago Hospital",
  "Law Development Centre",
  "National Water and Sewerage Corporation",
  "Space and Places",
  "MK Electrowatt Limited",
];

const principles = [
  { title: "Professionalism", description: "Our key personnel are skilled, competent and perform to the expectations of our clients with both academic and professional qualifications." },
  { title: "Integrity", description: "We always confirm to facts and habitual truthfulness in our work. Honesty and openness are important factors in everything we do." },
  { title: "Efficiency", description: "We are conscious with our work and prove this with the competence used by our IT experts when delivering services." },
  { title: "Consistency", description: "We value reliability, steadiness, stability and uniformity when delivering services. Clients are our first priority." },
  { title: "Client Satisfaction", description: "We focus on fulfilling our obligations by pleasing our clients as a way of approving our work." },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <PremiumNavigation />
      
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-emerald-400 font-semibold mb-4 tracking-wide">ABOUT EXTRA ICT SOLUTIONS LTD</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Trusted ICT Partner Since 2012
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              A fully registered limited company dealing in computer servicing, maintenance, 
              trainings, consultancy, and supplies — serving government, education, and 
              private sector clients across Uganda.
            </p>
          </div>
          
          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-emerald-400">12+</p>
              <p className="text-slate-400 text-sm mt-1">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-emerald-400">100+</p>
              <p className="text-slate-400 text-sm mt-1">Clients Served</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-emerald-400">15+</p>
              <p className="text-slate-400 text-sm mt-1">Team Members</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-emerald-400">50+</p>
              <p className="text-slate-400 text-sm mt-1">Projects Done</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-emerald-600 font-semibold mb-3">COMPANY OVERVIEW</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                A Well-Structured Company Built for Excellence
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  <strong className="text-slate-900">EXTRA ICT SOLUTIONS LTD (EICT)</strong> was 
                  registered and set up as a wholly privately-owned limited company on May 30th, 2012. 
                  We are a well-structured organization with a series of departments that work hand 
                  in hand to ensure smooth running and delivery of services to different clients.
                </p>
                <p>
                  Our operations mainly depend on our technical team — the core block of the company. 
                  We focus on the delivery of high quality services to our customers with the aim of 
                  satisfying their needs. Since commencing operations in January 2012, the company 
                  has never lagged behind in its service delivery.
                </p>
                <p>
                  We serve a multi-dynamic enterprise dealing in different commercial activities 
                  ranging from technological solutions to general trading. Our main business focuses 
                  on IT specifics including computer software, maintenance and servicing, ICT training, 
                  and computer consumables and spare parts.
                </p>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="font-bold text-slate-900 text-lg mb-6">Company Details</h3>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Date of Establishment</p>
                    <p className="text-slate-600 text-sm">May 30th, 2012</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Headquarters</p>
                    <p className="text-slate-600 text-sm">
                      Kansanga Ggaba Road, UKMall Level 3<br />
                      P.O. Box 268111, Kampala (U)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Sectors Served</p>
                    <p className="text-slate-600 text-sm">
                      Education, Government, Healthcare, Finance, NGOs
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Service Area</p>
                    <p className="text-slate-600 text-sm">
                      Kampala and across Uganda
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                A world of technology with full instruments of applied science that can help 
                to carry on any other business — industrial, agricultural, trading, and 
                manufacturing — conveniently and efficiently.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                Changing the state of art technology through exploring the different patterns 
                of applied science and delivery of high quality technological ideas and support 
                to organizations and individuals across Uganda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-emerald-600 font-semibold mb-3">OUR VALUES</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Guiding Principles
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              These core values shape how we work and serve our clients every day.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle) => (
              <div key={principle.title} className="p-6 rounded-xl border border-slate-200 hover:border-emerald-200 hover:bg-emerald-50/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{principle.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-emerald-400 font-semibold mb-3">LEADERSHIP</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Board of Directors
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Our leadership team brings together expertise in technology, business management, 
              and corporate governance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((person) => (
              <div key={person.name} className="text-center">
                <div className="w-24 h-24 mx-auto mb-5 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white text-2xl font-bold">
                  {person.initials}
                </div>
                <h3 className="font-bold text-white text-lg">{person.name}</h3>
                <p className="text-emerald-400 font-medium text-sm">{person.role}</p>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Served */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-emerald-600 font-semibold mb-3">OUR CLIENTS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Trusted by Leading Organizations
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              We are proud to have served government ministries, educational institutions, 
              and private sector organizations across Uganda.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {clients.map((client) => (
              <span 
                key={client}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-emerald-600 font-semibold mb-3">STRUCTURE</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Organizational Structure
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              As a limited liability company, our internal ultimate authority is the Board of Directors, 
              with the Technical Director responsible for daily management.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {["Technical Department", "Management & Admin", "Human Resources", "Accounts & Finance"].map((dept) => (
              <div key={dept} className="bg-white p-5 rounded-xl border border-slate-200 text-center">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center mx-auto mb-3">
                  <Users className="w-5 h-5 text-emerald-600" />
                </div>
                <p className="font-semibold text-slate-900 text-sm">{dept}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
