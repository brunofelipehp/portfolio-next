interface IconData {
  id: number;
  icon: string;
  title: string;
  text: string;
}

export const icons: IconData[] = [
  {
    id: 1,
    icon: "FaHtml5",
    title: "HTML 5",
    text: "HTML é uma linguagem de marcação, onde marcamos os elementos para definir quais informações a página vai exibir.",
  },
  {
    id: 2,
    icon: "FaCss3",
    title: "CSS",
    text: "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas.",
  },
  {
    id: 3,
    icon: "SiJavascript",
    title: "JavaScript",
    text: "JavaScript é uma linguagem de programação que permite a você implementar elementos dinâmicos em páginas web.",
  },
  {
    id: 4,
    icon: "SiTypescript",
    title: "TypeScript",
    text: "TypeScript é um superset do JavaScript que adiciona tipagem estática ao código, melhorando a segurança e a qualidade do desenvolvimento.",
  },
  {
    id: 5,
    icon: "SiReact",
    title: "React JS",
    text: "React é uma biblioteca JavaScript com foco em criar interfaces de usuário de forma componetizada.",
  },
  {
    id: 6,
    icon: "SiStyledcomponents",
    title: "styled-components",
    text: "styled-components é uma biblioteca que utiliza o conceito de CSS-in-JS, ou seja, que nos permite escrever códigos CSS dentro do Javascript.",
  },
  {
    id: 7,
    icon: "FaGithub",
    title: "Github",
    text: "O GitHub é uma plataforma para armazenar e colaborar em projetos de software usando controle de versão.",
  },
];
