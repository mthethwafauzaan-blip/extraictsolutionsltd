import { Card } from "../components/ui/card";
import { ShieldCheck, Clock, TrendingUp, Award } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Trusted & Reliable",
    description:
      "We operate with transparency and integrity. Our clients trust us with critical ICT systems because we deliver on our commitments.",
  },
  {
    icon: Clock,
    title: "Responsive Support",
    description:
      "We understand downtime costs money. Our support is timely, dependable, and focused on keeping your systems running.",
  },
  {
    icon: TrendingUp,
    title: "Results-Driven",
    description:
      "We don't just provide services — we solve problems. Our solutions improve productivity and support growth.",
  },
  {
    icon: Award,
    title: "Experienced Since 2012",
    description:
      "Over a decade of experience supporting schools, businesses, NGOs, and institutions across Uganda.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      className="py-16 md:py-24 px-6 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Why Choose EXTRA ICT
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A reliable ICT partner focused on long-term value and professional service delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => (
            <Card
              key={reason.title}
              className="p-5 h-full"
            >
              <div className="flex flex-col h-full">
                <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                  <reason.icon className="w-5 h-5 text-primary" />
                </div>

                <h3 className="text-base font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
