import { services } from "@/utils/data/serviceData";
import Link from "next/link";
import React from "react";
import ServiceCard from "../shared/ServiceCard";

const Service = () => {
  return (
    <section className="container pt-16 lg:pt-32">
      <div
        data-aos="fade-up"
        data-aos-duration="1100"
        className="flex flex-col gap-2 lg:gap-3"
      >
        <div className="flex justify-between">
          <p className="heading-2 text-2xl! inline-block align-bottom">Service Category</p>
          <Link href={"/service"} className="btn-secondary ">
            view all <span className="hidden md:inline-flex">services</span>
          </Link>
        </div>
        <p className="w-full max-w-130 text-off-grey  md:text-lg">
          Explore engineering, construction, and consultancy solutions designed
          for safe, efficient, and high-quality project delivery.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-7">
          {services.map(({ imgUrl, header, description }, i) => (
            <Link
              key={i}
              href={`/service?tab=${header.toLowerCase().replace(" ", "_")}`}
              className="relative "
            >
              <ServiceCard
                imgUrl={imgUrl}
                header={header}
                description={description}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
