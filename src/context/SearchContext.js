import { createContext, useState } from "react";

export const SearchContextValue = createContext();

export const SearchContext = ({ children }) => {
  const [search, setSearch] = useState("");

  return (
    <SearchContextValue.Provider value={{ search, setSearch }}>
      {children}
    </SearchContextValue.Provider>
  );
};
