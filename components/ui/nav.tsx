"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";

interface NavProps {
  settings: {
    logo: {
      filename: string;
    };
  };
}

export const Nav = ({ settings }: NavProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="bg-white z-50 rounded-full p-2 m-4 absolute right-2 block lg:hidden "
      >
        {open ? (
          <IoClose color="#172D32" fontSize={30} />
        ) : (
          <LuMenu fontSize={30} color="#172D32" />
        )}
      </button>
      <div
        className={`absolute h-[100vh] right-0 top-0 w-full bg-[#3d52a0] transition-all duration-300 z-30 lg:hidden flex flex-col p-10 ${
          !open ? "translate-x-full" : "translate-x-0"
        } `}
      >
        <Image
          src={settings?.logo?.filename || ""}
          width={100}
          height={120}
          alt="WorkingProgress"
        />
        <div className="flex flex-col gap-2 mt-10 text-white text-xl">
          <Link onClick={handleOpen} href="#bakgrund">
            Bakgrund
          </Link>
          <Link onClick={handleOpen} href="#services">
            Vad vi kan hjälpa er med?
          </Link>
          <Link onClick={handleOpen} href="#form">
            Kontakta oss
          </Link>
        </div>
      </div>
      <div className="absolute hidden lg:block bg-transparent lg:text-[#ede8f5] w-full py-10 z-50">
        <div className="flex justify-between container">
          <Image
            src={settings?.logo?.filename || ""}
            width={170}
            height={120}
            alt="WorkingProgress"
          />

          <div className="flex gap-5">
            <Link href="#bakgrund">Bakgrund</Link>
            <Link href="#services">Vad vi kan hjälpa er med?</Link>
            <Link href="#form">Kontakta oss</Link>
          </div>
        </div>
      </div>
    </>
  );
};
