import Link from 'next/link'
import React from 'react'

const Description = () => {
  return (
    <section className="container pt-16 lg:pt-32">
        <div
          data-aos="fade-up"
          data-aos-duration="1100"
          className="grid grid-cols-1 lg:grid-cols-6 gap-y-5"
        >
          <div className="lg:col-span-2 content-center">
            <p className="heading-2">
              Innovative Solutions, Exceptional Results
            </p>
          </div>

          <div className="font-montserrat lg:col-start-3 lg:col-span-4 flex flex-col gap-6">
            <p className="leading-[160%] tracking-normal text-lg md:text-xl text-justify">
              BuildSafe Nigeria Ltd (BNL) is a leading indigenous engineering
              consultancy, project management, and reality capture service
              provider in Nigeria. In pursuit of excellence, we consistently
              deliver services that meet and exceed customer expectations while
              complying with all applicable statutory and regulatory
              requirements.
            </p>

            <div>
              <Link href={"/projects"}>
                {" "}
                <button className="btn-primary custom-hover">
                  Learn More
                </button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Description