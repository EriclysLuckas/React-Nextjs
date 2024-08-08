import { createContext } from "react";
import Utils from "../hooks/Utils";

export const BaseContext = createContext()

// eslint-disable-next-line react/prop-types
export const BaseProvider = ({ children }) => {
  const base = Utils()

  return <BaseContext.Provider value={base}>{children}</BaseContext.Provider>
}

