import { render } from "storyblok-rich-text-react-renderer";

interface ContentSectionProps {
  blok: {
    title: string;
    sub_content: string;
    content: React.ReactNode;
  };
}

export const ContentSection = ({ blok }: ContentSectionProps) => {
  return (
    <div className="py-20 bg-[white]">
      <div className="flex container flex-col gap-5 ">
        <h4 className="text-md uppercase font-bold pt-14 tracking-wider text-[#8597c4]">
          {blok.title}
        </h4>
        <p className="text-4xl max-w-[80%] leading-[45px]">{blok.sub_content}</p>
        <span className="render-content">{render(blok.content)}</span>
      </div>
    </div>
  );
};
