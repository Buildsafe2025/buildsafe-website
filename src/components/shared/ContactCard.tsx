import Link from "next/link";
import React from "react";

interface contactCardProp {
  header?: string;
  description?: string;
  href?: string;
}
const ContactCard = ({
  header = "Your Project, Our Expertise",
  description = `Start your next construction or engineering project with reliable expertise you can trust`,
  href = "/contact-us",
}: contactCardProp) => {
  return (
    <section className="container pt-16 lg:pt-32">
      <div className="rounded-2xl relative h-full min-h-50 bg-[conic-gradient(from_20deg,#1856A8_5%,#261772_21%,#261772_38%,#1856a8_51%,#261772_71%,#1856a8_79%,#261772_86%,#261772_88%,#1856a8_90%,#261772_92%,#261772_99%)]">
        <div className="grid grid-cols-1 md:grid-cols-4 px-5 py-7.5 md:px-10 md:py-15 gap-y-8">
          <div className="flex flex-col col-span-3 gap-2 ">
            <p className="heading-2 text-white">{header}</p>
            <p className="text-xs md:text-sm text-white">{description}</p>
          </div>
          <div className="col-span-1 relative">
            <Link href={href}>
              <button className="bg-white rounded-4xl w-full py-2 px-3 md:py-3 md:px-5 text-sm md:text-base capitalize text-light-dark font-semibold hover:transition hover:scale-105 duration-200 delay-100 hover:shadow-xl">
                contact us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
