import { StoryblokStory } from "@storyblok/react/rsc";
import { fetchData } from "@/app/data/fetch-data";

const Page = async ({ params }: { params: { slug: string } }) => {
  const pathname = params.slug;
  const slugName = pathname === undefined ? `home` : pathname;
  const story = await fetchData(slugName);
  return <StoryblokStory story={story.data.data.story} />;
};

export default Page;
