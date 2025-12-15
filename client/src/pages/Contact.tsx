import { useState } from "react";
import PremiumNavigation from "../components/PremiumNavigation";
import Footer from "../components/Footer";

import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

import { useToast } from "../hooks/use-toast";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white">
      <PremiumNavigation />

      {/* HERO */}
      <section className="pt-20 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Get in touch
          </h1>
          <p className="text-slate-500 text-lg max-w-xl">
            Have a question or a project in mind? We’d love to hear from you.
          </p>
        </div>
      </section>

      {/* MAIN */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-5 gap-12">
          
          {/* LEFT INFO */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex gap-4">
              <Phone className="text-emerald-600" />
              <div>
                <p className="font-medium">Call us</p>
                <p className="text-sm text-slate-500">+256 755 890 406</p>
                <p className="text-sm text-slate-500">+256 776 322 266</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="text-sky-600" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-slate-500">
                  extraictsolutionsltd@ymail.com
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="text-amber-600" />
              <div>
                <p className="font-medium">Office</p>
                <p className="text-sm text-slate-500">
                  Kansanga Ggaba Road<br />
                  UKMall, Level 3<br />
                  Kampala, Uganda
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="text-violet-600" />
              <div>
                <p className="font-medium">Working hours</p>
                <p className="text-sm text-slate-500">
                  Monday – Saturday<br />
                  8:00 AM – 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-3">
            <div className="bg-slate-50 rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-6">
                Send us a message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Input
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Input
                  name="phone"
                  placeholder="Phone number (optional)"
                  value={formData.phone}
                  onChange={handleChange}
                />

                <Textarea
                  name="message"
                  placeholder="How can we help?"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  {isSubmitting ? "Sending..." : (
                    <>
                      Send message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <iframe
            title="EXTRA ICT Solutions Location"
            className="w-full h-80 rounded-2xl border"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Kansanga%20Ggaba%20Road%20Kampala&output=embed"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
