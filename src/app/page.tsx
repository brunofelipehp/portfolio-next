import Image from "next/image";

import profilePhoto from "../../public/assets/profile-x.jpeg";
import aboutPhoto from "../../public/assets/Pro.png";
import project from "../../public/assets/project-watch.jpeg";
import Link from "next/link";

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
          className="rounded-full border-[2px] border-purple-prime"
          src={profilePhoto}
          alt=""
          width={400}
          height={400}
        />
      </section>

      <section className="flex flex-col  items-center">
        <h2 className="text-title-section text-center mb-7">Sobre</h2>
        <div className="flex justify-center items-center gap-32 bg-zinc-900  w-9/12 h-[40rem] p-20 rounded-xl ">
          <Image src={aboutPhoto} alt="Foto sobre" width={400} height={500} />
          <div className="w-[60rem] text-center text-[1.08rem]">
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

      <section>
        <h2 className="text-title-section text-center mb-7">Projetos</h2>
        <div className="grid grid-cols-3 gap-x-24">
          <div className="w-80 h-60 grid place-content-center text-center rounded-t-xl relative transform duration-500 ease-in-out hover:transform hover:scale-150 group">
            <Image
              className="max-w-full h-full opacity-50 transition-all duration-700 rounded-xl  hover:rounded-none delay-300 relative block"
              src={project}
              alt="Foto sobre"
            />
            <p className="absolute  top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 inline-block text-xs">
              Watch
            </p>
            <div className="flex justify-center gap-4">
              <Link
                className="absolute top-[65%] left-2/4 -translate-x-2/4 -translate-y-2/4  w-1/3 text-xs bg-purple-prime p-1 rounded-2xl opacity-0 cursor-pointer transition-all duration-700 ease-in-out group-hover:opacity-100"
                href="#"
              >
                veja mais
              </Link>
            </div>
            <div className=" inset-x-0 bottom-0 w-full h-0.5 bg-purple-prime transition-all duration-700 transform scale-x-0 group-hover:scale-x-100"></div>
          </div>

          <div className="w-80 h-60 grid place-content-center text-center rounded-t-xl relative transform duration-500 ease-in-out hover:transform hover:scale-150 group">
            <Image
              className="max-w-full h-full opacity-50 transition-all duration-700 rounded-xl  hover:rounded-none delay-300 relative block"
              src={project}
              alt="Foto sobre"
            />
            <p className="absolute  top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 inline-block text-xs">
              Watch
            </p>
            <div className="flex justify-center gap-4">
              <Link
                className="absolute top-[65%] left-2/4 -translate-x-2/4 -translate-y-2/4  w-1/3 text-xs bg-purple-prime p-1 rounded-2xl opacity-0 cursor-pointer transition-all duration-700 ease-in-out group-hover:opacity-100"
                href="#"
              >
                veja mais
              </Link>
            </div>
            <div className=" inset-x-0 bottom-0 w-full h-0.5 bg-purple-prime transition-all duration-700 transform scale-x-0 group-hover:scale-x-100"></div>
          </div>

          <div className="w-80 h-60 grid place-content-center text-center rounded-t-xl relative transform duration-500 ease-in-out hover:transform hover:scale-150 group">
            <Image
              className="max-w-full h-full opacity-50 transition-all duration-700 rounded-xl  hover:rounded-none delay-300 relative block"
              src={project}
              alt="Foto sobre"
            />
            <p className="absolute  top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 inline-block text-xs">
              Watch
            </p>
            <div className="flex justify-center gap-4">
              <Link
                className="absolute top-[65%] left-2/4 -translate-x-2/4 -translate-y-2/4  w-1/3 text-xs bg-purple-prime p-1 rounded-2xl opacity-0 cursor-pointer transition-all duration-700 ease-in-out group-hover:opacity-100"
                href="#"
              >
                veja mais
              </Link>
            </div>
            <div className=" inset-x-0 bottom-0 w-full h-0.5 bg-purple-prime transition-all duration-700 transform scale-x-0 group-hover:scale-x-100"></div>
          </div>

          <div className="w-80 h-60 grid place-content-center text-center rounded-t-xl relative transform duration-500 ease-in-out hover:transform hover:scale-150 group">
            <Image
              className="max-w-full h-full opacity-50 transition-all duration-700 rounded-xl  hover:rounded-none delay-300 relative block"
              src={project}
              alt="Foto sobre"
            />
            <p className="absolute  top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 inline-block text-xs">
              Watch
            </p>
            <div className="flex justify-center gap-4">
              <Link
                className="absolute top-[65%] left-2/4 -translate-x-2/4 -translate-y-2/4  w-1/3 text-xs bg-purple-prime p-1 rounded-2xl opacity-0 cursor-pointer transition-all duration-700 ease-in-out group-hover:opacity-100"
                href="#"
              >
                veja mais
              </Link>
            </div>
            <div className=" inset-x-0 bottom-0 w-full h-0.5 bg-purple-prime transition-all duration-700 transform scale-x-0 group-hover:scale-x-100"></div>
          </div>

          <div className="w-80 h-60 grid place-content-center text-center rounded-t-xl relative transform duration-500 ease-in-out hover:transform hover:scale-150 group">
            <Image
              className="max-w-full h-full opacity-50 transition-all duration-700 rounded-xl  hover:rounded-none delay-300 relative block"
              src={project}
              alt="Foto sobre"
            />
            <p className="absolute  top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 inline-block text-xs">
              Watch
            </p>
            <div className="flex justify-center gap-4">
              <Link
                className="absolute top-[65%] left-2/4 -translate-x-2/4 -translate-y-2/4  w-1/3 text-xs bg-purple-prime p-1 rounded-2xl opacity-0 cursor-pointer transition-all duration-700 ease-in-out group-hover:opacity-100"
                href="#"
              >
                veja mais
              </Link>
            </div>
            <div className=" inset-x-0 bottom-0 w-full h-0.5 bg-purple-prime transition-all duration-700 transform scale-x-0 group-hover:scale-x-100"></div>
          </div>

          <div className="w-80 h-60 grid place-content-center text-center rounded-t-xl relative transform duration-500 ease-in-out hover:transform hover:scale-150 group">
            <Image
              className="max-w-full h-full opacity-50 transition-all duration-700 rounded-xl  hover:rounded-none delay-300 relative block"
              src={project}
              alt="Foto sobre"
            />
            <p className="absolute  top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 inline-block text-xs">
              Watch
            </p>
            <div className="flex justify-center gap-4">
              <Link
                className="absolute top-[65%] left-2/4 -translate-x-2/4 -translate-y-2/4  w-1/3 text-xs bg-purple-prime p-1 rounded-2xl opacity-0 cursor-pointer transition-all duration-700 ease-in-out group-hover:opacity-100"
                href="#"
              >
                veja mais
              </Link>
            </div>
            <div className=" inset-x-0 bottom-0 w-full h-0.5 bg-purple-prime transition-all duration-700 transform scale-x-0 group-hover:scale-x-100"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
