import { useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export function Form({ blok, locale }: any) {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSent(true);
      } else {
        setSent(false);
      }
    } catch (error) {
      console.error("Error sending message.", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="section-padding bg-secondary/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              {locale === "sv" ? "Kontakta oss" : "Contact us"}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {locale === "sv" ? "Redo att ta nästa steg?" : "Preperd to take the next step?"}
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              {locale === "sv" ? "Vill du förbättra din arbetsmiljö och personalnöjdhet? Boka ett möte för att se vilka spännande lösningar som passar just er organisation." : "Do you want to improve your work environment and employee satisfaction? Schedule a meeting to see which exciting solutions suit your organization."}
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{locale === "sv" ? "E-post" : "Email"}</div>
                  <a href="mailto:info@workingprogress.se" className="text-foreground font-medium hover:text-accent transition-colors">
                    info@workingprogress.se
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{locale === "sv" ? "Telefon" : "Phone"}</div>
                  <a href="tel:+46701234567" className="text-foreground font-medium hover:text-accent transition-colors">
                    +46 70 123 45 67
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{locale === "sv" ? "Plats" : "Place"} </div>
                  <span className="text-foreground font-medium">Stockholm, Sverige</span>
                </div>
              </div>
            </div>
          </div>

          {sent ? (
            <div className="flex items-center justify-center">
              <div className="bg-background rounded-3xl p-8 md:p-12 shadow-lg border border-border text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {locale === "sv" ? "Tack för ditt meddelande" : "Thank you for your message!"}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {locale === "sv" ? "Vi återkommer till dig så snart som möjligt!" : "We will get back to you as soon as possible!"}
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-background rounded-3xl p-8 md:p-10 shadow-lg border border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      {locale === "sv" ? "Namn" : "Name"}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Ditt namn"
                      className="h-12"
                      onChange={handleChange}
                      value={formData.name}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      {locale === "sv" ? "Telefonnummer" : "Phone number"}
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+46 70 123 45 67"
                      className="h-12"
                      onChange={handleChange}
                      value={formData.phone}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {locale === "sv" ? "E-post" : "Email"}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="din@email.se"
                    required
                    className="h-12"
                    onChange={handleChange}
                    value={formData.email}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Meddelande
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Vilka dagar och tider passar er bäst?"
                    rows={4}
                    className="resize-none"
                    onChange={handleChange}
                    value={formData.message}
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox id="privacy" required />
                  <label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                    <span>
                      Jag godkänner behandling av mina personuppgifter i enlighet med integritetspolicyn.
                    </span>
                    <span className="block text-xs mt-1">
                      <a href="#" className="text-accent hover:underline">
                        Läs mer om vår integritetspolicy här.
                      </a>
                    </span>
                  </label>
                </div>

                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    locale === "sv" ? "Skickar..." : "Sending..."
                  ) : (
                    <>
                      {locale === "sv" ? "Skicka meddelande" : "Send Message"}
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
