import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 md:py-28 bg-gradient-to-b from-blue-50 via-white to-slate-100"
    >
      {/* Static background shapes */}
      <div className="absolute top-[-5rem] left-[-6rem] w-[22rem] h-[22rem] bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-[-5rem] right-[-6rem] w-[26rem] h-[26rem] bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-3">
            Let’s Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our team for inquiries, partnerships, or quotes.
            We’re committed to delivering dependable ICT solutions that help
            your business thrive.
          </p>
          <div className="h-[2px] w-24 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            {[
              {
                icon: Phone,
                title: "Call Us",
                text: "+256755890406 | +256776322266 | +256701397040",
              },
              {
                icon: Mail,
                title: "Email",
                text: "extraictsolutionsltd@ymail.com",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                text: "Kansanga Ggaba Rd, UKMall Level 3, Kampala, Uganda",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-5 bg-white/80 backdrop-blur-md rounded-xl shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-md">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2 p-8 rounded-2xl bg-white/70 backdrop-blur-md shadow-lg">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="grid gap-6 md:grid-cols-2"
            >
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full p-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full p-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Tell us how we can help you..."
                  className="w-full p-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2 flex justify-end">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-md"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Updated Map */}
        <div className="mt-20 rounded-2xl overflow-hidden shadow-xl ring-1 ring-blue-100">
          <iframe
            title="Extra ICT Solutions Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7485787885633!2d32.603013!3d0.292233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb53c27548b3%3A0x4a476c983ad2e29b!2sEXTRA%20ICT%20SOLUTIONS%20LTD!5e0!3m2!1sen!2sug!4v1733672300000!5m2!1sen!2sug"
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
            className="border-0 w-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
