import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";

interface HeroSectionProps {
  blok: {
    title: string;
    subtitle: string;
    content: string;
    bg: {
      filename: string;
      alt: string;
    };
  };
}

export const HeroSection = ({ blok }: HeroSectionProps) => {
  return (
    <div
      className={`h-full py-14 lg:py-0 ${
        blok.content ? "lg:h-full" : "lg:h-[80vh] lg:pt-20"
      } flex items-center relative`}
      {...storyblokEditable}
    >
      <div className="absolute top-0 h-full w-full bg-[#3d52a0] opacity-80 z-10" />
      <Image
        src={blok.bg?.filename}
        fill
        alt={blok?.bg?.alt}
        className="object-cover"
      />
      <div className="container flex flex-col gap-2 z-20 lg:py-56">
        <div className="flex flex-col gap-5">
          <h1 className="lg:max-w-[80%] 2xl:max-w-[60%] flex text-white">
            {blok.title}
          </h1>
          {blok.subtitle && (
            <h3 className="lg:text-2xl max-w-[50%] flex rendered-content">
              {render(blok.subtitle)}
            </h3>
          )}
        </div>
        {blok.content && (
          <p className="lg:max-w-[80%] 2xl:max-w-[50%] flex text-color">
            {blok.content}
          </p>
        )}
      </div>
    </div>
  );
};
