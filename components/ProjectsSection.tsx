import React from "react"
import Image from "next/image"
import Link from "next/link"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import SlideUp from "./SlideUp"

const projects = [
  {
    name: "Consultant en cybersécurité chez ",
    company: "Blablacar",
    companylink: "https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit",
    description_mission: "Mission ",
    location: "Lyon, France",
    image: "/splunk.png",
    date: "",
    duration: "",
    skills: "",
    
    
  },
  {
    name: "Enseignant powershell - TheNumFactory",
    company: "",
    companylink: "",
    description_mission:  "PlatoIO is a to do list app that built using the PERN stack.",
    location: "Lyon, France",
    image: "/powershell.png",
    date: "",
    
  },
  {
    name: "Analyste en cybersécurité  ",
    company: "",
    companylink: "",
    description_mission:  "PlatoIO is a to do list app that built using the PERN stack.",
    location: "Lyon, France",
    image: "/powershell.png",
    date: "",
    
  },
  {
    name: "Kator Family Photos",
    description:
      "Kator Family Photos is a photos and video digitization service in the LA area.",
    image: "/familyphotos.png",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://katorfamilyphotos.com/",
  },
]


const ProjectsSection = () => {
  return (
    <section id="projects">
       <h1 className="text-center font-bold text-4xl">
        Projects
       <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
       </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
              <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                <div className="mt-8 md:w-1/2">
                  <Link href={project.companylink || ""} target="_blank">
                    <Image
                              src={project.image}
                              alt=""
                              width={1000}
                              height={1000}
                              className="rounded-xl shadow-xl hover:opacity-70"
                            />
                  </Link>
                </div>
                <div className="mt-12 md:w-1/2">
                  <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <div className="flex flex-row align-bottom space-x-4">
                    <Link href={project.companylink || ""} target="_blank">See company</Link>
                  </div>
                </div>  
              </div>
              </SlideUp>
          </div>
        )    
      })}
      </div>
    </section>
  )
}

export default ProjectsSection