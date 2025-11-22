import CustomButton from "@/components/atom/CustomButton";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function OnBoardingScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("@/assets/images/bg.png")} />
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>MoviX</Text>
        <Text style={styles.description}>
          No matter what your mood or preference,MoviX has the perfect movie or
          show to match.
        </Text>
        <CustomButton
          btnLabel="Get Started"
          ctaType="primary"
          handlePress={() => router.push("/Home")}
          customBtnStyle={styles.ctaBtn}
          customTextStyle={styles.ctaBtnLabel}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  img: {
    position: "relative",
    top: -40,
    right: 10,
    opacity: 0.7,
  },
  contentWrapper: {
    position: "absolute",
    marginHorizontal: 20,
    bottom:0,
  },
  title: {
    color: "#FFF",
    fontSize: 30,
    fontFamily: "changaOne",
    paddingBlock: 20,
  },
  description: {
    color: "#FFF",
    fontSize: 16,
  },
  ctaBtn: {
    backgroundColor: "#B090F4",
    marginTop: 30,
    marginBottom: 24,
  },
  ctaBtnLabel: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});
