"use client";
import type { PropsWithChildren } from "react";
import { storyblokInit } from "@storyblok/react/rsc";
import Page from "@/components/Page";
import { Teaser } from "@/components/Teaser";
import { HeroSection } from "@/components/hero-section";
import { TableSection } from "@/components/table-section";
import { ContentSection } from "@/components/content-section";

storyblokInit({
  components: {
    page: Page,
    teaser: Teaser,
    hero: HeroSection,
    table: TableSection,
    content: ContentSection,
  },
  enableFallbackComponent: true,
});

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};
