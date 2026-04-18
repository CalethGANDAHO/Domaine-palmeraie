import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import WhatsAppButton from "./WhatsAppButton";

// Import existing images from assets
import gardenNight from "@/assets/garden-night.jpg";
import poolEvent from "@/assets/event-garden-tent.jpg";
import eventGarden from "@/assets/event-garden.png";
import poolFront from "@/assets/pool-front.png";
import poolAerial from "@/assets/pool-aerial.png";
import heroLogo from "@/assets/hero-logo.png";

const Hero = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ]);

  const images = [
    { src: heroLogo, alt: "Domaine de la Palmeraie Logo", isLogo: true },
    { src: gardenNight, alt: "Jardins tropicaux la nuit" },
    { src: poolEvent, alt: "Événement au bord de la piscine" },
    { src: eventGarden, alt: "Allée fleurie du domaine" },
    { src: poolFront, alt: "Piscine et bar du domaine" },
  ];

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((image, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0 h-full">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (image.isLogo) {
                    target.src = poolAerial;
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, hsla(25,20%,10%,0.25), hsla(25,20%,10%,0.6))" }} />
      
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <p className="uppercase tracking-[0.3em] text-sm mb-4 text-primary-foreground/80 font-body animate-[fade-in-up_0.8s_ease-out_0.2s_both]">Ouidah · Bénin</p>
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary-foreground mb-6 text-shadow-hero leading-tight animate-[fade-in-up_0.8s_ease-out_0.4s_both]">
          Domaine de la Palmeraie
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 font-light mb-10 max-w-xl mx-auto font-body animate-[fade-in-up_0.8s_ease-out_0.6s_both]">
          Un havre de paix tropical au cœur de la cité historique de Ouidah
        </p>
        <div className="animate-[fade-in-up_0.8s_ease-out_0.8s_both]">
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
};

export default Hero;
