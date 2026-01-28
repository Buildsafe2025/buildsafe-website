import { quotes } from "@/utils/data/quoteData";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

import quoteIcon from "@public/icons/quote-icon.svg";
import LogoFadeRotator from "../shared/LogoFadeRotator";

import client1 from "@public/images/clients/client-1.png";
import client2 from "@public/images/clients/client-2.png";
import client3 from "@public/images/clients/client-3.png";
import client4 from "@public/images/clients/client-4.png";
import client5 from "@public/images/clients/client-5.png";
import client6 from "@public/images/clients/client-6.png";
import client7 from "@public/images/clients/client-7.png";
import client8 from "@public/images/clients/client-8.png";
import client9 from "@public/images/clients/client-9.png";
import client10 from "@public/images/clients/client-10.png";
import client11 from "@public/images/clients/client-11.png";

const Client = () => {
  const images = [
    [client1, client2, client3, client4, client5, client6],
    [client7, client8, client9, client10, client11],
  ];

  const mobileImages = [
    [client1, client2, client3],
    [client4, client5, client6],
    [client7, client8, client9],
    [client10, client11],
  ];
  return (
    <>
      <section className="container pt-16 lg:pt-32">
        <p className="heading-2">Client Testimonials</p>
        <div className="py-5 md:py-10 bg-off-white/15">
          <Marquee
            pauseOnClick
            gradient={true}
            gradientWidth={100}
            gradientColor="#FFF"
            speed={30}
            autoFill
          >
            {quotes.map(({ name, role, quote }, idx) => (
              <div
                key={idx}
                className="overflow-hidden bg-white p-4 mx-2 min-h-30 max-w-108.25 w-full "
              >
                <div className="flex flex-col gap-10">
                  <div className="flex flex-col gap-5 text-light-dark">
                    <Image
                      src={quoteIcon}
                      alt="icon"
                      className="size-6 w-full mx-auto"
                    />
                    <p className="text-sm md:text-base">{quote}</p>
                  </div>
                  <div className="">
                    <p className="font-medium text-lg md:text-xl">{name}</p>
                    <cite className="text-[#6E6E6E] text-sm md:text-base ">
                      {role}
                    </cite>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="container pt-10 lg:pt-32">
        <p className="heading-2 capitalize">Our clients</p>
        <div className="py-5 md:py-10 bg-off-white/15 hidden lg:block">
          <LogoFadeRotator groups={images} />
        </div>
        <div className="py-5 md:py-10 bg-off-white/15 lg:hidden">
          <LogoFadeRotator groups={mobileImages} />
        </div>
      </section>
    </>
  );
};

export default Client;
