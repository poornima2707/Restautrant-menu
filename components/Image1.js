import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Image1 = () => {
  return (
    <ImageBackground
      style={styles.image45Icon}
      resizeMode="cover"
      source={require("../assets/image-37.png")}
    />
  );
};

const styles = StyleSheet.create({
  image45Icon: {
    width: 180,
    height: 180,
  },
});

export default Image1;
