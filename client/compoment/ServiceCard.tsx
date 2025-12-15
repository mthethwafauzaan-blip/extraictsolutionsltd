import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export default function ServiceCard({ title, description, imageUrl, imageAlt }: ServiceCardProps) {
  return (
    <Card className="overflow-visible group">
      <div className="aspect-video overflow-hidden rounded-t-md">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </Card>
  );
}
