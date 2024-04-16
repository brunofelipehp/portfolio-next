import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export interface ModalProjectsProps {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const ModalContext = createContext<ModalProjectsProps>({
  openModal: false,
  setOpenModal: (): boolean => false,
});

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
