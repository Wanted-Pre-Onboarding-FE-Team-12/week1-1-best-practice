import React, { useState } from 'react';

const ModalContext = React.createContext({
  modalOpen: false,
  setModalOpen: () => {},
  updateMode: false,
  setUpdateMode: () => {},
});

export const ModalContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdateMode, setIsUpdateMode] = useState(false);

  const contextValue = {
    modalOpen: isOpen,
    setModalOpen: setIsOpen,
    updateMode: isUpdateMode,
    setUpdateMode: setIsUpdateMode,
  };
  return <ModalContext.Provider value={contextValue}>{children}</ModalContext.Provider>;
};

export default ModalContext;
