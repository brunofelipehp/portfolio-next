import { useEffect } from "react";

export const useMenuBodyOverFlow = (isOpen: boolean) => {
  useEffect(() => {
    const body = document.body;

    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "visible";
    }

    return () => {
      body.style.overflow = "unset";
    };
  }, [isOpen]);
};
