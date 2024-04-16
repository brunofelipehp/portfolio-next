"use client";
import { useModalContext } from "@/context/ModalProjectContext.";
import { useMenuBodyOverFlow } from "@/hooks/useMenuBodyOverflow";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { LuScreenShare } from "react-icons/lu";

interface ModalProps {
  moreInfo: boolean;
}

export default function ModalProjects({ moreInfo }: ModalProps) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const { openModal, setOpenModal } = useModalContext();

  function handleModal() {
    if (openModal == false) {
      setOpenModal(true);
    } else {
      setOpenModal(false);
    }
  }

  useMenuBodyOverFlow(openModal);

  return (
    <div
      className={`${
        openModal ? "fixed inset-0 z-50 flex  bg-back-modal" : "hidden"
      }`}
    >
      <div className="fixed top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 w-2/3 h-96  bg-zinc-800 rounded-lg p-5">
        <div className="flex justify-end">
          <IoClose
            size={32}
            className="text-purple-prime cursor-pointer"
            onClick={() => handleModal()}
          />
        </div>

        <div className=" flex  justify-around mt-5 gap-5">
          <Image
            className="w-[30rem] rounded-lg"
            src={"/assets/project-watch.jpeg"}
            alt="Foto sobre"
            width={200}
            height={200}
          />
          <div className="flex flex-col text-center mt-2">
            <div className="grid gap-3 mb-8">
              <h2> Titulo do Projeto</h2>
              <p>Construindo um relógio usando html, css e javascript</p>
            </div>

            <div className="flex gap-3 justify-center">
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
    </div>
  );
}
