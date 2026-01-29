"use client";

import ServiceCard from "@/components/shared/ServiceCard";
import { serviceProp } from "@/interfaces/interface";
import {
  engineeringConsultancy,
  projectManagement,
  realityCapture,
} from "@/utils/data/serviceData";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import ContactCard from "@/components/shared/ContactCard";

interface tabProp {
  id: string;
  label: string;
  data: serviceProp[];
}

const ServicePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams.toString());
  const tab = params.get("tab");

  const tabs: tabProp[] = [
    {
      id: "engineering_consultancy",
      label: "Engineering Consultancy",
      data: engineeringConsultancy,
    },
    {
      id: "project_management",
      label: "Project Management",
      data: projectManagement,
    },
    {
      id: "reality_capture",
      label: "Reality Capture",
      data: realityCapture,
    },
  ];

  const [activeTab, setActiveTab] = useState<string>(
    tab === null ? "engineering_consultancy" : tab,
  );

  const changeTab = (tab: string) => {
    params.set("tab", tab);

    setActiveTab(tab);

    router.replace(`?${params.toString()}`, {
      scroll: false,
    });
  };

  useEffect(() => {
    if (tab === null) {
      params.set("tab", activeTab);
    } else {
      params.set("tab", tab!);
    }

    router.replace(`?${params.toString()}`, {
      scroll: false,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <section className="container pt-7.5 lg:pt-15 ">
        <div className="flex flex-col gap-5 md:gap-10">
          <div className="flex flex-col gap-2 lg:gap-4">
            <p className="heading-1">services</p>
            <p className="text-grey">
              Explore our full range of engineering, construction and
              consultancy solutions designed for safe, efficient and
              high-quality project delivery.
            </p>
          </div>

          <div className="flex gap-2 md:gap-4 lg:gap-5 overflow-x-scroll lg:overflow-hidden custom-scrollbar">
            {tabs.map(({ id, label }) => (
              <div key={id} className="w-full flex-1 min-w-60">
                <button
                  onClick={() => changeTab(id)}
                  className={` text-xs md:text-base rounded-full py-2 px-1.75 md:py-4 md:px-5 text-center w-full ${activeTab === id ? "bg-primary text-white font-semibold" : "text-grey bg-white border-light-grey border-[1.5px]"}`}
                >
                  {label}
                </button>
              </div>
            ))}
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-7 "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {tabs
              .find((tab) => tab.id === activeTab)
              ?.data.map(
                ({ header, description, imgUrl }: serviceProp, idx) => (
                  <ServiceCard
                    key={idx}
                    header={header}
                    description={description}
                    imgUrl={imgUrl}
                  />
                ),
              )}
          </div>
        </div>
      </section>

      <ContactCard
        header="Ready to Deliver Projects On Time and On Budget?"
        description="Streamline your project from planning to completion with professional project management services. We manage risks, costs, schedules, and coordination for smooth execution."
      />
    </>
  );
};

export default ServicePage;
