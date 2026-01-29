import ContactCard from "@/components/shared/ContactCard";
import ProjectCard from "@/components/shared/ProjectCard";
import { projects } from "@/utils/data/projectData";

const Page = () => {
  return (
    <>
      <section className="container pt-7.5 lg:pt-15 ">
        <div className="flex flex-col gap-10">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex flex-col gap-2 lg:gap-4"
          >
            <p className="heading-1">our projects</p>
            <p className="text-grey">
              Explore our Portfolio of Innovative engineering and consulting
              solutions.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-7"
          >
            {projects.map(({ header, description, scope, clientName }, idx) => (
              <ProjectCard
                key={idx}
                header={header}
                description={description}
                scope={scope}
                clientName={clientName}
              />
            ))}
          </div>
        </div>
      </section>
      <ContactCard
        header="Ready to bring your project to life with precision, safety, and efficiency?"
        description="Get in touch with us today."
      />
    </>
  );
};

export default Page;
