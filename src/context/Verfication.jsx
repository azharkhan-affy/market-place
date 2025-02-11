/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const VerficationContext = createContext(null);

export const VerificationProvider = ({ children }) => {
  const [type, setType] = useState(localStorage.getItem("type") || "");
  return (
    <VerficationContext.Provider value={{ type, setType }}>
      {children}
    </VerficationContext.Provider>
  );
};
