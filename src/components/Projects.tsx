"use client";
import { projectData } from "@/utils/projects";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = projectData;
  console.log();

  return (
    <motion.section
      id="projects"
      className="origin-center"
      initial={{ opacity: 0, y: 200, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 200, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl mb-7 md:text-title-section text-center sm:mb-24">
        Projetos
      </h2>
      <div className="md:grid md:grid-cols-3 md:gap-x-24">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-80 h-60 grid place-content-center text-center rounded-t-xl relative transform duration-500 ease-in-out hover:transform md:hover:scale-150 group"
          >
            <Image
              src={project.url}
              alt="Foto sobre"
              width={500}
              height={500}
              sizes="(max-width: 30px) 10vw, (max-width: 1200px) 50vw, 33vw"
              className="max-w-full md:max-w-full md:h-full md:opacity-50 md:transition-all md:duration-700 rounded-xl  md:hover:rounded-none md:delay-300 md:relative md:block"
            />
            <p className="hidden md:absolute  md:top-2/4 md:left-2/4 md:-translate-x-2/4 md:-translate-y-2/4 md:inline-block md:text-xs">
              {project.name}
            </p>
            <div className="flex justify-center gap-4">
              <Link
                className="max-[640px]:hidden  md:absolute md:top-[65%] md:left-2/4 md:-translate-x-2/4 md:-translate-y-2/4  md:w-1/3 md:text-xs md:bg-purple-prime md:p-1 md:rounded-2xl md:opacity-0 md:cursor-pointer md:transition-all md:duration-700 md:ease-in-out md:group-hover:opacity-100"
                href=""
              >
                veja mais
              </Link>

              <Link
                className="sm:hidden w-32 mt-8 mb-8 text-xs bg-purple-prime p-2 rounded-md  cursor-pointer md:transition-all duration-700 md:ease-in-out"
                href=""
              >
                veja mais
              </Link>
            </div>
            <div className=" md:inset-x-0 md:bottom-0 md:w-full md:h-0.5 md:bg-purple-prime md:transition-all md:duration-700 md:transform md:scale-x-0 md:group-hover:scale-x-100"></div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
