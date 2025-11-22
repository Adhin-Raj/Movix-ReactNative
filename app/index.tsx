import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import OnBoardingScreen from "./OnBoarding";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import ChangaOne from "@/assets/fonts/ChangaOne-Regular.ttf";
import GeneralSans from '@/assets/fonts/sans-semibold.ttf'

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [loaded, error] = useFonts({
    changaOne: ChangaOne,
    GeneralSans:GeneralSans
  });

  useEffect(() => {
    if (error || loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <StatusBar />

      <OnBoardingScreen />
    </SafeAreaView>
  );
}
