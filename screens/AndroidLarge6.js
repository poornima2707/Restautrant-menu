import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const AndroidLarge6 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge19}>
      <View style={styles.androidLarge12}>
        <View style={[styles.androidLarge12Child, styles.androidLayout]} />
        <View style={[styles.androidLarge12Item, styles.androidLayout]} />
        <View style={[styles.androidLarge12Inner, styles.androidLayout]} />
        <View style={[styles.rectangleView, styles.androidLayout]} />
        <View
          style={[styles.androidLarge12Child1, styles.androidChildPosition]}
        />
        <Image
          style={styles.ellipseIcon}
          contentFit="cover"
          source={require("../assets/ellipse-14.png")}
        />
        <View
          style={[styles.androidLarge12Child2, styles.androidChildPosition1]}
        />
        <Text style={[styles.paymentDetails, styles.addTypo]}>
          Payment Details
        </Text>
        <Image
          style={styles.androidLarge12Child3}
          contentFit="cover"
          source={require("../assets/ellipse-11.png")}
        />
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("AndroidLarge1")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/ellipse-10.png")}
          />
        </Pressable>
        <View
          style={[styles.androidLarge12Child4, styles.androidChildPosition1]}
        />
        <Text style={styles.paymentOptions}>Payment options</Text>
        <Text style={[styles.addCreditOr, styles.textTypo]}>
          Add credit or debit cards
        </Text>
        <Text style={[styles.googlePay, styles.textTypo]}>{`Google pay `}</Text>
        <Text style={[styles.phonepe, styles.textTypo]}>Phonepe</Text>
        <Text style={[styles.paytm, styles.textTypo]}>paytm</Text>
        <Text style={[styles.addPromo, styles.apply1Typo]}>ADD PROMO</Text>
        <Text style={[styles.enterPromoCode, styles.applyTypo]}>
          Enter promo code
        </Text>
        <Text style={[styles.apply, styles.applyTypo]}>APPLY</Text>
        <Text style={[styles.billSummary, styles.billSummaryTypo]}>
          BILL SUMMARY
        </Text>
        <Pressable
          style={[styles.rectanglePressable, styles.androidChildPosition1]}
          onPress={() => navigation.navigate("AndroidLarge7")}
        />
        <Text style={[styles.makePayment, styles.billSummaryTypo]}>
          MAKE PAYMENT
        </Text>
        <View
          style={[styles.androidLarge12Child5, styles.androidChildBorder]}
        />
        <Text style={[styles.apply1, styles.apply1Typo]}>APPLY</Text>
        <Image
          style={[styles.androidLarge12Child6, styles.androidChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-23.png")}
        />
        <Image
          style={[styles.androidLarge12Child7, styles.androidChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-23.png")}
        />
        <Image
          style={[styles.androidLarge12Child8, styles.androidChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-23.png")}
        />
        <Image
          style={[styles.androidLarge12Child9, styles.androidChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-23.png")}
        />
        <Image
          style={styles.androidLarge12Child10}
          contentFit="cover"
          source={require("../assets/ellipse-27.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>+</Text>
        <View
          style={[styles.androidLarge12Child11, styles.androidChildBorder]}
        />
        <Text style={[styles.add, styles.androidChildLayout]}>ADD+</Text>
        <View style={styles.androidLarge12Child12} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  androidLayout: {
    height: 57,
    borderWidth: 1,
    borderColor: Color.colorDarkgray,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke_200,
    left: 0,
    position: "absolute",
    width: 360,
  },
  androidChildPosition: {
    top: 626,
    height: 51,
  },
  androidChildPosition1: {
    left: 0,
    position: "absolute",
    width: 360,
  },
  addTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  textTypo: {
    fontSize: FontSize.size_mid,
    color: Color.colorBlack,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    position: "absolute",
  },
  apply1Typo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  applyTypo: {
    top: 640,
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    position: "absolute",
  },
  billSummaryTypo: {
    left: 129,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  androidChildBorder: {
    borderColor: Color.colorBlack,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  androidChildLayout: {
    height: 19,
    position: "absolute",
  },
  androidLarge12Child: {
    top: 201,
  },
  androidLarge12Item: {
    top: 268,
  },
  androidLarge12Inner: {
    top: 335,
  },
  rectangleView: {
    top: 400,
  },
  androidLarge12Child1: {
    height: 51,
    borderWidth: 1,
    borderColor: Color.colorDarkgray,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke_200,
    top: 626,
    left: 0,
    position: "absolute",
    width: 360,
  },
  ellipseIcon: {
    top: 17,
    left: 10,
    width: 45,
    height: 50,
    position: "absolute",
  },
  androidLarge12Child2: {
    top: 0,
    backgroundColor: Color.colorCrimson,
    height: 99,
  },
  paymentDetails: {
    top: 42,
    left: 75,
    fontSize: FontSize.size_9xl,
    color: Color.colorWhite,
    position: "absolute",
  },
  androidLarge12Child3: {
    top: 21,
    left: 12,
    width: 37,
    height: 34,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 20,
    top: 25,
    width: 25,
    height: 25,
    position: "absolute",
  },
  androidLarge12Child4: {
    top: 88,
    backgroundColor: Color.colorGainsboro_100,
    height: 51,
  },
  paymentOptions: {
    top: 99,
    left: 98,
    fontSize: FontSize.size_xl,
    width: 164,
    color: Color.colorBlack,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    position: "absolute",
  },
  addCreditOr: {
    width: 213,
    left: 65,
    fontSize: FontSize.size_mid,
    top: 221,
  },
  googlePay: {
    top: 285,
    left: 62,
    width: 235,
  },
  phonepe: {
    top: 353,
    left: 65,
    fontSize: FontSize.size_mid,
    width: 164,
  },
  paytm: {
    top: 418,
    left: 65,
    fontSize: FontSize.size_mid,
    width: 164,
  },
  addPromo: {
    top: 591,
    left: 136,
    width: 164,
    color: Color.colorBlack,
  },
  enterPromoCode: {
    left: 53,
  },
  apply: {
    left: 278,
  },
  billSummary: {
    top: 712,
    width: 112,
    color: Color.colorBlack,
  },
  rectanglePressable: {
    top: 747,
    backgroundColor: Color.colorMediumseagreen,
    height: 53,
  },
  makePayment: {
    top: 764,
    width: 129,
    color: Color.colorWhite,
  },
  androidLarge12Child5: {
    left: 272,
    backgroundColor: Color.colorDarkseagreen,
    width: 88,
    height: 51,
    top: 626,
  },
  apply1: {
    top: 645,
    left: 293,
    width: 50,
    color: Color.colorWhite,
  },
  androidLarge12Child6: {
    top: 223,
    width: 18,
    left: 15,
    height: 19,
  },
  androidLarge12Child7: {
    top: 287,
    width: 18,
    left: 15,
    height: 19,
  },
  androidLarge12Child8: {
    top: 351,
    width: 18,
    left: 15,
    height: 19,
  },
  androidLarge12Child9: {
    top: 420,
    width: 18,
    left: 15,
    height: 19,
  },
  androidLarge12Child10: {
    top: 291,
    left: 18,
    width: 12,
    height: 12,
    position: "absolute",
  },
  text: {
    left: 19,
    top: 221,
  },
  androidLarge12Child11: {
    left: 300,
    width: 42,
    height: 24,
    top: 221,
    backgroundColor: Color.colorGainsboro_100,
  },
  add: {
    top: 226,
    left: 303,
    fontSize: FontSize.size_xs,
    width: 39,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  androidLarge12Child12: {
    top: 222,
    left: 302,
    width: 40,
    height: 22,
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  androidLarge12: {
    width: 360,
    overflow: "hidden",
    height: 800,
    backgroundColor: Color.colorWhite,
  },
  androidLarge19: {
    flex: 1,
    flexDirection: "row",
    overflow: "hidden",
    height: 800,
    backgroundColor: Color.colorWhite,
    width: "100%",
  },
});

export default AndroidLarge6;
