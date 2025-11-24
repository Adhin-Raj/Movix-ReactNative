import { MovieType } from "@/components/molecule/Card";
import { createContext } from "react";

interface MovieContextType {
  data: MovieType | undefined;
  setData: (data: MovieType) => void;
}

export const MovieContext = createContext<MovieContextType>({
  data: undefined,
  setData: () => {},
});
