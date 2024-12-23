"use server";

import { getStoryblokApi } from "@storyblok/react";

export async function getSettings() {
  let sbParams = {
    version: "draft" as const,
  };

  const client = getStoryblokApi();
  try {
    const data = await client.get(`cdn/stories/settings`, sbParams);

    if (!data) {
      throw new Error("Not Found");
    }

    return { data };
  } catch (error: any) {
    throw error;
  }
}
