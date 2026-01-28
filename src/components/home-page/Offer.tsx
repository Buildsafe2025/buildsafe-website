import { offerProp } from '@/interfaces/interface';
import React from 'react'
import CountUp from 'react-countup'

const Offer = () => {
    const offers: offerProp[] = [
    {
      label: "years of experience",
      number: 12,
    },
    {
      label: "project completed",
      number: 347,
    },
    {
      label: "year founded",
      number: "2013",
    },
  ];
  return (
    <section className="pt-16 md:pt-32">
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="bg-linear-to-r from-white from-5% via-grey/8 via-50% to-white to-99% "
        >
          <div className="container py-8 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-x-3 gap-y-10">
              <div className="flex flex-col items-center">
                <p>SOME NUMBERS</p>
                <p className="heading-2 text-center max-w-50">
                  What We Have Done So Far
                </p>
              </div>

              {offers.map(({ label, number }, idx) => (
                <div key={idx} className="flex flex-col gap-1 items-center">
                  {idx !== offers.length - 1 ? (
                    <CountUp
                      enableScrollSpy
                      className="heading-2"
                      end={Number(number)}
                      suffix="+"
                    />
                  ) : (
                    <p className="heading-2">{number}</p>
                  )}

                  <p className="capitalize">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}

export default Offer