"use client";

import { useState } from "react";
import { HiRefresh } from "react-icons/hi";
import { IoPulseSharp } from "react-icons/io5";
import { MdBrandingWatermark } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { render } from "storyblok-rich-text-react-renderer";

interface TableItem {
  title: string;
  content: React.ReactNode;
  icon: string;
}

interface TableSectionProps {
  blok: {
    fields: TableItem[];
    title: string;
  };
}

export const TableSection = ({ blok }: TableSectionProps) => {
  const [data, setData] = useState(0);

  return (
    <div className="flex flex-col mx-auto justify-center bg-[#ede8f5] items-center ">
      {blok.title && (
        <h4 className="text-md uppercase font-bold pt-14 tracking-wider text-[#3d52a0]">
          {blok.title}
        </h4>
      )}
      <div className="w-full justify-center items-center flex flex-col gap-5 mx-auto py-14">
        <div className="flex justify-center">
          {blok.fields.map((item: TableItem, index: number) => {
            const Icons = () => {
              switch (item.icon) {
                case "medarbetare":
                  return <RiTeamLine color="#3d52a0" fontSize={200} />;
                case "puls":
                  return <IoPulseSharp color="#3d52a0" fontSize={200} />;
                case "employer":
                  return <MdBrandingWatermark color="#3d52a0" fontSize={200} />;
                case "rekrytering":
                  return <HiRefresh color="#3d52a0" fontSize={200} />;
                default:
                  return item.icon;
              }
            };
            return data === index ? <Icons key={index} /> : null;
          })}
        </div>
        <div className="flex gap-5">
          {blok.fields.map((item: TableItem, index: number) => {
            return (
              <div className="flex flex-col  gap-20 mb-4" key={index}>
                <button
                  className={`text-left px-5 rounded-md py-2 ${
                    index === data ? "active" : "notActive"
                  }`}
                  onClick={() => setData(index)}
                >
                  {item.title}
                </button>
              </div>
            );
          })}
        </div>
        {blok.fields.map((item: TableItem, index: number) => {
          return data === index ? (
            <span className="text-center">{render(item.content)}</span>
          ) : null;
        })}
      </div>
    </div>
  );
};
