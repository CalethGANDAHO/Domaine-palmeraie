import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/22998420820?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20une%20chambre%20au%20Domaine%20de%20la%20Palmeraie";

interface WhatsAppButtonProps {
  children?: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline";
}

const WhatsAppButton = ({ children = "Contactez-nous via WhatsApp", className = "", variant = "primary" }: WhatsAppButtonProps) => {
  const base = "inline-flex items-center gap-2 px-8 py-4 rounded-lg font-body font-bold text-lg transition-all duration-300 hover:scale-105";
  const variants = {
    primary: "bg-primary text-primary-foreground hover:opacity-90 shadow-lg",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
  };

  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`${base} ${variants[variant]} ${className}`}>
      <MessageCircle size={22} />
      {children}
    </a>
  );
};

export default WhatsAppButton;
