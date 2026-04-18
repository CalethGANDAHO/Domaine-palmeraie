import poolLoungersImg from "@/assets/pool-loungers.png";
import poolBuilding2Img from "@/assets/pool-building-2.png";
import { Wind, Snowflake } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const rooms = [
  {
    title: "Chambre Climatisée",
    price: "45 000 FCFA",
    description: "Spacieuse et confortable, équipée de la climatisation pour un confort optimal toute l'année.",
    icon: Snowflake,
    image: poolBuilding2Img,
  },
  {
    title: "Chambre Ventilée",
    price: "35 000 FCFA",
    description: "Charmante et aérée, profitez de la brise tropicale dans un cadre authentique et reposant.",
    icon: Wind,
    image: poolLoungersImg,
  },
];

const Rooms = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="rooms" className="py-24 px-4" style={{ background: "linear-gradient(180deg, hsl(40,33%,97%) 0%, hsl(40,25%,94%) 100%)" }}>
      <div ref={ref} className="container max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="uppercase tracking-[0.2em] text-sm text-secondary font-bold mb-3">Séjourner</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">Nos Chambres</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">Des chambres pensées pour votre confort, dans un cadre tropical d'exception</p>
          <div className="flex justify-center gap-8 mt-6 text-muted-foreground text-sm">
            <span><span className="font-bold text-foreground">Arrivée :</span> 14h00</span>
            <span><span className="font-bold text-foreground">Départ :</span> 12h00</span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {rooms.map((room, i) => (
            <div
              key={room.title}
              className={`bg-card rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${300 + i * 200}ms` }}
            >
              <div className="overflow-hidden h-72">
                <img src={room.image} alt={room.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <room.icon size={20} className="text-primary" />
                  <h3 className="text-2xl font-heading font-bold text-foreground">{room.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{room.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-heading font-bold text-accent">
                    {room.price}<span className="text-sm text-muted-foreground font-body font-normal"> / nuit</span>
                  </p>
                  <WhatsAppButton variant="outline" className="text-sm px-5 py-2">
                    Réserver
                  </WhatsAppButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
