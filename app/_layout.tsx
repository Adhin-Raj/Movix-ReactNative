import { MovieProvider } from "@/context/MovieContextProvider";
import { Stack } from "expo-router";

export default function RootLayout() {
  return(
    <MovieProvider>
      <Stack  screenOptions={{headerShown:false}}/>
    </MovieProvider>
  );
}
