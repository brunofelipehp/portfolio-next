"use client";
import Image from "next/image";

import profilePhoto from "../../../public/assets/profile-x.jpeg";
import aboutPhoto from "../../../public/assets/Pro.png";
import Projects from "@/components/Projects";
import Tecnologies from "@/components/Techs";
import { BsFileEarmarkArrowDown } from "react-icons/bs";
import { useEffect } from "react";
import { handleScrollAnimation } from "@/utils/scrollAnimation";

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      handleScrollAnimation();
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section
        id="profile"
        className="flex flex-wrap-reverse  md:flex md:justify-between md:items-center md:mt-40 md:w-9/12"
      >
        <div>
          <h1 className="mt-14 text-lg md:text-5xl md:font-bold">
            Olá eu sou <span className="text-purple-prime">Bruno Felipe</span>
          </h1>
          <h2 className="text-sm mb-[2rem] md:text-[1.5rem] md:font-medium md:mb-[2rem]">
            Desenvolvedor Front-end
          </h2>
          <button className="flex justify-center items-center flex-wrap gap-3 w-48 h-14 p-5 border-none rounded-full font-medium bg-purple-prime text-center text-white transition-all ease-in-out duration-300 cursor-pointer hover:opacity-80">
            Download CV
            <BsFileEarmarkArrowDown size="1.2rem" color="#fff" />
          </button>
        </div>
        <Image
          className="rounded-lg border-[2px] "
          src={profilePhoto}
          alt=""
          width={400}
          height={400}
        />
      </section>

      <section id="about" className="flex flex-col  items-center">
        <h2 className="text-4xl mb-7 md:text-title-section text-center sm:mb-24">
          Sobre
        </h2>
        <div className="flex flex-wrap md:flex md:flex-nowrap md:justify-center md:items-center md:gap-32 md:bg-zinc-900  md:w-9/12 md:h-[40rem] md:p-20 md:rounded-md ">
          <Image src={aboutPhoto} alt="Foto sobre" width={400} height={500} />
          <div className="text-center text-base font-thin flex flex-col gap-1 md:w-[60rem] md:text-center md:text-[1.08rem]">
            <p>
              Olá! Sou Bruno Felipe, um desenvolvedor front-end apaixonado por
              tecnologia e criação. Estou sempre em busca de novas habilidades e
              tecnologias para aprimorar minhas capacidades.
            </p>
            <p>
              Com experiência em HTML, CSS, JavaScript, React e TypeScript,
              estou preparado para enfrentar desafios de desenvolvimento web de
              forma criativa e eficiente.
            </p>
            <p>
              Estou aberto a colaborações e ansioso para aprender com outros
              profissionais. Seja para otimizar o desempenho de um site ou
              solucionar problemas complexos, estou pronto para contribuir de
              forma dedicada.
            </p>
          </div>
        </div>
      </section>
      <Projects />

      <Tecnologies />
    </>
  );
}
