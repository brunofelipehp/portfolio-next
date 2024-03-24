"use client";
import { useMenuBodyOverFlow } from "@/hooks/useMenuBodyOverflow";
import Link from "next/link";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

export function MenuMobile() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  function handleMenu() {
    if (openMenu == false) {
      setOpenMenu(true);
    } else {
      setOpenMenu(false);
    }
  }

  useMenuBodyOverFlow(openMenu);

  return (
    <div className="lg:hidden" onClick={() => handleMenu()}>
      <div className="text-purple-prime ">
        {openMenu ? (
          <IoClose size={32} className="text-purple-prime " />
        ) : (
          <RxHamburgerMenu size={32} className="text-purple-prime" />
        )}
      </div>

      <nav
        className={`${
          openMenu
            ? "absolute  h-screen  w-full z-50 top-16 left-[0%]   transition-all ease-in backdrop-blur-lg  border-zinc-950 bg-[rgba(27,27,27,0.65)]  duration-500 opacity-90"
            : "transition-all -top-full left-[0%] duration-500 hidden opacity-0"
        }`}
      >
        <ul className="flex flex-col  h-screen items-center mt-32 text-[2rem]   list-none">
          <li className="text-decoration-none text-white font-bold border-b  p-5">
            <Link
              className="relative  ml-4 inline-block cursor-pointer hover:text-purple-prime transition-all duration-500 group"
              href="/"
            >
              Home
              <div className="absolute inset-x-0 bottom-0 w-full h-0.5 bg-purple-prime transition-all duration-500 transform scale-x-0 group-hover:scale-x-100"></div>
            </Link>
          </li>
          <li className="text-decoration-none text-white font-bold border-b  p-5">
            <Link
              className="relative ml-4 inline-block cursor-pointer hover:text-purple-prime transition-all duration-500 group"
              href="/"
            >
              Sobre
              <div className="absolute inset-x-0 bottom-0 w-full h-0.5 bg-purple-prime transition-all duration-500 transform scale-x-0 group-hover:scale-x-100"></div>
            </Link>
          </li>
          <li className="text-decoration-none text-white font-bold border-b  p-5">
            <Link
              className="relative ml-4 inline-block cursor-pointer hover:text-purple-prime transition-all duration-500 group"
              href="/"
            >
              Projetos
              <div className="absolute inset-x-0 bottom-0 w-full h-0.5 bg-purple-prime transition-all duration-500 transform scale-x-0 group-hover:scale-x-100"></div>
            </Link>
          </li>
          <li className="text-decoration-none text-white font-bold border-b p-5">
            <Link
              className="relative ml-4 inline-block cursor-pointer hover:text-purple-prime transition-all duration-500 group"
              href="/"
            >
              Tecnologias
              <div className="absolute inset-x-0 bottom-0 w-full h-0.5 bg-purple-prime transition-all duration-500 transform scale-x-0 group-hover:scale-x-100"></div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
