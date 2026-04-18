import facadeImg from "@/assets/hotel-facade.png";
import { MapPin, Building, TreePalm } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 px-4">
      <div ref={ref} className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <p className="uppercase tracking-[0.2em] text-sm text-secondary font-bold mb-3">Le Domaine</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Un écrin d'élégance afro-brésilienne
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Niché au cœur de Ouidah, le Domaine de la Palmeraie vous accueille dans un cadre unique mêlant architecture afro-brésilienne et luxuriance tropicale. À quelques pas de la célèbre Route des Esclaves, notre domaine offre une expérience authentique, entre sérénité, confort et histoire.
            </p>
            <div className="space-y-4">
              {[
                { icon: Building, text: "Architecture afro-brésilienne authentique" },
                { icon: TreePalm, text: "Jardins tropicaux luxuriants" },
                { icon: MapPin, text: "À proximité de la Route des Esclaves" },
              ].map(({ icon: Icon, text }, i) => (
                <div key={text} className={`flex items-center gap-3 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: `${400 + i * 150}ms` }}>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <span className="text-foreground font-body">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={`rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <img src={facadeImg} alt="Façade du Domaine de la Palmeraie" className="w-full h-[500px] object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
