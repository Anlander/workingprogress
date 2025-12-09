import { Lightbulb, TrendingUp, Heart } from "lucide-react";

const concepts = {
  sv: [
    {
      icon: Lightbulb,
      title: "Insikt",
      description:
        "Djupgående analyser som ger er verklig förståelse för organisationens styrkor och utvecklingsområden.",
    },
    {
      icon: Heart,
      title: "Engagemang",
      description: "Skapa en arbetsplats där medarbetare trivs, utvecklas och presterar på topp.",
    },
    {
      icon: TrendingUp,
      title: "Transparens",
      description: "Öppen kommunikation och tydliga processer som bygger förtroende i hela organisationen.",
    },
  ],
  en: [
    {
      icon: Lightbulb,
      title: "Insight",
      description:
        "In-depth analyses that give you a real understanding of your organization's strengths and areas for development.",
    },
    {
      icon: Heart,
      title: "Engagement",
      description: "Create a workplace where employees thrive, develop and perform at their best.",
    },
    {
      icon: TrendingUp,
      title: "Transparency",
      description: "Open communication and clear processes that build trust throughout the organization.",
    },
  ],
};

export function Concept({ locale, blok }: { locale?: string; blok?: any }) {
  const isSwedish = locale === "sv";
  const conceptList = isSwedish ? concepts.sv : concepts.en;

  return (
    <section id="koncept" className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            {isSwedish ? "Vårt koncept" : "Our Concept"}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {isSwedish ? "Tre pelare för framgång" : "Three Pillars for Success"}
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            {isSwedish
              ? "Vårt tillvägagångssätt bygger på tre grundpelare som tillsammans skapar hållbara förbättringar i din organisation."
              : "Our approach is built on three fundamental pillars that together create sustainable improvements in your organization."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {conceptList.map((concept, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <concept.icon className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{concept.title}</h3>
              <p className="text-primary-foreground/70 leading-relaxed">{concept.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
