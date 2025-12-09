import type { Metadata } from "next";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { StoryblokProvider } from "@/components/StoryblokProvider";
import "./globals.scss";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "Working Progress",
  description: "Vi stärker din arbetsplats – med insikt, engagemang och transparens.",
};

const cachedFetch = (input: any, init?: any): Promise<Response> => {
  return fetch(input, {
    ...init,
    cache: "no-store",
  });
};

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    fetch: cachedFetch,
  },
});

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: any };
}) {
  return (
    <StoryblokProvider>
      <html lang={lang}>
        <body>
          <Header locale={lang} />
          {children}
          <Footer locale={lang} />
        </body>
      </html>
    </StoryblokProvider>
  );
}
