import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection({ blok, locale }: any) {
  return (
    <section className={`relative ${blok.small && "mb-14"} ${blok.small ? "min-h-[70vh]" : "min-h-screen"} flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/5 to-transparent rounded-full" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10 pt-32 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-white/80 font-medium">
              {blok.subtitle}
            </span>
          </div>

          <h1 className="animate-fade-up-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            {blok.title}
            <span className="block mt-2 text-accent">
              {blok.title_highlight}
            </span>
          </h1>

          <p className="animate-fade-up-delay-2 text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            {blok.content}
          </p>

          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#kontakt">
              <Button
                variant="accent"
                size="xl"
                className="group"
              >
                {locale === 'sv' ? 'Boka ett möte' : 'Schedule a Meeting'}
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
              </Button>
            </a>
            <a href="#bakgrund">
              <Button
                size="xl"
                className="border-2 border-white/20 bg-transparent text-white hover:bg-white hover:text-primary hover:-translate-y-1 hover:shadow-xl"
              >
                {locale === 'sv' ? 'Läs mer om oss' : 'Read more about us'}
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {blok.small ? null :
        <div className="absolute bottom-8 flex w-full justify-center -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-10">
          <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      }
    </section>
  );
}
