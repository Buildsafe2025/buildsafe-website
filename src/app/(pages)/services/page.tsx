import ServicePage from "@/components/service-page/ServicePage";

import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our full range of engineering, construction and consultancy solutions designed for safe, efficient and high-quality project delivery.",
};

const Page = () => {
  return (
    <Suspense fallback={null}>
      <ServicePage />
    </Suspense>
  );
};

export default Page;
