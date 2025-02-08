"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        <Link href="/">
          <Image
            src={settings?.logo?.filename || ""}
            width={100}
            height={120}
            alt="WorkingProgress"
          />
        </Link>
        <div className="flex flex-col gap-2 mt-10 text-white text-xl">
          <Link onClick={handleOpen} href="/#bakgrund">
            Bakgrund
          </Link>
          <Link onClick={handleOpen} href="/#services">
            Vad vi kan hjälpa er med?
          </Link>
          <Link onClick={handleOpen} href="/#form">
            Kontakta oss
          </Link>
        </div>
      </div>
      <div
        className={`fixed hidden lg:block w-full py-10 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#3d52a0] py-5 items-center" : "bg-transparent"
        }`}
      >
        <div className="flex justify-between container">
          <Link href="/">
            <Image
              src={settings?.logo?.filename || ""}
              width={scrolled ? 100 : 170}
              height={scrolled ? 70 : 120}
              alt="WorkingProgress"
            />
          </Link>

          <div
            className={`flex ${
              scrolled ? "items-center text-lg" : "items-center"
            } gap-5 font-semibold uppercase lg:text-[#ede8f5]`}
          >
            <Link href="/koncept">Koncept</Link>
            <Link href="/foerbaettra-ditt-employer-branding">Employer Branding</Link>
            <Link href="/pitch">Varför oss?</Link>
            <Link href="/#bakgrund">Bakgrund</Link>
            <Link href="/#services">Tjänster</Link>
            <Link href="/#form">Kontakta oss</Link>
          </div>
        </div>
      </div>
    </>
  );
};
