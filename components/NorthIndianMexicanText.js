import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const NorthIndianMexicanText = () => {
  return <Text style={styles.northIndianmexican}>North Indian,Mexican</Text>;
};

const styles = StyleSheet.create({
  northIndianmexican: {
    fontSize: FontSize.size_5xs,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorBlack,
    textAlign: "left",
  },
});

export default NorthIndianMexicanText;
