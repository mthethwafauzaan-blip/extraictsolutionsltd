import { Building, CheckCircle } from "lucide-react";

const clients = [
  "Ministry of Trade and Co-operatives",
  "Atomic Energy Council",
  "Makerere University Business School (MUBS)",
  "Mityana Local Government Council",
  "MTAC",
  "NARO",
  "Mulago",
  "Law Development Centre (LDC)",
  "National Water and Sewerage Corporation (NWSC)",
  "Space and Places",
  "Ssona Money Market Bureau",
  "MK Electrowatt Limited",
];

export default function ClientsSection() {
  return (
    <section id="clients" className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <Building className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Clients Served</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are proud to have served both government institutions and private sector organizations across Uganda.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {clients.map((client) => (
            <div 
              key={client} 
              className="flex items-center gap-3 p-4 rounded-md bg-muted/50 hover-elevate"
            >
              <CheckCircle className="w-5 h-5 text-accent shrink-0" />
              <span className="text-foreground font-medium">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
