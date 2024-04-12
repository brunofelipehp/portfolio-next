import { iconsData } from "@/utils/techs";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { LuScreenShare } from "react-icons/lu";
import { IconTechs } from "./IconsTechs";

interface ModalProps {
  moreInfo: boolean;
}

export default function ModalProjects({ moreInfo }: ModalProps) {
  const techs = ["CSS", "JavaScript", "TypeScript"];

  const dataIcons = iconsData.map((items) => items);

  //console.log(dataIcons);

  const iconProject = dataIcons.filter((item: any) =>
    techs.includes(item.title)
  );

  console.log(iconProject);

  return (
    <div
      className={`${
        moreInfo ? "fixed inset-0 z-50 flex  bg-back-modal " : "hidden"
      }`}
    >
      <div className="fixed top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 w-2/5 max-h-fit bg-zinc-800 rounded-lg p-5">
        <div className="flex justify-end">
          <IoClose size={32} className="text-purple-prime cursor-pointer" />
        </div>
        <div className=" flex flex-col justify-center items-center gap-5">
          <h2> Titulo do Projeto</h2>
          <Image
            className="w-[30rem] rounded-lg"
            src={"/assets/project-watch.jpeg"}
            alt="Foto sobre"
            width={200}
            height={200}
          />
          <h3>Descrição</h3>
          <p>Construindo um relógio usando html, css e javascript</p>
          <div className="flex gap-3">
            {iconProject.map((icon) => (
              <IconTechs
                key={icon.id}
                iconName={icon.icon}
                size="2rem"
                color="#986dff"
              />
            ))}
          </div>
          <div className="flex gap-3">
            <Link
              className="bg-purple-prime p-2 rounded-lg flex gap-2 items-center hover:opacity-80"
              href="https://brunofelipehp.github.io/watch/"
              target="_blank"
            >
              <LuScreenShare />
              Projeto
            </Link>
            <Link
              className="bg-purple-prime p-2 rounded-lg flex gap-2 items-center hover:opacity-80"
              href={"https://github.com/brunofelipehp/watch"}
              target="_blank"
            >
              <FaGithub />
              Github
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
