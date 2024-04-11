"use client";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { MenuMobile } from "./MenuMobile";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      className="w-full pl-6 pr-6 bg-black absolute top-0"
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center md:ml-[15%] md:mr-[15%]">
        <div className="text-[3rem] font-medium text-purple-prime">
          Portfólio
        </div>
        <nav className="flex gap-8">
          <ul className="hidden xl:flex xl:items-center xl:gap-[3rem] xl:list-none ">
            <li className="text-decoration-none">
              <Link
                className="relative inline-block cursor-pointer hover:text-purple-prime transition-all duration-500 group"
                href="/"
              >
                Home
                <div className="absolute inset-x-0 bottom-0 w-full h-0.5 bg-purple-prime transition-all duration-500 transform scale-x-0 group-hover:scale-x-100"></div>
              </Link>
            </li>
            <li className="text-decoration-none">
              <Link
                className="relative inline-block cursor-pointer hover:text-purple-prime transition-all duration-500 group"
                href="/"
              >
                Sobre
                <div className="absolute inset-x-0 bottom-0 w-full h-0.5 bg-purple-prime transition-all duration-500 transform scale-x-0 group-hover:scale-x-100"></div>
              </Link>
            </li>
            <li className="">
              <Link
                className="relative inline-block cursor-pointer hover:text-purple-prime transition-all duration-500 group"
                href="/"
              >
                Projetos
                <div className="absolute inset-x-0 bottom-0 w-full h-0.5 bg-purple-prime transition-all duration-500 transform scale-x-0 group-hover:scale-x-100"></div>
              </Link>
            </li>
            <li className="">
              <Link
                className="relative inline-block cursor-pointer hover:text-purple-prime transition-all duration-500 group"
                href="/"
              >
                Tecnologias
                <div className="absolute inset-x-0 bottom-0 w-full h-0.5 bg-purple-prime transition-all duration-500 transform scale-x-0 group-hover:scale-x-100"></div>
              </Link>
            </li>
          </ul>

          <MenuMobile />
        </nav>
      </div>
    </motion.header>
  );
}
