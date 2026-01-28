"use client";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import ContactCard from "@/components/shared/ContactCard";
import Hero from "@/components/home-page/Hero";
import Offer from "@/components/home-page/Offer";
import Service from "@/components/home-page/Service";
import Project from "@/components/home-page/Project";
import Description from "@/components/home-page/Description";
import Client from "@/components/home-page/Client";

const Page = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Hero />
      <Offer />
      <Description />
      <Service />
      <Project />
      <Client />
      <ContactCard />
    </>
  );
};

export default Page;
