import { MovieType } from "@/components/molecule/Card";
import { ReactNode, useState } from "react";
import { MovieContext } from "./MovieContext";

interface MovieProviderProps {
  children: ReactNode;
}

export const MovieProvider = ({ children }: MovieProviderProps) => {
  const [data, setData] = useState<MovieType | undefined>();
  return (
    <MovieContext.Provider value={{ data, setData }}>
      {children}
    </MovieContext.Provider>
  );
};
