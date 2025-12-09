import { CheckCircle2 } from "lucide-react";
import { render } from "storyblok-rich-text-react-renderer";

const benefits = [
  "Medarbetarundersökningar",
  "pulsmätningar",
  "Employer Branding",
  "Rekryteringsstöd",
  "visselblåsartjänst",
  "AI-frågeassistent",
  "AI-baserad textanalys",
  "Konsulttjänster för enkäter",
];

export function Background({ blok }: any) {
  return (
    <section id="bakgrund" className="section-padding bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Bakgrund
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {render(blok.title)}
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {blok.content}
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {blok.benefits.map((benefit: any) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 text-foreground"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium">{benefit.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square max-w-md mx-auto lg:max-w-none relative">
              <div className="absolute inset-8 bg-gradient-to-br from-primary to-primary/80 rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-6xl md:text-7xl font-bold mb-2">100%</div>
                  <div className="text-lg opacity-80">Kundnöjdhet</div>
                </div>
              </div>

              <div className="absolute top-0 right-0 bg-accent text-accent-foreground rounded-2xl px-6 py-4 shadow-lg animate-float">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm opacity-80">Företag</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
