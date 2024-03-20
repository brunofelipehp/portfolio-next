import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  return (
    <header className="w-full pl-6 pr-6 bg-black ">
      <div className="flex justify-between items-center md:ml-[15%] md:mr-[15%]">
        <div className="text-[3rem] font-medium text-purple-prime">
          Portfólio
        </div>
        <nav className="flex gap-8">
          <ul className="hidden lg:flex lg:items-center lg:gap-[3rem] lg:list-none ">
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
          <div className="lg:hidden">
            <RxHamburgerMenu size={24} />
          </div>
        </nav>
      </div>
    </header>
  );
}
