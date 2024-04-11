"use client";
import { iconsData } from "@/utils/techs";
import { FaHtml5 } from "react-icons/fa";
import { IconTechs } from "./IconsTechs";
import { useState } from "react";
import { motion } from "framer-motion";

interface IconsProps {
  id: number;
}

export default function Tecnologies() {
  const icons = iconsData;

  const animContainer = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const animItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

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
    <motion.section
      id="techs"
      initial={{ opacity: 0, y: 200, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 200, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl mb-7 text-center md:text-title-section md:text-center  sm:mb-24">
        Tecnologias
      </h2>
      <div className="flex justify-center gap-24">
        <motion.div className="flex flex-wrap justify-center max-w-72 md:max-w-[31.3rem] gap-3">
          {icons.map((icon) => (
            <motion.div
              key={icon.id}
              className="md:w-32 md:h-32 w-24 h-24 grid place-content-center  rounded-xl mb-3 bg-[#151515] hover:border-purple-prime hover:border"
              onMouseOver={() => handleInfoTech(icon)}
              onMouseOut={() => hideInfoTech()}
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  <IconTechs iconName={icon.icon} size="3rem" color="#986dff" />
                </motion.div>
              }
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="hidden xl:flex xl:flex-col xl:w-[31.3rem] xl:h-[25rem] xl:rounded-xl xl:text-center"
          initial={{ opacity: 0, x: +200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className=" font-bold transition-all duration-300 ease-in text-center">
            {techTitle}
          </h3>
          <p className="opacity-70 transition-all duration-300 ease-in">
            {techText}
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
