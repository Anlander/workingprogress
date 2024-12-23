import { getData } from "@/data/get-data";
import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

const Page = async ({ params }: { params: { slug: string } }) => {
  const pathname = params.slug;
  const slugName = pathname === undefined ? `home` : pathname;
  const story = await getData(slugName);
  return <StoryblokStory story={story.data.data.story} />;
};

export default Page;
