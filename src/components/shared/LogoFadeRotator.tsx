"use client";

import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";

type Props = {
  groups: StaticImageData[][];
  interval?: number;
  className?: string;
};

const LogoFadeRotator = ({ groups, interval = 4000, className }: Props) => {
  const [index, setIndex] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), interval - 500);

    const swap = setTimeout(() => {
      setIndex((prev) => (prev + 1) % groups.length);
      setVisible(true);
    }, interval);

    return () => {
      clearTimeout(timeout);
      clearTimeout(swap);
    };
  }, [index, groups.length, interval]);

  return <ul className={`flex items-center justify-between transition-opacity duration-1000 ${visible ? "opacity-100" : "opacity-0"}`}>
    {groups[index].map((logo, idx)=>(
        <li key={idx} className=" bg-white p-4 mx-5 md:mx-10 relative w-25 h-22.5">
                <Image src={logo} alt={logo.toString()} fill className={`opacity-78 hover:opacity-100 transition cursor-pointer object-contain ${className}`} />
              </li>
    ))}
  </ul>;
};

export default LogoFadeRotator;
