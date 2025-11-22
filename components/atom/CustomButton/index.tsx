import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface CustomButtonProps {
  handlePress: () => void;
  btnLabel: string;
  customBtnStyle?: Object;
  customTextStyle?: Object;
  ctaType: "primary" | "outlined";
}

export default function CustomButton({
  btnLabel,
  ctaType,
  handlePress,
  customBtnStyle,
  customTextStyle,
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      style={[
        ctaType === "primary" ? styles.primary : styles.outlined,
        customBtnStyle,
      ]}
      onPress={handlePress}
    >
      <Text style={[customTextStyle]}>{btnLabel}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  primary: {
    paddingBlock: 16,
    justifyContent: "center",
    borderRadius: 20,
    alignItems: "center",
  },
  outlined: {
    backgroundColor: "transparent",
    borderColor: "#B090F4",
    borderWidth: 1,
  },
});
