import Image from "next/image";
import Link from "next/link";
import ContactCard from "@/components/shared/ContactCard";
import {
  aboutUsContent,
  coreValues,
  teamMembers,
} from "@/utils/data/aboutUsData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us",
  description: `BuildSafe Nigeria Ltd (BNL) is a leading indigenous engineering
              consultancy, project management, and reality capture service
              provider in Nigeria. In pursuit of excellence, we consistently
              deliver services that meet and exceed customer expectations while
              complying with all applicable statutory and regulatory
              requirements.`,
};

const Page = () => {
  return (
    <>
      <div className="container pt-7.5 lg:pt-15 overflow-hidden">
        <div className="flex flex-col gap-10 md:gap-15 lg:gap-20">
          <div className="flex flex-col gap-2 lg:gap-4">
            <p className="heading-1 ">about us</p>
            <p className="text-[#333]">
              Understand the expertise and dedication that guide our engineering
              solutions.
            </p>
          </div>

          <div className="flex flex-col-reverse md:grid grid-cols-2 place-items-center gap-4 md:gap-2">
            <p
              data-aos="fade-down"
              data-aos-duration="1000"
              className="font-montserrat text-grey text-balance p-3"
            >
              BuildSafe Nigeria Ltd (BNL) is a leading indigenous engineering
              consultancy, project management, and reality capture service
              provider in Nigeria. In pursuit of excellence, we consistently
              deliver services that meet and exceed customer expectations while
              complying with all applicable statutory and regulatory
              requirements.
              <br />
              <br />
              <span className="pt-3">
                Our operations are guided by global best practices and continual
                process improvement in line with the ISO 9001:2015 Quality
                Management System, ensuring efficiency, accuracy, and
                reliability across every project.
              </span>
            </p>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="bg-grey rounded-xl h-67.5 md:h-125 w-full "
            >
              &nbsp;
            </div>
          </div>

          {aboutUsContent.map(({ header, imgUrl, description }, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
              className={`flex flex-col md:flex-row items-center justify-between gap-10  ${idx !== 0 && "md:flex-row-reverse"}`}
            >
              <div className="flex flex-col gap-2 max-w-130">
                <p className="heading-2">{header}</p>
                <p className="text-grey">{description}</p>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                className="relative min-h-67.5 lg:min-h-80 h-full min-w-65 w-full"
              >
                <Image
                  src={imgUrl!}
                  alt="Vision"
                  className="object-contain h-full w-full"
                />
              </div>
            </div>
          ))}

          <div className="flex flex-col gap-3">
            <p className="heading-2">our core values</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-9">
              {coreValues.map(({ header, description }, idx) => (
                <div
                  key={idx}
                  data-aos="zoom-in-up"
                  data-aos-duration="1100"
                  className="border-light-grey border-[0.7px] rounded-xl flex flex-col gap-2 items-center relative p-4 text-center cursor-pointer hover:-translate-y-1.25"
                >
                  <Image
                    src={`/icons/icon-${idx + 1}.png`}
                    alt={`icon-${idx + 1}`}
                    width={50}
                    height={50}
                  />
                  <p className="font-semibold text-lg capitalize">{header}</p>
                  <p className="text-grey">{description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 md:gap-3">
            <p data-aos="fade-up" data-aos-duration="900" className="heading-2">
              meet our team
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="900"
              className="font-montserrat"
            >
              Our experienced professionals bring decades of combined expertise
              to every project, ensuring quality and excellence in all our
              construction endeavors.
            </p>

            <div className="grid grid-col-1 md:grid-cols-4 lg:grid-cols-5 md:gap-x-10 gap-y-7.5 md:gap-y-15">
              {teamMembers.map(({ name, role, linkedIn }, idx) => (
                <div
                  data-aos="zoom-in-up"
                  data-aos-duration="1000"
                  key={idx}
                  className="flex flex-col gap-1.5 items-center text-center text-light-dark hover:-translate-y-1.25 hover:duration-500 transition-all hover:delay-200 cursor-pointer "
                >
                  <div className="relative rounded-full size-30">
                    <Image
                      src={`/images/team/${name.split(" ")[0].toLowerCase()}.png`}
                      alt={name}
                      fill
                      className="rounded-full"
                    />
                  </div>
                  <p className=" text-lg font-semibold capitalize">{name}</p>
                  <p className="text-sm capitalize">{role}</p>
                  <Link
                    className="relative size-5"
                    href={linkedIn}
                    target="_blank"
                  >
                    <Image
                      src={"/icons/linkedIn-blue.svg"}
                      alt="linkedIn-icon"
                      fill
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ContactCard
        header="Need Accurate Site Data for Your Project?"
        description="Talk to our team about laser scanning, drone surveys, and 3D site capture tailored to your project requirements."
      />
    </>
  );
};

export default Page;
