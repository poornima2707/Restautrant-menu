import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const AndroidLarge1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge12}>
      <View style={[styles.androidLarge12Child, styles.androidLayout]} />
      <Pressable
        style={[styles.androidLarge12Item, styles.androidLayout]}
        onPress={() => navigation.navigate("AndroidLarge6")}
      />
      <View style={[styles.androidLarge12Inner, styles.androidLayout]} />
      <View style={[styles.rectangleView, styles.androidLayout]} />
      <View style={[styles.androidLarge12Child1, styles.androidChildLayout1]} />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-14.png")}
      />
      <View style={[styles.androidLarge12Child2, styles.androidChildLayout3]} />
      <Text style={styles.paymentDetails}>Payment Details</Text>
      <Image
        style={[styles.androidLarge12Child3, styles.androidChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Image
        style={styles.androidLarge12Child4}
        contentFit="cover"
        source={require("../assets/ellipse-10.png")}
      />
      <View style={[styles.androidLarge12Child5, styles.androidChildLayout1]} />
      <Text style={styles.paymentOptions}>Payment options</Text>
      <Text style={[styles.cashOnDelivery, styles.netBankingTypo]}>
        Cash on Delivery
      </Text>
      <Text style={[styles.cardsAddCard, styles.netBankingTypo]}>{`Cards
Add card on next steps`}</Text>
      <Text
        style={[styles.netBanking, styles.netBankingTypo]}
      >{`Net Banking `}</Text>
      <Text style={[styles.foodCredits, styles.netBankingTypo]}>
        Food credits
      </Text>
      <Text style={[styles.addPromo, styles.apply1Typo]}>ADD PROMO</Text>
      <Text style={[styles.enterPromoCode, styles.applyTypo]}>
        Enter promo code
      </Text>
      <Text style={[styles.apply, styles.applyTypo]}>APPLY</Text>
      <Text style={[styles.billSummary, styles.billSummaryTypo]}>
        BILL SUMMARY
      </Text>
      <View style={[styles.androidLarge12Child6, styles.androidChildLayout3]} />
      <Text style={[styles.makePayment, styles.billSummaryTypo]}>
        MAKE PAYMENT
      </Text>
      <View style={[styles.androidLarge12Child7, styles.androidChildLayout1]} />
      <Text style={[styles.apply1, styles.apply1Typo]}>APPLY</Text>
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
        style={[styles.androidLarge12Child10, styles.androidChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-23.png")}
      />
      <Image
        style={[styles.androidLarge12Child11, styles.androidChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-23.png")}
      />
      <Image
        style={styles.androidLarge12Child12}
        contentFit="cover"
        source={require("../assets/ellipse-27.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.androidChildLayout3]}
        contentFit="cover"
        source={require("../assets/rectangle-96.png")}
      />
      <Image
        style={[styles.androidLarge12Child13, styles.androidChildPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-97.png")}
      />
      <Image
        style={styles.androidLarge12Child14}
        contentFit="cover"
        source={require("../assets/rectangle-98.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  androidLayout: {
    height: 57,
    borderWidth: 1,
    borderStyle: "solid",
    width: 360,
    borderColor: Color.colorDarkgray,
    backgroundColor: Color.colorWhitesmoke_200,
    left: 0,
    position: "absolute",
  },
  androidChildLayout1: {
    height: 51,
    position: "absolute",
  },
  androidChildLayout3: {
    width: 360,
    left: 0,
  },
  androidChildPosition: {
    left: 12,
    position: "absolute",
  },
  netBankingTypo: {
    fontSize: FontSize.size_mid,
    left: 65,
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
  androidChildLayout: {
    height: 19,
    width: 18,
    left: 15,
    position: "absolute",
  },
  androidLarge12Child: {
    top: 151,
  },
  androidLarge12Item: {
    top: 218,
  },
  androidLarge12Inner: {
    top: 285,
  },
  rectangleView: {
    top: 350,
  },
  androidLarge12Child1: {
    top: 626,
    height: 51,
    borderWidth: 1,
    borderStyle: "solid",
    width: 360,
    left: 0,
    borderColor: Color.colorDarkgray,
    backgroundColor: Color.colorWhitesmoke_200,
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
    left: 0,
    width: 360,
    position: "absolute",
  },
  paymentDetails: {
    top: 42,
    left: 75,
    fontSize: FontSize.size_9xl,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.colorWhite,
    position: "absolute",
  },
  androidLarge12Child3: {
    top: 21,
    width: 37,
    height: 34,
  },
  androidLarge12Child4: {
    top: 25,
    left: 20,
    width: 25,
    height: 25,
    position: "absolute",
  },
  androidLarge12Child5: {
    top: 88,
    backgroundColor: Color.colorGainsboro_100,
    width: 360,
    left: 0,
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
  cashOnDelivery: {
    top: 171,
    width: 164,
  },
  cardsAddCard: {
    top: 226,
    width: 235,
  },
  netBanking: {
    top: 303,
    width: 164,
  },
  foodCredits: {
    top: 368,
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
  androidLarge12Child6: {
    top: 747,
    backgroundColor: Color.colorMediumseagreen,
    height: 53,
    left: 0,
    width: 360,
    position: "absolute",
  },
  makePayment: {
    top: 764,
    width: 129,
    color: Color.colorWhite,
  },
  androidLarge12Child7: {
    left: 272,
    backgroundColor: Color.colorDarkseagreen,
    borderColor: Color.colorBlack,
    width: 88,
    top: 626,
    height: 51,
    borderWidth: 1,
    borderStyle: "solid",
  },
  apply1: {
    top: 645,
    left: 293,
    width: 50,
    color: Color.colorWhite,
  },
  androidLarge12Child8: {
    top: 173,
  },
  androidLarge12Child9: {
    top: 237,
  },
  androidLarge12Child10: {
    top: 301,
  },
  androidLarge12Child11: {
    top: 370,
  },
  androidLarge12Child12: {
    top: 241,
    left: 18,
    width: 12,
    height: 12,
    position: "absolute",
  },
  rectangleIcon: {
    top: 436,
    height: 155,
    left: 0,
    width: 360,
    position: "absolute",
  },
  androidLarge12Child13: {
    top: 417,
    width: 27,
    height: 26,
  },
  androidLarge12Child14: {
    top: 410,
    left: 45,
    width: 49,
    height: 52,
    position: "absolute",
  },
  androidLarge12: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge1;
