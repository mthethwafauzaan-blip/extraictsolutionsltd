import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Layers } from "lucide-react";
import { Button } from "../components/ui/button";
import CountUp from "./CountUp";

// Images (reuse your best, non-people visuals)
import ictImg from "../../assets/Screenshot_2025-12-07_034608_1765069585485.png";
import networkImg from "../../assets/network_cables_serve_2bb8cfcf.jpg";
import softwareImg from "../../assets/software_code_on_com_e46f9b4f.jpg";
import trainingImg from "../../assets/it_training_classroo_5cbf3600.jpg";
import securityImg from "../../assets/security_camera_cctv_78ae1af4.jpg";
import hardwareImg from "../../assets/laptop_computer_repa_7a047098.jpg";

const services = [
  {
    image: ictImg,
    title: "End-to-End ICT Solutions",
    description:
      "Comprehensive ICT services covering infrastructure, support, training, and technology deployment for organizations.",
  },
  {
    image: networkImg,
    title: "Network & Infrastructure Deployment",
    description:
      "Design, installation, and maintenance of secure network cabling, servers, and enterprise infrastructure.",
  },
  {
    image: softwareImg,
    title: "Software & Digital Solutions",
    description:
      "Custom software development, systems integration, and digital tools tailored to operational needs.",
  },
  {
    image: hardwareImg,
    title: "Computer Systems & Maintenance",
    description:
      "Professional servicing, repair, and supply of computers, laptops, printers, and ICT equipment.",
  },
  {
    image: trainingImg,
    title: "ICT Training & Consultancy",
    description:
      "Capacity building through practical ICT training, advisory services, and technology adoption support.",
  },
  {
    image: securityImg,
    title: "Security & Surveillance Systems",
    description:
      "Installation and support of CCTV, access control, and technology-driven security solutions.",
  },
];

export default function ServicesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    const autoplay = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => {
      clearInterval(autoplay);
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      id="services"
      className="relative py-24 md:py-32 bg-gradient-to-b from-blue-50 via-white to-slate-100 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 left-[-8rem] w-[28rem] h-[28rem] bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-[-10rem] w-[32rem] h-[32rem] bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Layers className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Our ICT Solutions
            </h2>
          </div>
          <p className="text-muted-foreground text-lg">
            We provide integrated ICT solutions designed to improve operational
            efficiency, system reliability, and long-term digital growth.
          </p>
          <div className="h-[2px] w-24 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="flex-none w-full sm:w-1/2 lg:w-1/3"
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg bg-white">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 p-5 text-white">
                      <h3 className="text-lg font-semibold mb-1">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-200">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <Button
            size="icon"
            variant="outline"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 shadow border-blue-500 text-blue-600"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            size="icon"
            variant="outline"
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 shadow border-blue-500 text-blue-600"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: 12, suffix: "+", label: "Years of Experience" },
            { number: 50, suffix: "+", label: "Organizations Served" },
            { number: 100, suffix: "+", label: "Projects Delivered" },
            { number: 10, suffix: "+", label: "ICT Specialists" },
          ].map((stat) => (
            <div key={stat.label} className="p-6 rounded-xl bg-white shadow-md">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                <CountUp end={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
