"use client";
import type { PropsWithChildren } from "react";
import { storyblokInit } from "@storyblok/react/rsc";
import Page from "@/src/components/Page";
import { Teaser } from "@/src/components/Teaser";
import { HeroSection } from "@/src/components/hero-section";
import { TableSection } from "@/src/components/table-section";
import { ContentSection } from "@/src/components/content-section";
import { FormSection } from "./form-section";

storyblokInit({
  components: {
    page: Page,
    teaser: Teaser,
    hero: HeroSection,
    table: TableSection,
    content: ContentSection,
    form: FormSection,
  },
  enableFallbackComponent: true,
});

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};
