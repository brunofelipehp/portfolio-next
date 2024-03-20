"use client";
import { iconsData } from "@/utils/techs";
import { FaHtml5 } from "react-icons/fa";
import { IconTechs } from "./IconsTechs";
import { useState } from "react";

interface IconsProps {
  id: number;
}

export default function Tecnologies() {
  const icons = iconsData;

  const [techText, setTechText] = useState<string>(
    "*passe o cursor do mouse no card para ler*"
  );
  const [techTitle, setTechTitle] = useState<string>("");

  const handleInfoTech = ({ id }: IconsProps) => {
    icons.filter((icon) => {
      if (icon.id === id) {
        setTechText(icon.text);
        setTechTitle(icon.title);
      }
    });
  };

  const hideInfoTech = () => {
    setTechText("*passe o cursor do mouse no card para ler*");
    setTechTitle("");
  };

  return (
    <section>
      <h2 className="text-4xl md:text-title-section text-center mb-7">
        Tecnologias
      </h2>
      <div className="flex justify-center gap-24">
        <div className="flex flex-wrap justify-center max-w-60 md:max-w-[31.3rem] gap-3">
          {icons.map((icon) => (
            <div
              key={icon.id}
              className="md:w-32 md:h-32 w-16 h-16 grid place-content-center  rounded-xl mb-3 bg-[#151515] hover:border-purple-prime hover:border"
              onMouseOver={() => handleInfoTech(icon)}
              onMouseOut={() => hideInfoTech()}
            >
              {<IconTechs iconName={icon.icon} size="3rem" color="#986dff" />}
            </div>
          ))}
        </div>

        <div className="hidden md:w-[31.3rem] md:h-[25rem] md:rounded-xl md:text-center">
          <h3 className=" font-bold transition-all duration-300 ease-in text-center">
            {techTitle}
          </h3>
          <p className="opacity-70 transition-all duration-300 ease-in">
            {techText}
          </p>
        </div>
      </div>
    </section>
  );
}
