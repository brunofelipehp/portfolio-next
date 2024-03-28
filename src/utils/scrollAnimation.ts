export const handleScrollAnimation = () => {
  // console.log("Ola");
  const sectionTop = (idBox: string) => {
    const section = document.querySelector<HTMLElement>(idBox);
    return section instanceof HTMLElement ? section.offsetTop : 0;
  };

  const animateSections = (idSection: string) => {
    const section = document.querySelector<HTMLElement>(idSection);

    if (!(section instanceof HTMLElement)) return;

    const documentTop = window.scrollY || document.documentElement.scrollTop;

    const sectionOffset = sectionTop(idSection) + 120;

    if (documentTop > sectionOffset) {
      section.classList.add("animar");
    } else {
      section.classList.remove("animar");
    }
  };

  animateSections("#profile");
  animateSections("#about");
  animateSections("#projects");
  animateSections("#techs");
};
