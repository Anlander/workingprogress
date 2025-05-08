import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const Page = ({ blok, lang }: any) => (
  <div {...storyblokEditable(blok)}>
    {blok &&
      Array.isArray(blok.body) &&
      blok.body.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} locale={lang} />
      ))}
  </div>
);

export default Page;
