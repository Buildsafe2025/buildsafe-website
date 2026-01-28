import Link from 'next/link'
import React from 'react'
import ProjectCard from '../shared/ProjectCard'
import { projects } from '@/utils/data/projectData'

const Project = () => {
  return (
     <section className=" container pt-16 lg:pt-32">
        <div
          data-aos="fade-up"
          data-aos-duration="1100"
          className=" flex flex-col gap-3"
        >
          <div className="flex justify-between">
            <p className="heading-2">Projects</p>
            <Link href={"/projects"} className="btn-secondary">
              view all <span className='hidden md:inline-flex'>projects</span>
            </Link>
          </div>
          <p className="w-full max-w-130 text-off-grey">
            We provide comprehensive construction and engineering services with
            the highest standards of quality
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-7">
            {projects
              .slice(0, 3)
              .map(({ header, description, clientName, scope }, i) => (
                <ProjectCard
                  key={i}
                  header={header}
                  description={description}
                  clientName={clientName}
                  scope={scope}
                />
              ))}
          </div>
        </div>
      </section>
  )
}

export default Project