import poolImg from "@/assets/pool-front.png";
import waterfallImg from "@/assets/pool-waterfall.png";
import poolNightImg from "@/assets/pool-night.png";
import interiorBarImg from "@/assets/interior-bar.png";
import interiorBilliardImg from "@/assets/interior-billiard.png";
import eventGardenImg from "@/assets/event-garden.png";
import barBambooImg from "@/assets/bar-bamboo.jpg";
import barCarteImg from "@/assets/bar-carte.jpg";
import buffetImg from "@/assets/buffet-local.jpg";
import { Waves, UtensilsCrossed, Gamepad2, PartyPopper } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const amenities = [
  {
    icon: Waves,
    title: "Piscine en Pierre Naturelle",
    description: "Une magnifique piscine en pierre naturelle avec cascade, nichée dans un écrin de verdure tropicale.",
  },
  {
    icon: UtensilsCrossed,
    title: "Bar-Restaurant",
    description: "Savourez une cuisine locale raffinée et des cocktails tropicaux dans un cadre convivial et élégant.",
  },
  {
    icon: Gamepad2,
    title: "Espace Loisirs",
    description: "Billard, pétanque et espace détente pour des moments de partage inoubliables entre amis ou en famille.",
  },
  {
    icon: PartyPopper,
    title: "Événementiel",
    description: "Un cadre idyllique pour vos réceptions, mariages et événements privés en plein air.",
  },
];

const imageGroups = [
  {
    title: "La Piscine",
    images: [
      { src: poolImg, alt: "Piscine du domaine" },
      { src: waterfallImg, alt: "Cascade de la piscine" },
      { src: poolNightImg, alt: "Piscine illuminée de nuit" },
    ],
  },
  {
    title: "Le Bar & La Restauration",
    images: [
      { src: barBambooImg, alt: "Bar en bambou" },
      { src: barCarteImg, alt: "Carte des boissons et ambiance du bar" },
      { src: buffetImg, alt: "Buffet de cuisine locale" },
    ],
  },
  {
    title: "Loisirs & Détente",
    images: [
      { src: interiorBarImg, alt: "Espace intérieur du bar" },
      { src: interiorBilliardImg, alt: "Salle de billard" },
      { src: eventGardenImg, alt: "Jardin événementiel" },
    ],
  },
];

const Amenities = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <section id="amenities" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <div ref={headerRef} className={`text-center mb-16 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="uppercase tracking-[0.2em] text-sm text-secondary font-bold mb-3">Nos Espaces</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">Équipements & Services</h2>
        </div>

        {imageGroups.map((group, gi) => (
          <ImageGroup key={group.title} group={group} delay={gi * 200} />
        ))}

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {amenities.map((a, i) => (
            <div
              key={a.title}
              className={`text-center p-8 rounded-2xl bg-card shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <a.icon size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">{a.title}</h3>
              <p className="text-muted-foreground">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ImageGroup = ({ group, delay }: { group: typeof imageGroups[0]; delay: number }) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className="mb-10">
      <h3 className={`text-2xl font-heading font-bold text-foreground mb-5 transition-all duration-600 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`} style={{ transitionDelay: `${delay}ms` }}>
        {group.title}
      </h3>
      <div className="grid md:grid-cols-3 gap-6">
        {group.images.map((img, i) => (
          <div
            key={img.alt}
            className={`rounded-2xl overflow-hidden shadow-xl group transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            style={{ transitionDelay: `${delay + 100 + i * 150}ms` }}
          >
            <img src={img.src} alt={img.alt} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
