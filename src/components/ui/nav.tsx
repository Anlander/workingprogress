"use client";

import { useState, useEffect, useTransition } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter, usePathname, useParams } from "next/navigation";

export function Nav({ settings, locale }: { settings: any; locale: { locale: string } }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const path = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const setLanguage = (locale: string) => {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=${60 * 60 * 24 * 30}`;

    const segments = path.split("/").filter(Boolean);

    const isFirstSegmentLang = segments.length > 0 && ["sv", "en"].includes(segments[0]);

    let newPath;
    if (isFirstSegmentLang) {
      segments[0] = locale;
      newPath = "/" + segments.join("/");
    } else {
      newPath = `/${locale}${path}`;
    }

    startTransition(() => {
      router.push(newPath);
    });
  };

  const navLinks = [
    {
      href: `/koncept`,
      label: locale.locale === "sv" ? "Koncept" : "Concept",
    },
    {
      href: `${locale.locale}/#bakgrund`,
      label: locale.locale === "sv" ? "Bakgrund" : "Background",
    },
    {
      href: `${locale.locale}/pitch`,
      label: locale.locale === "sv" ? "Varför oss?" : "Why us?",
    },
    {
      href: `${locale.locale}/foerbaettra-ditt-employer-branding`,
      label: locale.locale === "sv" ? "Employer branding" : "Employer Branding",
    },
    {
      href: `${locale.locale}/#tjanster`,
      label: locale.locale === "sv" ? "Tjänster" : "Services",
    },
    {
      href: `${locale.locale}/#kontakt`,
      label: locale.locale === "sv" ? "Kontakt" : "Contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-[#172645] backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src={settings?.logo?.filename || ""} width={80} height={120} alt="WorkingProgress" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors relative group",
                isScrolled ? "text-white hover:text-white/70" : "text-white/70 hover:text-white"
              )}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a href="/#kontakt">
            <Button variant="accent" size="sm">
              {locale.locale === "sv" ? "Boka möte" : "Schedule Meeting"}
            </Button>
          </a>

          <div className="flex gap-2 items-center">
            <button
              onClick={() => setLanguage("sv")}
              className={cn(
                "flex transition-opacity",
                locale.locale === "sv" ? "opacity-100" : "opacity-50 hover:opacity-75"
              )}
            >
              <img
                src="https://a.storyblok.com/f/318037/1600x1000/84f5e65ba6/sweden.svg"
                width={40}
                height={40}
                alt="Swedish"
              />
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={cn(
                "flex transition-opacity",
                locale.locale === "en" ? "opacity-100" : "opacity-50 hover:opacity-75"
              )}
            >
              <img
                src="https://a.storyblok.com/f/318037/330x165/e463380fe6/flag_of_the_united_kingdom-svg.webp"
                width={45}
                height={50}
                alt="English"
              />
            </button>
          </div>
        </nav>

        <button
          className={cn("md:hidden p-2 transition-colors", isScrolled ? "text-foreground" : "text-white")}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-80 py-6" : "max-h-0 py-0"
        )}
      >
        <nav className="container flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button variant="accent" className="mt-2">
            {locale.locale === "sv" ? "Boka möte" : "Schedule Meeting"}
          </Button>
        </nav>
      </div>
    </header>
  );
}
