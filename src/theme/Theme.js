import React from "react";
import { configureFonts, DefaultTheme } from "react-native-paper";
import customFonts from "../theme/Fonts";

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(customFonts),
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    primary: "#157520",
    accent: "#f1c40f",
    favorite: "#BADA55",
    cancelButton: "#a4c639",
    iconColor: "#808080",
  },
};

export default theme;