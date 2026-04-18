import poolNight2Img from "@/assets/pool-night-2.jpg";
import gardenNightImg from "@/assets/garden-night.jpg";
import poolNight3Img from "@/assets/pool-night-3.jpg";
import eventTableImg from "@/assets/event-table.jpg";
import barNight1Img from "@/assets/bar-night-1.jpg";
import barNight2Img from "@/assets/bar-night-2.jpg";
import eventGardenTentImg from "@/assets/event-garden-tent.jpg";
import eventTableDecoratedImg from "@/assets/event-table-decorated.jpg";
import eventNightTablesImg from "@/assets/event-night-tables.jpg";
import eventReceptionImg from "@/assets/event-reception.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const themes = [
  {
    title: "Soirées au Domaine",
    images: [
      { src: poolNight2Img, alt: "Piscine illuminée de nuit" },
      { src: gardenNightImg, alt: "Jardin et façade de nuit" },
      { src: poolNight3Img, alt: "Vue nocturne sur la piscine" },
      { src: barNight1Img, alt: "Bar paillote de nuit" },
      { src: barNight2Img, alt: "Ambiance nocturne du bar" },
    ],
  },
  {
    title: "Réceptions & Célébrations",
    images: [
      { src: eventTableImg, alt: "Table de réception en plein air" },
      { src: eventGardenTentImg, alt: "Réception sous chapiteau dans le jardin" },
      { src: eventTableDecoratedImg, alt: "Table décorée pour une célébration" },
      { src: eventNightTablesImg, alt: "Tables de gala en soirée" },
      { src: eventReceptionImg, alt: "Réception élégante au domaine" },
    ],
  },
];

const Gallery = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="gallery" className="py-24 px-4 bg-foreground">
      <div className="container max-w-6xl mx-auto">
        <div ref={headerRef} className={`text-center mb-16 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="uppercase tracking-[0.2em] text-sm text-secondary font-bold mb-3">Galerie</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Ambiance & Atmosphère</h2>
          <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto">Découvrez le charme du Domaine de la Palmeraie de jour comme de nuit</p>
        </div>

        {themes.map((theme, ti) => (
          <ThemeGroup key={theme.title} theme={theme} index={ti} />
        ))}
      </div>
    </section>
  );
};

const ThemeGroup = ({ theme, index }: { theme: typeof themes[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className="mb-14 last:mb-0">
      <h3 className={`text-2xl font-heading font-bold text-primary-foreground/90 mb-5 transition-all duration-600 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}>
        {theme.title}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {theme.images.map((img, i) => (
          <div
            key={img.alt}
            className={`rounded-2xl overflow-hidden shadow-xl group transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <img src={img.src} alt={img.alt} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
