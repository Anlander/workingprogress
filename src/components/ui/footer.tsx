import { Linkedin, Twitter } from "lucide-react";

export function Footer({ locale }: { locale?: string }) {
  const currentYear = new Date().getFullYear();
  const isSwedish = locale === "sv";

  return (
    <footer className="bg-primary text-primary-foreground py-16 mt-14">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="text-2xl font-bold tracking-tight mb-4 block">
              Working<span className="text-accent">Progress</span>
            </span>
            <p className="text-primary-foreground/70 max-w-sm leading-relaxed">
              {isSwedish
                ? "Vi hjälper organisationer att attrahera och behålla talanger, skapa engagerande arbetsmiljöer och säkerställa en trygg arbetsplatskultur."
                : "We help organizations attract and retain talent, create engaging work environments, and ensure a safe workplace culture."}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">{isSwedish ? "Tjänster" : "Services"}</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>
                {isSwedish ? "Medarbetarundersökningar" : "Employee Surveys"}
              </li>
              <li>
                {isSwedish ? "Pulsmätningar" : "Pulse Surveys"}
              </li>
              <li>
                Employer Branding
              </li>
              <li>
                {isSwedish ? "Rekryteringsstöd" : "Recruitment Support"}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{isSwedish ? "Företaget" : "Company"}</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>
                <a href="#bakgrund" className="hover:text-accent transition-colors">
                  {isSwedish ? "Om oss" : "About Us"}
                </a>
              </li>
              <li>
                <a href="#koncept" className="hover:text-accent transition-colors">
                  {isSwedish ? "Koncept" : "Concept"}
                </a>
              </li>
              <li>
                <a href="#kontakt" className="hover:text-accent transition-colors">
                  {isSwedish ? "Kontakt" : "Contact"}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  {isSwedish ? "Integritetspolicy" : "Privacy Policy"}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {currentYear} WorkingProgress. {isSwedish ? "Alla rättigheter förbehållna." : "All rights reserved."}
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
