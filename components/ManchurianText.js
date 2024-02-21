import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const ManchurianText = () => {
  return <Text style={styles.manchurian}>Manchurian</Text>;
};

const styles = StyleSheet.create({
  manchurian: {
    fontSize: FontSize.size_smi,
    fontWeight: "700",
    fontFamily: FontFamily.inriaSerifBold,
    color: Color.colorBlack,
    textAlign: "left",
  },
});

export default ManchurianText;
