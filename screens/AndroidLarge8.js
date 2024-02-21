import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AndroidLarge8 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge21}>
      <View style={[styles.androidLarge21Child, styles.rectangleViewBg]} />
      <View style={[styles.androidLarge21Item, styles.androidPosition]} />
      <Text style={[styles.othersDetails, styles.text1Typo]}>
        Others details
      </Text>
      <View
        style={[styles.androidLarge21Inner, styles.rectanglePressablePosition]}
      />
      <Text style={[styles.ordered, styles.text1Typo]}>Ordered</Text>
      <View style={[styles.rectangleView, styles.rectangleViewBorder]} />
      <Text style={[styles.text, styles.textTypo]}>-</Text>
      <View style={styles.androidLarge21Child1} />
      <Text style={[styles.text1, styles.text1Typo]}>5</Text>
      <Text style={[styles.text2, styles.textTypo]}>+</Text>
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-611.png")}
      />
      <Image
        style={[styles.androidLarge21Child2, styles.androidPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-96.png")}
      />
      <Image
        style={styles.androidLarge21Child3}
        contentFit="cover"
        source={require("../assets/rectangle-97.png")}
      />
      <Image
        style={styles.androidLarge21Child4}
        contentFit="cover"
        source={require("../assets/rectangle-98.png")}
      />
      <Text style={[styles.personalDetails, styles.nameTypo]}>
        Personal Details
      </Text>
      <Text style={[styles.name, styles.nameTypo]}>Name:</Text>
      <Text style={[styles.address, styles.text1Typo]}>Address:</Text>
      <Text style={[styles.phoneNumber, styles.text1Typo]}>Phone number:</Text>
      <Text style={[styles.pincode, styles.text1Typo]}>Pincode:</Text>
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
      <View style={[styles.androidLarge21Child5, styles.androidChildLayout1]} />
      <View style={[styles.androidLarge21Child6, styles.androidChildLayout]} />
      <View style={[styles.androidLarge21Child7, styles.androidChildLayout]} />
      <View style={[styles.androidLarge21Child8, styles.androidChildLayout1]} />
      <Image
        style={styles.image26Icon}
        contentFit="cover"
        source={require("../assets/image-24.png")}
      />
      <Pressable
        style={[styles.rectanglePressable, styles.rectanglePressablePosition]}
        onPress={() => navigation.navigate("AndroidLarge1")}
      />
      <Text style={[styles.makePayment, styles.text1Typo]}>MAKE PAYMENT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleViewBg: {
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  androidPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  text1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  rectanglePressablePosition: {
    backgroundColor: Color.colorMediumseagreen,
    width: 360,
    left: 0,
    position: "absolute",
  },
  rectangleViewBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  textTypo: {
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  nameTypo: {
    left: 21,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  androidChildLayout1: {
    height: 34,
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  androidChildLayout: {
    width: 268,
    left: 92,
    height: 34,
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  androidLarge21Child: {
    top: 710,
    left: 146,
    width: 29,
    height: 20,
  },
  androidLarge21Item: {
    top: 490,
    backgroundColor: Color.colorWhitesmoke_200,
    borderColor: Color.colorDarkgray,
    height: 254,
    borderWidth: 1,
    borderStyle: "solid",
  },
  othersDetails: {
    top: 711,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    left: 16,
  },
  androidLarge21Inner: {
    top: 0,
    height: 97,
  },
  ordered: {
    top: 34,
    left: 131,
    fontSize: 24,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  rectangleView: {
    top: 208,
    left: 234,
    borderColor: Color.colorBlack,
    width: 85,
    height: 36,
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  text: {
    top: 206,
    left: 243,
    width: 18,
    height: 31,
  },
  androidLarge21Child1: {
    top: 215,
    left: 261,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 31,
    height: 22,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  text1: {
    top: 217,
    left: 272,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
  },
  text2: {
    top: 207,
    left: 292,
    width: 36,
    height: 38,
  },
  rectangleIcon: {
    top: 154,
    left: 34,
    borderRadius: Border.br_16xl,
    width: 189,
    height: 136,
    position: "absolute",
  },
  androidLarge21Child2: {
    top: 324,
    height: 155,
  },
  androidLarge21Child3: {
    top: 305,
    left: 12,
    width: 27,
    height: 26,
    position: "absolute",
  },
  androidLarge21Child4: {
    top: 298,
    left: 45,
    width: 49,
    height: 52,
    position: "absolute",
  },
  personalDetails: {
    top: 502,
  },
  name: {
    top: 535,
  },
  address: {
    top: 580,
    left: 20,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
  },
  phoneNumber: {
    top: 625,
    left: 17,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
  },
  pincode: {
    top: 670,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    left: 16,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 22,
    top: 21,
    width: 25,
    height: 25,
    position: "absolute",
  },
  androidLarge21Child5: {
    top: 528,
    left: 77,
    width: 283,
  },
  androidLarge21Child6: {
    top: 572,
  },
  androidLarge21Child7: {
    top: 662,
  },
  androidLarge21Child8: {
    top: 617,
    left: 133,
    width: 222,
  },
  image26Icon: {
    top: 713,
    left: 139,
    width: 14,
    height: 14,
    position: "absolute",
  },
  rectanglePressable: {
    top: 744,
    height: 53,
  },
  makePayment: {
    top: 761,
    left: 129,
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    width: 129,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  androidLarge21: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default AndroidLarge8;
