import { Star, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Reviews = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="reviews" className="py-24 px-4">
      <div ref={ref} className="container max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="uppercase tracking-[0.2em] text-sm text-secondary font-bold mb-3">Témoignages</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">Ce que disent nos hôtes</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className={`bg-card rounded-2xl p-8 shadow-lg text-center transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-3">Google</p>
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(4)].map((_, i) => <Star key={i} size={22} className="text-secondary fill-secondary" />)}
              <Star size={22} className="text-secondary" />
            </div>
            <p className="text-3xl font-heading font-bold text-foreground">4,2<span className="text-lg text-muted-foreground font-body font-normal"> / 5</span></p>
            <p className="text-muted-foreground mt-1">74 avis</p>
          </div>

          <div className={`bg-card rounded-2xl p-8 shadow-lg text-center transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-3">Tripadvisor</p>
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} size={22} className="text-secondary fill-secondary" />)}
            </div>
            <p className="text-3xl font-heading font-bold text-foreground">5<span className="text-lg text-muted-foreground font-body font-normal"> / 5</span></p>
            <p className="text-muted-foreground mt-1">2 avis</p>
          </div>
        </div>

        <div className={`bg-card rounded-2xl p-8 shadow-lg max-w-3xl mx-auto transition-all duration-700 delay-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          <Quote size={32} className="text-primary/30 mb-4" />
          <p className="text-foreground text-lg italic leading-relaxed mb-4">
            «&nbsp;Domaine authentique, accueillant et magnifique tout proche de la route des esclaves. Beaucoup de monuments forts à découvrir. Le personnel ont fait un travail remarquable.&nbsp;»
          </p>
          <p className="text-muted-foreground font-bold">— fanpo35, Tripadvisor</p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
