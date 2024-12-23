import type { Metadata } from "next";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import "./globals.scss";
import { StoryblokProvider } from "../components/StoryblokProvider";
import { Header } from "@/components/ui/header";

export const metadata: Metadata = {
  title: "WorkingProgress",
  description:
    "Vi stärker din arbetsplats – med insikt, engagemang och transparens.",
};

const cachedFetch = (input: any, init?: any): Promise<Response> => {
  return fetch(input, {
    ...init,
    cache: process.env.NODE_ENV === "development" && "no-store",
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
}: {
  children: React.ReactNode;
}) {
  return (
    <StoryblokProvider>
      <html lang="sv">
        <body>
          <Header />
          {children}
        </body>
      </html>
    </StoryblokProvider>
  );
}
