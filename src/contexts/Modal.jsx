import React, { useContext, useState } from "react";
import { createContext } from "react";

const ModalContext = createContext();

function ModalProvider({ children }) {
  const [modalIsOpen, setModalOpen] = useState(false);

  return (
    <>
      <ModalContext.Provider value={{ modalIsOpen, setModalOpen }}>
        {children}
      </ModalContext.Provider>
    </>
  );
}

export const useModal = () => {
  const { modalIsOpen, setModalOpen } = useContext(ModalContext);
  return { modalIsOpen, setModalOpen };
};
export { ModalProvider };
