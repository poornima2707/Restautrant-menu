import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const AndroidLarge2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge15}>
      <Image
        style={[styles.image37Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-37.png")}
      />
      <Image
        style={[styles.image38Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-37.png")}
      />
      <Image
        style={[styles.image39Icon, styles.iconPosition3]}
        contentFit="cover"
        source={require("../assets/image-37.png")}
      />
      <Image
        style={[styles.image40Icon, styles.iconPosition3]}
        contentFit="cover"
        source={require("../assets/image-37.png")}
      />
      <Image
        style={[styles.image41Icon, styles.iconPosition2]}
        contentFit="cover"
        source={require("../assets/image-37.png")}
      />
      <Text style={[styles.yourOrderedIs, styles.doneTypo]}>
        Your Ordered is Confirm
      </Text>
      <Text style={[styles.done, styles.doneTypo]}>Done</Text>
      <Image
        style={[styles.image42Icon, styles.iconPosition2]}
        contentFit="cover"
        source={require("../assets/image-37.png")}
      />
      <Image
        style={[styles.image43Icon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/image-37.png")}
      />
      <Image
        style={[styles.image44Icon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/image-37.png")}
      />
      <Image
        style={styles.androidLarge15Child}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <Image
        style={styles.androidLarge15Item}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("AndroidLarge")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/ellipse-10.png")}
        />
      </Pressable>
      <Pressable
        style={styles.androidLarge15Child}
        onPress={() => navigation.navigate("AndroidLarge")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/ellipse-22.png")}
        />
      </Pressable>
      <Image
        style={[styles.image45Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-45.png")}
      />
      <Image
        style={[styles.image46Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-37.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 180,
    top: 0,
    width: 180,
    position: "absolute",
  },
  iconPosition3: {
    top: 180,
    height: 180,
    width: 180,
    position: "absolute",
  },
  iconPosition2: {
    top: 360,
    height: 180,
    width: 180,
    position: "absolute",
  },
  doneTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  iconPosition1: {
    top: 540,
    height: 180,
    width: 180,
    position: "absolute",
  },
  iconPosition: {
    top: 720,
    height: 180,
    position: "absolute",
  },
  image37Icon: {
    left: 0,
  },
  image38Icon: {
    left: 180,
  },
  image39Icon: {
    left: 0,
  },
  image40Icon: {
    left: 180,
  },
  image41Icon: {
    left: 0,
  },
  yourOrderedIs: {
    top: 400,
    left: 110,
  },
  done: {
    top: 371,
    left: 167,
  },
  image42Icon: {
    left: 180,
  },
  image43Icon: {
    left: 0,
  },
  image44Icon: {
    left: 180,
  },
  androidLarge15Child: {
    top: 309,
    left: 155,
    width: 65,
    height: 57,
    position: "absolute",
  },
  androidLarge15Item: {
    top: 34,
    left: 14,
    width: 37,
    height: 34,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 21,
    top: 40,
    width: 25,
    height: 25,
    position: "absolute",
  },
  image45Icon: {
    width: 167,
    left: 0,
  },
  image46Icon: {
    left: 180,
    width: 180,
    top: 720,
  },
  androidLarge15: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default AndroidLarge2;
