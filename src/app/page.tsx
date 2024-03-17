import Image from "next/image";

import profilePhoto from "../../public/assets/profile.jpg";
import aboutPhoto from "../../public/assets/Pro.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-[17rem]">
      <section className="flex justify-between items-center mt-40 w-9/12">
        <div>
          <h1 className="text-5xl">
            Olá eu sou<span className="text-purple-prime">Bruno Felipe</span>
          </h1>
          <h2 className="text-[2rem] font-medium mb-[2rem]">
            Desenvolvedor Front-end
          </h2>
          <button className="flex justify-center items-center flex-wrap gap-8 w-52 h-14 p-6 border-none rounded-lg font-medium bg-purple-prime text-center text-white transition-all ease-in-out duration-300 cursor-pointer hover:opacity-80">
            Currículo
          </button>
        </div>
        <Image
          className="rounded-2xl"
          src={profilePhoto}
          alt=""
          width={400}
          height={300}
        />
      </section>

      <section className="flex flex-col  items-center">
        <h2 className="text-[7rem] text-center mb-20">Sobre</h2>
        <div className="flex justify-center items-center gap-32 bg-zinc-900  w-9/12 h-[40rem] p-20 rounded-xl ">
          <Image src={aboutPhoto} alt="Foto sobre" width={400} height={500} />
          <div className="w-[60rem] text-center">
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
    </main>
  );
}
