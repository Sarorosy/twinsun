import React, { createContext, useCallback, useEffect, useState } from "react";
import BookaCall from "../components/BookaCall";

export const CallModalContext = createContext({
  isOpen: false,
  open: () => {},
  close: () => {},
});

export const CallModalProvider = ({ children, autoOpenMs = 15000 }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!autoOpenMs) return;
    const t = setTimeout(() => setIsOpen(true), autoOpenMs);
    return () => clearTimeout(t);
  }, [autoOpenMs]);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <CallModalContext.Provider value={{ isOpen, open, close }}>
      {children}
      <BookaCall isOpen={isOpen} onClose={close} />
    </CallModalContext.Provider>
  );
};

export default CallModalProvider;
