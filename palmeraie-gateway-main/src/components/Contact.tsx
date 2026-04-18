import { Phone, MapPin, Clock } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 px-4 bg-foreground">
      <div ref={ref} className="container max-w-5xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="uppercase tracking-[0.2em] text-sm text-secondary font-bold mb-3">Nous Trouver</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">Réservez votre séjour</h2>
          <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto">
            Contactez-nous pour réserver votre chambre ou organiser votre événement au Domaine de la Palmeraie.
          </p>
        </div>

        <div className={`grid md:grid-cols-2 gap-10 mb-12 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-primary-foreground/80">
              <Phone size={20} className="text-secondary" />
              <a href="tel:+22998420820" className="hover:text-primary-foreground transition-colors">+229 98 42 08 20</a>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground/80">
              <MapPin size={20} className="text-secondary" />
              <a href="https://maps.google.com/?q=83WQ%2B7M+Ouidah" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                Ouidah, Bénin — 83WQ+7M
              </a>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground/80">
              <Clock size={20} className="text-secondary" />
              <span>Arrivée 14h00 · Départ 12h00</span>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl h-64">
            <iframe
              title="Localisation Domaine de la Palmeraie"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0!2d2.08!3d6.36!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjEnMzYuMCJOIDLCsDA0JzQ4LjAiRQ!5e0!3m2!1sfr!2sbj!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className={`text-center transition-all duration-700 delay-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
          <WhatsAppButton className="mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
