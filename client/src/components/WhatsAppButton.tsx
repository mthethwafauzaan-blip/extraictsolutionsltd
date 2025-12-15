// client/src/components/WhatsAppButton.tsx

const PHONE_NUMBER = "256755890406"; // Your WhatsApp number
const DEFAULT_MESSAGE =
  "Hello EXTRA ICT SOLUTIONS LTD, I would like to know more about your services.";

export default function WhatsAppButton() {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(DEFAULT_MESSAGE);
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Chat with us on WhatsApp"
      className="
        fixed bottom-4 right-4 z-50
        flex items-center justify-center
        h-14 w-14 rounded-full
        bg-green-500 text-white
        shadow-lg
        hover:bg-green-600
        focus:outline-none focus:ring-2 focus:ring-green-300
        transition
      "
    >
      <span className="text-2xl">💬</span>
    </button>
  );
}
