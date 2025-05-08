import { getStoryblokApi } from "@storyblok/react";
import { redirect } from "next/navigation";

export const fetchSettings = async () => {
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
    if (error.response && error.response.status === 500) {
      redirect("/500");
    } else {
      throw error;
    }
  }
};
