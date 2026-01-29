"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@public/images/logo.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

type linkProp = {
  label: string;
  href: string;
};
const Header = () => {
  const pathname = usePathname();

  const [open, setOpen] = useState<boolean>(false);

  const links: linkProp[] = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Us",
      href: "/about-us",
    },
    {
      label: "Service",
      href: "/services",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Contact Us",
      href: "/contact-us",
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
  // eslint-disable-next-line react-hooks/set-state-in-effect
  setOpen(false);
}, [pathname]);

  return (
    <>
      <header
        data-aos="fade-down"
        data-aos-duration="1200"
        className={`${pathname !== "/" && "border-b-light-grey border-b"}`}
      >
        <div className="container hidden lg:flex justify-between items-center w-full py-2">
          <Link href="/" className="relative size-20">
            <Image
              fill
              src={logo}
              alt="logo"
              style={{
                objectFit: "contain",
              }}
            />
          </Link>

          <div className="flex gap-20">
            {links.map(({ label, href }, idx) => (
              <div
                key={idx}
                className={`py-1 ${pathname === href && "border-b-primary border-b-2"} hover:text-primary`}
              >
                <Link
                  href={href}
                  className={`${pathname === href && "text-primary font-semibold"}`}
                >
                  {label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </header>

      <header className="lg:hidden">
        <div className="container flex items-center justify-between pt-4 pb-2">
          <Link href="/" className="relative size-16">
            <Image
              fill
              src={logo}
              alt="logo"
              style={{
                objectFit: "contain",
              }}
            />
          </Link>
          <button onClick={() => setOpen(!open)} className="text-2xl">☰</button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ${open ? "max-h-100 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <nav className="px-4 pb-6">
            <ul className="space-y-4 text-base">
              {links.map(({ label, href }, idx) => (
                <li
                  key={idx}
                  className={`py-1 ${pathname === href && "border-b-primary"} hover:text-primary`}
                >
                  <Link
                    href={href}
                    className={`${pathname === href && "text-primary font-semibold border-b pb-2"}`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
