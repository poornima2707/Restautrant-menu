import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const AndroidLarge7 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.androidLarge20, styles.androidLayout]}>
      <View style={[styles.androidLarge12, styles.rectangleChildLayout]}>
        <View
          style={[styles.androidLarge12Child, styles.androidChildBorder1]}
        />
        <View style={[styles.androidLarge12Item, styles.androidChildBorder1]} />
        <View
          style={[styles.androidLarge12Inner, styles.androidChildBorder1]}
        />
        <View style={[styles.rectangleView, styles.androidChildBorder1]} />
        <View
          style={[styles.androidLarge12Child1, styles.androidChildPosition]}
        />
        <Image
          style={styles.ellipseIcon}
          contentFit="cover"
          source={require("../assets/ellipse-14.png")}
        />
        <View
          style={[styles.androidLarge12Child2, styles.rectangleChildLayout]}
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
          onPress={() => navigation.navigate("AndroidLarge6")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/ellipse-10.png")}
          />
        </Pressable>
        <View
          style={[styles.androidLarge12Child4, styles.rectangleChildLayout]}
        />
        <Text style={styles.payment}>{`Payment `}</Text>
        <Text style={[styles.addCreditOr, styles.cvvTypo]}>
          Add credit or debit cards
        </Text>
        <Text style={[styles.googlePay, styles.cvvTypo]}>{`Google pay `}</Text>
        <Text style={[styles.qr, styles.qrTypo]}>QR</Text>
        <Text style={[styles.enterPromoCode, styles.applyTypo]}>
          Enter promo code
        </Text>
        <Text style={[styles.apply, styles.applyTypo]}>APPLY</Text>
        <Text style={[styles.billSummary, styles.payment1Typo]}>
          BILL SUMMARY
        </Text>
        <Pressable
          style={[styles.rectanglePressable, styles.rectangleChildLayout]}
          onPress={() => navigation.navigate("AndroidLarge2")}
        />
        <Text style={[styles.payment1, styles.payment1Typo]}> PAYMENT</Text>
        <View
          style={[styles.androidLarge12Child5, styles.androidChildBorder]}
        />
        <Text style={[styles.apply1, styles.apply1Layout]}>APPLY</Text>
        <Image
          style={[styles.androidLarge12Child6, styles.androidChildLayout1]}
          contentFit="cover"
          source={require("../assets/ellipse-23.png")}
        />
        <Image
          style={[styles.androidLarge12Child7, styles.androidChildLayout1]}
          contentFit="cover"
          source={require("../assets/ellipse-23.png")}
        />
        <Image
          style={[styles.androidLarge12Child8, styles.cvvPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-27.png")}
        />
        <Text style={[styles.text, styles.cvvTypo]}>+</Text>
        <View
          style={[styles.androidLarge12Child9, styles.androidChildBorder]}
        />
        <Text style={[styles.add, styles.androidChildLayout1]}>ADD+</Text>
        <View style={styles.androidLarge12Child10} />
        <Text style={styles.cardNo}>Card No.</Text>
        <Text style={[styles.cardHolderName, styles.cvvTypo]}>{`Card Holder
 Name:.`}</Text>
        <View
          style={[styles.androidLarge12Child11, styles.androidChildBorder1]}
        />
        <Text style={[styles.cvv, styles.cvvPosition]}>CVV</Text>
        <View
          style={[styles.androidLarge12Child12, styles.androidChildBorder1]}
        />
        <Text style={[styles.expiryDate, styles.cvvTypo]}>{`Expiry 
date`}</Text>
        <View
          style={[styles.androidLarge12Child13, styles.androidChildLayout]}
        />
        <View
          style={[styles.androidLarge12Child14, styles.androidChildLayout]}
        />
        <View
          style={[styles.androidLarge12Child15, styles.androidChildLayout]}
        />
        <Image
          style={[styles.rectangleIcon, styles.apply1Layout]}
          contentFit="cover"
          source={require("../assets/rectangle-95.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  androidLayout: {
    overflow: "hidden",
    height: 800,
    backgroundColor: Color.colorWhite,
  },
  rectangleChildLayout: {
    width: 360,
    left: 0,
  },
  androidChildBorder1: {
    borderWidth: 1,
    borderColor: Color.colorDarkgray,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke_200,
    position: "absolute",
  },
  androidChildPosition: {
    top: 626,
    height: 51,
  },
  addTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  cvvTypo: {
    fontSize: FontSize.size_mid,
    color: Color.colorBlack,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
  },
  qrTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
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
  payment1Typo: {
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
  apply1Layout: {
    width: 50,
    position: "absolute",
  },
  androidChildLayout1: {
    height: 19,
    position: "absolute",
  },
  cvvPosition: {
    left: 18,
    position: "absolute",
  },
  androidChildLayout: {
    height: 39,
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  androidLarge12Child: {
    top: 201,
    height: 57,
    width: 360,
    left: 0,
  },
  androidLarge12Item: {
    top: 268,
    height: 57,
    width: 360,
    left: 0,
  },
  androidLarge12Inner: {
    top: 335,
    height: 57,
    width: 360,
    left: 0,
  },
  rectangleView: {
    top: 400,
    height: 57,
    width: 360,
    left: 0,
  },
  androidLarge12Child1: {
    height: 51,
    borderWidth: 1,
    borderColor: Color.colorDarkgray,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke_200,
    position: "absolute",
    width: 360,
    left: 0,
  },
  ellipseIcon: {
    top: 17,
    left: 10,
    width: 45,
    height: 50,
    position: "absolute",
  },
  androidLarge12Child2: {
    backgroundColor: Color.colorCrimson,
    height: 99,
    top: 0,
    width: 360,
    position: "absolute",
  },
  paymentDetails: {
    top: 42,
    fontSize: FontSize.size_9xl,
    color: Color.colorWhite,
    left: 75,
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
    position: "absolute",
  },
  payment: {
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
    left: 65,
    width: 213,
    top: 221,
    position: "absolute",
  },
  googlePay: {
    top: 282,
    left: 68,
    width: 102,
    position: "absolute",
  },
  qr: {
    top: 562,
    left: 30,
    width: 27,
    color: Color.colorBlack,
    position: "absolute",
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
    position: "absolute",
  },
  payment1: {
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
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.colorWhite,
  },
  androidLarge12Child6: {
    top: 223,
    width: 18,
    height: 19,
    left: 15,
  },
  androidLarge12Child7: {
    top: 287,
    width: 18,
    height: 19,
    left: 15,
  },
  androidLarge12Child8: {
    top: 291,
    width: 12,
    height: 12,
  },
  text: {
    left: 19,
    top: 221,
    position: "absolute",
  },
  androidLarge12Child9: {
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
  androidLarge12Child10: {
    top: 222,
    left: 302,
    width: 40,
    height: 22,
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  cardNo: {
    top: 416,
    left: 15,
    fontSize: FontSize.size_mid,
    color: Color.colorBlack,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    position: "absolute",
  },
  cardHolderName: {
    top: 343,
    left: 4,
    position: "absolute",
  },
  androidLarge12Child11: {
    top: 467,
    width: 151,
    height: 57,
    left: 0,
    borderColor: Color.colorDarkgray,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke_200,
  },
  cvv: {
    top: 481,
    fontSize: FontSize.size_mid,
    color: Color.colorBlack,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
  },
  androidLarge12Child12: {
    top: 466,
    left: 177,
    width: 183,
    height: 57,
  },
  expiryDate: {
    top: 475,
    left: 185,
    position: "absolute",
  },
  androidLarge12Child13: {
    top: 409,
    left: 112,
    width: 245,
  },
  androidLarge12Child14: {
    top: 474,
    width: 57,
    left: 75,
  },
  androidLarge12Child15: {
    top: 476,
    left: 250,
    width: 93,
  },
  rectangleIcon: {
    top: 542,
    left: 75,
    height: 57,
  },
  androidLarge12: {
    top: 0,
    width: 360,
    position: "absolute",
    overflow: "hidden",
    height: 800,
    backgroundColor: Color.colorWhite,
  },
  androidLarge20: {
    flex: 1,
    width: "100%",
  },
});

export default AndroidLarge7;
