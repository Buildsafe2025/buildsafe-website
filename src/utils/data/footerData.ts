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
        {
          label: "Projects",
          href: "/projects",
        },
      ],
    },
    {
      header: "Services",
      links: [
        {
          label: "Construction Engineering Consultancy",
          href: "/services?tab=construction_engineering_consultancy",
        },
        {
          label: "Project Management",
          href: "/services?tab=project_management",
        },
        {
          label: "Reality Capture",
          href: "/services?tab=reality_capture",
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
      href: "https://wa.link/pn7ous",
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