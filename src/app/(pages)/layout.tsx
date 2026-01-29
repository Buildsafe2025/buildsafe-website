"use client";
import { useEffect } from "react";
import { ReactNode } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Layout = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return <main>{children}</main>;
};

export default Layout;
