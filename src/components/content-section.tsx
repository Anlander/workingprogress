import { render } from "storyblok-rich-text-react-renderer";

interface ContentSectionProps {
  blok: {
    title: string;
    sub_content: string;
    content: any;
  };
}

export const ContentSection = ({ blok }: ContentSectionProps) => {
  return (
    <div
      className={`py-10 ${
        !blok.sub_content ? "lg:py-6" : "lg:py-20"
      } bg-[white]`}
      id={blok.title.toLowerCase()}
    >
      <div className="flex container flex-col gap-5 ">
        <h4 className="text-md uppercase font-bold pt-0 lg:pt-14 tracking-wider text-[#8597c4]">
          {blok.title}
        </h4>
        <p className="text-xl lg:text-4xl lg:max-w-[80%] lg:leading-[45px]">
          {blok.sub_content}
        </p>
        <span className="render-content">{render(blok.content)}</span>
      </div>
    </div>
  );
};
