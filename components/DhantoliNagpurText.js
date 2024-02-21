import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const DhantoliNagpurText = () => {
  return <Text style={styles.dhantolinagpur}>Dhantoli,Nagpur</Text>;
};

const styles = StyleSheet.create({
  dhantolinagpur: {
    fontSize: FontSize.size_5xs,
    fontWeight: "300",
    fontFamily: FontFamily.inriaSerifLight,
    color: Color.colorBlack,
    textAlign: "left",
  },
});

export default DhantoliNagpurText;
