import Image from 'next/image'
import heroImg from "@public/images/hero-img.png";
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative md:min-h-screen h-full py-30 md:py-0 flex md:items-center">
        <Image src={heroImg} fill alt="Hero Image" className='bg-contain' />

        <div className="container h-full flex md:items-center relative">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="max-w-130 w-full flex flex-col gap-6"
          >
            <h1 className="heading-1">
              Expert In Building and Engineering Consultancy
            </h1>
            <p className='text-sm md:text-base'>
              Delivering top-tier engineering consultancy, project management,
              and reality capture services across Nigeria, with a commitment to
              quality, safety, and excellence.
            </p>
            <Link href={"/service"}>
              <button className="bg-primary text-white rounded-xl flex items-center gap-2 py-1.5 px-2.5 text-xs md:text-sm custom-hover">
                <span>Explore Services</span>
                <span className="rounded-full px-1 text-lg bg-white text-primary">
                  &rarr;
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>
  )
}

export default Hero