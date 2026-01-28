import { footerLinkProp } from "@/interfaces/interface";

  const footerLinks: footerLinkProp[] = [
    {
      header: "Quick Link",
      links: [
        {
          label: "Home",
          href: "/",
        },
        {
          label: "About Us",
          href: "/about-us",
        },
        {
          label: "Services",
          href: "/services",
        },
      ],
    },
    {
      header: "Services",
      links: [
        {
          label: "Structural Engineering",
          href: "#",
        },
        {
          label: "BIM & Digital Engineering",
          href: "#",
        },
        {
          label: "Reality Capture",
          href: "#",
        },
      ],
    },
    {
      header: "Reality Capture",
      links: [
        {
          label: "Laser Scanning",
          href: "/",
        },
        {
          label: "Drone Survey",
          href: "#",
        },
        {
          label: "Scan-to-BIM",
          href: "#",
        },
      ],
    },
    {
      header: "Support",
      links: [
        {
          label: "Contact",
          href: "/contact-us",
        },
      ],
    },
  ];

  const socialMediaLinks = [
    {
      label: "whatsapp",
      href: "#",
    },
    {
      label: "facebook",
      href: "#",
    },
    {
      label: "youtube",
      href: "#",
    },
    {
      label: "X",
      href: "#",
    },
    {
      label: "linkedIn",
      href: "#",
    },
  ];

  export {footerLinks, socialMediaLinks}