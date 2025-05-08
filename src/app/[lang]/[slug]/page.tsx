import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";
import { redirect } from "next/navigation";

async function fetchData(slug: string, locale: string) {
  let sbParams = {
    version: "draft" as const,
    language: locale,
  };

  const client = getStoryblokApi();
  try {
    const data = await client.get(`cdn/stories/${slug}`, sbParams);

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
}

const Page = async ({ params }: { params: { slug: string, lang: string } }) => {
  const pathname = params.slug;
  const slugName = pathname === undefined ? `home` : pathname;
  const story = await fetchData(slugName, params.lang);
  return <StoryblokStory story={story.data.data.story} lang={params.lang} />;
};

export default Page;
