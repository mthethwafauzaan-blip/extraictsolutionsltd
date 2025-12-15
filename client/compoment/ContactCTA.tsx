import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-cyan-500"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
          Ready to Transform Your ICT Infrastructure?
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Get in touch with our team for inquiries, partnerships, or quotes.
          We're committed to delivering dependable ICT solutions.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-blue-600 font-semibold shadow-lg min-w-[160px]"
              data-testid="button-contact-cta"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <a href="tel:+256755890406">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white bg-white/10 backdrop-blur-sm font-semibold min-w-[160px]"
              data-testid="button-call-cta"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
