"use client";

import TextBox from "@/components/shared/TextBox";
import { socialMediaLinks } from "@/utils/data/footerData";
import Image from "next/image";
import Link from "next/link";
import { FormEvent } from "react";

interface contactDetailsProp {
  iconUrl: string;
  label: string[] | string;
}

const contactDetails: contactDetailsProp[] = [
  {
    iconUrl: "email",
    label: "info@buildsafeng.com",
  },
  {
    iconUrl: "telephone",
    label: "+234-9137879487",
  },
  {
    iconUrl: "location",
    label: [
      "17A Ajao Road, Off Ogunlana Drive, Surulere, Lagos",
      "Plot 107, Ahmadu Bello Way, Kado District, Abuja",
    ],
  },
  {
    iconUrl: "time",
    label: ["Working Hours", "Mon - Fri: 8AM - 5PM"],
  },
];

const Page = () => {
  const submitEnquiry = (e: FormEvent) => {
    e.preventDefault();

    // const formData = new FormData(e.target as HTMLFormElement);

    // const firstName = formData.get("firstName");
    // const lastName = formData.get("lastName");
    // const email = formData.get("email");
    // const phoneNumber = formData.get("phoneNumber");
    // const service = formData.get("service");
    // const details = formData.get("details");
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="container pt-7.5 lg:pt-15">
        <div className="flex flex-col gap-2 md:gap-4">
          <p className="heading-1">Contact Us</p>
          <p className="text-grey">
            We are here to help. Contact us for consultations, inquiries or
            partnership opportunities
          </p>
        </div>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-10">
        <div className="col-span-1 flex flex-col gap-4">
          {contactDetails.map(({ iconUrl, label }, idx) => (
            <div
              key={idx}
              className="bg-[#fcfcfd] border-[1.5px] border-[#f1f1f3] rounded-xl flex gap-3 items-center text-center p-3 "
            >
              <div className="relative flex items-center justify-center size-12 rounded-lg border-2 border-off-white bg-off-white cursor-pointer p-3 ">
                <span className="size-5 relative">
                  <Image
                    src={`/icons/${iconUrl}.png`}
                    alt={`${iconUrl}-icon`}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </span>
              </div>

              <p className="text-grey text-sm self-center content-center w-full">
                {Array.isArray(label) ? (
                  <span className="flex flex-col gap-1">
                    {label.map((label, idx) => (
                      <span key={idx}>{label}</span>
                    ))}
                  </span>
                ) : (
                  <span>{label}</span>
                )}
              </p>
            </div>
          ))}

          <div className="bg-[#fcfcfd] border-[1.5px] border-[#f1f1f3] rounded-xl flex gap-3 items-center justify-center p-3">
            {socialMediaLinks.map(({ href, label }, idx) => (
              <div
                key={idx}
                className="relative flex items-center justify-center size-12 rounded-lg border-2 border-off-white bg-off-white cursor-pointer transition hover:-translate-y-1 hover:duration-100"
              >
                <Link href={href} className="size-5 relative">
                  <Image
                    src={`/icons/${label}.png`}
                    alt={label}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2">
          <form onSubmit={submitEnquiry} className="flex flex-col gap-4">
            <div className="lg:grid grid-cols-2 gap-4">
              <TextBox
                label="First Name"
                name="firstName"
                placeholder="Enter First Name"
                required
              />
              <TextBox
                label="Last Name"
                name="lastName"
                placeholder="Enter last Name"
                required
              />
            </div>

            <div className="lg:grid grid-cols-2 gap-4">
              <TextBox
                label="Email"
                name="email"
                placeholder="Enter your Email"
                type="email"
                required
              />
              <TextBox
                label="Phone"
                name="phoneNumber"
                placeholder="Enter Phone Number"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="service"
                className="text-light-dark font-semibold"
              >
                Service Needed
              </label>

              <select name="service" className="input-box" required>
                <option disabled>
                  Select a service
                </option>
                <option value="Engineering Consultancy">
                  Engineering Consultancy
                </option>
                <option value="Project Management">Project Management</option>
                <option value="Reality Capture">Reality Capture</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="details"
                className="text-light-dark font-semibold"
              >
                Project Details
              </label>

              <textarea
                name="details"
                className="input-box "
                placeholder="Enter your project Details here..."
                required
                rows={6}
              ></textarea>
              <p className="text-sm text-right">Max 250 Chars</p>
            </div>

            <div className="flex justify-center ">
              <button type="submit" className="btn-primary w-full lg:max-w-40 custom-hover">
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <p className="container heading-2">Our Location</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.119968069096!2d3.3487341606542698!3d6.506494873333402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d136461957f%3A0x74e10ffb9d70a065!2sBuildsafe%20Ltd!5e0!3m2!1sen!2sng!4v1769380089995!5m2!1sen!2sng"
          width="600"
          height="450"
          className="w-full"
          style={{
            border: 0,
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Page;
