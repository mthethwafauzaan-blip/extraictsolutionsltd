import whatsappIcon from "../../assets/whatsapp_1765405217660.png";

export default function WhatsAppButton() {
  const phoneNumber = "256755890406";
  const message = "Hello, I would like to inquire about your ICT services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 z-50"
      aria-label="Chat on WhatsApp"
      data-testid="button-whatsapp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-14 h-14 drop-shadow-lg" />
    </a>
  );
}
