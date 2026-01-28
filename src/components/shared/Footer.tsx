import { footerLinks, socialMediaLinks } from "@/utils/data/footerData";
import logo from "@public/images/logo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="pt-16 md:pt-32 container pb-4 md:pb-8">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
        <div className="col-span-2 pb-5 md:pb-0">
          <div className="flex flex-col gap-3">
            <div className="relative size-20">
              <Image
                src={logo}
                alt="logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

            <div className="flex items-center justify-between md:justify-start gap-2 ">
              {socialMediaLinks.map(({ href, label }, idx) => (
                <Link href={href}
                  key={idx}
                  className="relative flex items-center justify-center size-12 rounded-lg border-2 border-off-white bg-off-white cursor-pointer transition hover:-translate-y-1 hover:duration-100"
                >
                  <div  className="size-5 relative">
                    <Image
                      src={`/icons/${label}.png`}
                      alt={label}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {footerLinks.map(({ header, links }, idx) => (
          <div key={idx} className=" flex flex-col gap-3">
            <p className="font-semibold text-light-dark">{header}</p>
            {links.map(({ label, href }, idx) => (
              <Link
                key={idx}
                href={href}
                className="text-grey hover:underline "
              >
                {label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <p className="text-grey pt-5">
        &copy; {new Date().getFullYear()} BuildSafe Nigeria Limited. All rights
        reserved.
      </p>
    </section>
  );
};

export default Footer;
