import React from "react";
export const HomeContext = React.createContext();

export function HomeContextProvider({ children }) {
  <HomeContext.Provider value={{}}>{children}</HomeContext.Provider>;
}
