import { Card } from "../components/ui/card";
import { Users, Building2, Calendar, Landmark } from "lucide-react";

export default function AboutSection() {
  const leadership = [
    { name: "Nakigozi Rachel", role: "Executive Director" },
    { name: "Ssenyonga Ezra", role: "Technical Director" },
    { name: "Bakabulindi Musa", role: "Company Manager" },
  ];

  const companyDetails = [
    { icon: Calendar, label: "Established", value: "May 30th, 2012" },
    { icon: Landmark, label: "Company Banker", value: "DFCU Bank" },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-100"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-[-5rem] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-[-6rem] w-[30rem] h-[30rem] bg-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex justify-center mb-4">
            <Building2 className="w-10 h-10 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About EXTRA ICT SOLUTIONS LTD
          </h2>
          <p className="text-lg text-muted-foreground">
            A registered Ugandan ICT company delivering reliable technology
            solutions, training, and support to organizations since 2012.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">
                EXTRA ICT SOLUTIONS LTD (EICT)
              </strong>{" "}
              is an ICT services and solutions provider specializing in computer
              maintenance, ICT training, consultancy, infrastructure support,
              and equipment supply.
            </p>

            <p>
              We support schools, businesses, NGOs, and institutions by ensuring
              their ICT systems are reliable, secure, and aligned with their
              operational needs.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {companyDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white shadow-sm"
                >
                  <detail.icon className="w-5 h-5 text-blue-600 shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {detail.label}
                    </p>
                    <p className="font-semibold text-foreground text-sm">
                      {detail.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card className="p-6 bg-white shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-5 h-5 text-blue-600" />
              <h3 className="text-xl font-semibold text-foreground">
                Leadership Team
              </h3>
            </div>

            <div className="space-y-4">
              {leadership.map((person) => (
                <div
                  key={person.name}
                  className="flex items-center gap-4 p-4 rounded-lg bg-slate-50"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 text-white flex items-center justify-center font-semibold">
                    {person.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {person.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {person.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
