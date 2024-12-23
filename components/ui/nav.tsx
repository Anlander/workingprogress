"use client";

import Image from "next/image";
import Link from "next/link";

interface NavProps {
  settings: {
    logo: {
      filename: string;
    };
  };
}

export const Nav = ({ settings }: NavProps) => {
  return (
    <div className="absolute bg-transparent text-[#ede8f5] w-full py-10 z-50">
      <div className="flex justify-between container">
        <Image
          src={settings?.logo?.filename || ""}
          width={170}
          height={120}
          alt="WorkingProgress"
        />

        <div className="flex gap-5">
          <Link href="">About</Link>
          <Link href="">Services</Link>
          <Link href="">FAQ</Link>
        </div>
      </div>
    </div>
  );
};
