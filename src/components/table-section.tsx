"use client";
import { Users, BarChart3, Target, Shield, Sparkles, MessageSquare } from "lucide-react";
import { render } from "storyblok-rich-text-react-renderer";

export function TableSection({ blok }: any) {
  const Icons = (icon: string) => {

    switch (icon) {
      case "Users":
        return <Users className="w-7 h-7 text-accent" />
      case "BarChart3":
        return <BarChart3 className="w-7 h-7 text-accent" />
      case "Target":
        return <Target className="w-7 h-7 text-accent" />
      case "Shield":
        return <Shield className="w-7 h-7 text-accent" />
      case "Sparkles":
        return <Sparkles className="w-7 h-7 text-accent" />
      case "MessageSquare":
        return <MessageSquare className="w-7 h-7 text-accent" />
      default:
        return;
    }
  }

  return (
    <section id="tjanster" className="section-padding bg-secondary/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Våra tjänster
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {blok.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {blok.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blok.fields.map((feature: any, index: number) => (
            <div
              key={index}
              className="group relative bg-background rounded-2xl p-8 hover-lift border border-transparent hover:border-accent/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 transition-colors group-hover:bg-accent/20">
                {Icons(feature.icon)}
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                {feature.title}
              </h3>
              <span className="text-muted-foreground leading-relaxed render-content">
                {render(feature.content)}
              </span>

              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
