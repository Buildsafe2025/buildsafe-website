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
          href: "/services?tab=engineering_consultancy",
        },
        {
          label: "BIM & Digital Engineering",
          href: "/services?tab=project_management",
        },
        {
          label: "Reality Capture",
          href: "/services?tab=reality_capture",
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
      href: "https://www.facebook.com/profile.php?id=100063653374752",
    },
    {
      label: "youtube",
      href: "https://www.youtube.com/@buildsafenigerialimited4751",
    },
    {
      label: "X",
      href: "https://twitter.com/Buildsafeng",
    },
    {
      label: "linkedIn",
      href: "https://www.linkedin.com/company/buildsafe-nigeria-ltd/mycompany/",
    },
  ];

  export {footerLinks, socialMediaLinks}