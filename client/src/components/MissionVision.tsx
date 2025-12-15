import { Card } from "@/components/ui/card";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section 
      id="mission" 
      className="py-16 md:py-24 px-6 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)"
      }}
    >
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Mission & Vision
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-full bg-red-500/20">
                <Target className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Mission</h3>
            </div>
            <p className="text-lg leading-relaxed text-gray-300">
              Changing the state of art technology through exploring the different patterns of applied science and delivery of high-quality technological ideas and support.
            </p>
          </Card>
          
          <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-full bg-cyan-500/20">
                <Eye className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Vision</h3>
            </div>
            <p className="text-lg leading-relaxed text-gray-300">
              A world of technology empowered with full instruments of applied science to improve lives and operations in all sectors.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
