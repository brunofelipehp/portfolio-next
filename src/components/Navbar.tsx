import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full pl-6 pr-6 bg-black ">
      <div className="flex justify-between items-center ml-[15%] mr-[15%]">
        <div className="text-[4rem] font-medium text-purple-prime">
          Portfólio
        </div>
        <nav>
          <ul className="flex items-center gap-[3rem] list-none">
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
        </nav>
      </div>
    </header>
  );
}
