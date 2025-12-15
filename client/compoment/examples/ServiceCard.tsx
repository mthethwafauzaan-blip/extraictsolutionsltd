import ServiceCard from "../ServiceCard";

export default function ServiceCardExample() {
  return (
    <div className="max-w-sm">
      <ServiceCard
        title="Computer & Laptop Supplies"
        description="High-quality computer, printer, and laptop equipment with reliable after-sales support."
        imageUrl="https://images.unsplash.com/photo-1581090468075-7e0cdfbb6792?auto=format&fit=crop&w=800&q=80"
        imageAlt="Computer maintenance"
      />
    </div>
  );
}
