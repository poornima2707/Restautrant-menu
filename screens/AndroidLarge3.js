import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const AndroidLarge3 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.androidLarge16, styles.androidBg]}>
      <View style={[styles.androidLarge13Wrapper, styles.androidLayout2]}>
        <View style={[styles.androidLarge13, styles.androidLayout2]}>
          <View style={styles.androidLarge13Child} />
          <Image
            style={[styles.androidLarge13Item, styles.androidLayout1]}
            contentFit="cover"
            source={require("../assets/rectangle-61.png")}
          />
          <View style={[styles.androidLarge13Inner, styles.androidLayout]} />
          <Text style={[styles.ourMenu, styles.rsFlexBox]}>Our Menu</Text>
          <Image
            style={[styles.ellipseIcon, styles.ellipseIconPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-10.png")}
          />
          <Pressable
            style={styles.wrapper}
            onPress={() => navigation.navigate("AndroidLarge")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/ellipse-11.png")}
            />
          </Pressable>
          <Image
            style={styles.androidLarge13Child1}
            contentFit="cover"
            source={require("../assets/ellipse-13.png")}
          />
          <View style={styles.rectangleView} />
          <Image
            style={styles.rectangleIcon}
            contentFit="cover"
            source={require("../assets/rectangle-47.png")}
          />
          <Text style={styles.search}>Search.......</Text>
          <Image
            style={styles.image12Icon}
            contentFit="cover"
            source={require("../assets/image-12.png")}
          />
          <Image
            style={[styles.androidLarge13Child2, styles.ellipseIconPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-12.png")}
          />
          <View style={[styles.androidLarge13Inner, styles.androidLayout]} />
          <Image
            style={styles.androidLarge13Child1}
            contentFit="cover"
            source={require("../assets/ellipse-13.png")}
          />
          <Image
            style={styles.image12Icon}
            contentFit="cover"
            source={require("../assets/image-12.png")}
          />
          <Image
            style={[styles.androidLarge13Child2, styles.ellipseIconPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-12.png")}
          />
          <Text style={[styles.noodles, styles.rsFlexBox]}>Noodles</Text>
          <Text style={styles.northIndiamexican}>North India,Mexican</Text>
          <Text style={[styles.dhantolinagpur, styles.kRatingsTypo]}>
            Dhantoli,Nagpur
          </Text>
          <Text style={[styles.kRatings, styles.textTypo]}>4.5k ratings</Text>
          <View style={[styles.androidLarge13Child6, styles.textPosition]} />
          <Image
            style={[styles.starIcon, styles.rsPosition]}
            contentFit="cover"
            source={require("../assets/star-2.png")}
          />
          <Text style={[styles.text, styles.textPosition]}>4.4</Text>
          <Image
            style={styles.lineIcon}
            contentFit="cover"
            source={require("../assets/line-5.png")}
          />
          <Text style={styles.km}>2 km</Text>
          <Image
            style={[styles.androidLarge13Child7, styles.androidChildLayout7]}
            contentFit="cover"
            source={require("../assets/line-6.png")}
          />
          <View
            style={[styles.androidLarge13Child8, styles.androidChildPosition5]}
          />
          <Text style={[styles.filters, styles.vegTypo1]}>Filters</Text>
          <Image
            style={styles.image14Icon}
            contentFit="cover"
            source={require("../assets/image-14.png")}
          />
          <Image
            style={styles.image15Icon}
            contentFit="cover"
            source={require("../assets/image-15.png")}
          />
          <View
            style={[styles.androidLarge13Child9, styles.androidChildPosition4]}
          />
          <Text style={[styles.kidsChoice, styles.spicyTypo]}>
            Kid’s choice
          </Text>
          <View
            style={[styles.androidLarge13Child10, styles.androidChildPosition4]}
          />
          <Text style={[styles.spicy, styles.spicyTypo]}>Spicy</Text>
          <View
            style={[styles.androidLarge13Child11, styles.androidChildPosition4]}
          />
          <Text style={[styles.topRated, styles.spicyTypo]}>Top-rated</Text>
          <View
            style={[styles.androidLarge13Child12, styles.androidChildPosition5]}
          />
          <Text style={[styles.nonVeg, styles.vegTypo1]}>Non-veg</Text>
          <View
            style={[styles.androidLarge13Child13, styles.androidChildPosition5]}
          />
          <View
            style={[styles.androidLarge13Child14, styles.androidChildLayout5]}
          />
          <Image
            style={[styles.androidLarge13Child15, styles.androidChildLayout4]}
            contentFit="cover"
            source={require("../assets/ellipse-19.png")}
          />
          <Text style={[styles.veg, styles.vegTypo1]}>Veg</Text>
          <View
            style={[styles.androidLarge13Child16, styles.androidChildLayout5]}
          />
          <Image
            style={[styles.androidLarge13Child17, styles.androidChildLayout4]}
            contentFit="cover"
            source={require("../assets/ellipse-20.png")}
          />
          <Image
            style={[styles.image21Icon, styles.iconPosition1]}
            contentFit="cover"
            source={require("../assets/image-21.png")}
          />
          <Image
            style={[styles.image22Icon, styles.iconPosition1]}
            contentFit="cover"
            source={require("../assets/image-22.png")}
          />
          <Image
            style={[styles.image23Icon, styles.androidChildLayout5]}
            contentFit="cover"
            source={require("../assets/image-23.png")}
          />
          <Text style={[styles.friedRiceAnd, styles.mealsTypo]}>
            Fried Rice and NOOdles
          </Text>
          <Text style={[styles.vegFriedRice, styles.mealsTypo]}>
            Veg Fried Rice
          </Text>
          <Text style={[styles.nonVegFried, styles.nonVegFriedPosition]}>
            Non Veg Fried Rice
          </Text>
          <Text style={[styles.vegNoodles, styles.addTypo]}>Veg Noodles</Text>
          <Text style={[styles.nonVegNoodles, styles.vegTypo]}>
            Non Veg Noodles
          </Text>
          <View style={[styles.lineView, styles.androidChildLayout3]} />
          <View
            style={[styles.androidLarge13Child18, styles.androidChildLayout3]}
          />
          <View
            style={[styles.androidLarge13Child19, styles.androidChildLayout3]}
          />
          <View
            style={[styles.androidLarge13Child20, styles.androidChildLayout3]}
          />
          <Image
            style={[styles.image24Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-24.png")}
          />
          <Image
            style={[styles.image27Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-24.png")}
          />
          <Image
            style={[styles.image26Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-24.png")}
          />
          <Image
            style={[styles.image25Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-24.png")}
          />
          <Text style={[styles.mealsVeg, styles.mealsTypo]}>Meals Veg</Text>
          <Text style={[styles.mealsNonVeg, styles.mealsNonVegPosition]}>
            Meals Non Veg
          </Text>
          <View
            style={[styles.androidLarge13Child21, styles.androidChildLayout3]}
          />
          <View
            style={[styles.androidLarge13Child22, styles.androidChildLayout3]}
          />
          <Image
            style={[styles.image30Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-24.png")}
          />
          <Image
            style={[styles.image31Icon, styles.mealsNonVegPosition]}
            contentFit="cover"
            source={require("../assets/image-24.png")}
          />
          <Text style={[styles.vegBaos, styles.vegBaosPosition]}>Veg Baos</Text>
          <Text style={[styles.nonVegBaos, styles.snacksTypo]}>
            Non Veg Baos
          </Text>
          <View
            style={[styles.androidLarge13Child23, styles.image29IconPosition]}
          />
          <View
            style={[styles.androidLarge13Child24, styles.androidChildLayout3]}
          />
          <Image
            style={[styles.image28Icon, styles.vegBaosPosition]}
            contentFit="cover"
            source={require("../assets/image-24.png")}
          />
          <Image
            style={[styles.image29Icon, styles.image29IconPosition]}
            contentFit="cover"
            source={require("../assets/image-24.png")}
          />
          <Text style={[styles.snacks, styles.snacksPosition]}>Snacks</Text>
          <View
            style={[styles.androidLarge13Child25, styles.androidChildLayout2]}
          />
          <View
            style={[styles.androidLarge13Child26, styles.androidChildLayout2]}
          />
          <Text style={[styles.mealsFor1starating, styles.sidesTypo]}>
            Meals For 1(starating at 299 )
          </Text>
          <Text style={[styles.sidesVeg, styles.mealsTypo]}>Sides Veg</Text>
          <Text style={[styles.sidesNonVeg, styles.sidesNonVegPosition]}>
            Sides Non Veg
          </Text>
          <View
            style={[styles.androidLarge13Child27, styles.androidChildLayout3]}
          />
          <View
            style={[styles.androidLarge13Child28, styles.androidChildLayout2]}
          />
          <Text style={[styles.sides, styles.sidesTypo]}>Sides</Text>
          <Image
            style={[styles.image32Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-24.png")}
          />
          <Image
            style={[styles.image33Icon, styles.sidesNonVegPosition]}
            contentFit="cover"
            source={require("../assets/image-24.png")}
          />
          <View
            style={[styles.androidLarge13Child29, styles.androidChildLayout3]}
          />
          <Text style={[styles.petBottles, styles.waterTypo]}>Pet Bottles</Text>
          <Text style={[styles.water, styles.waterTypo]}>Water</Text>
          <View
            style={[styles.androidLarge13Child30, styles.androidChildLayout1]}
          />
          <View
            style={[styles.androidLarge13Child31, styles.androidChildPosition2]}
          />
          <Text style={[styles.drinksbeverages, styles.addTypo]}>
            Drinks(Beverages)
          </Text>
          <View
            style={[styles.androidLarge13Child32, styles.androidChildPosition2]}
          />
          <Text style={[styles.dips, styles.dipsTypo]}>Dips</Text>
          <Image
            style={[styles.image34Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/image-24.png")}
          />
          <Image
            style={[styles.image35Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/image-24.png")}
          />
          <View
            style={[styles.androidLarge13Child33, styles.androidChildLayout1]}
          />
          <Image
            style={[styles.image36Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/image-24.png")}
          />
          <View style={styles.androidLarge13Child34} />
          <Pressable
            style={styles.orderedNow}
            onPress={() => navigation.navigate("AndroidLarge8")}
          >
            <Text style={[styles.orderedNow1, styles.rsFlexBox]}>
              Ordered Now
            </Text>
          </Pressable>
          <View
            style={[styles.androidLarge13Child35, styles.androidChildBorder]}
          />
          <Image
            style={[styles.androidLarge13Child36, styles.androidChildLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-56.png")}
          />
          <Image
            style={[styles.androidLarge13Child37, styles.androidChildLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-57.png")}
          />
          <Image
            style={[styles.androidLarge13Child38, styles.androidChildLayout7]}
            contentFit="cover"
            source={require("../assets/rectangle-58.png")}
          />
          <View
            style={[styles.androidLarge13Child39, styles.androidChildBorder]}
          />
          <Text style={[styles.rs, styles.rsPosition]}>100 RS</Text>
          <Image
            style={[styles.androidLarge13Child40, styles.androidChildLayout2]}
            contentFit="cover"
            source={require("../assets/rectangle-531.png")}
          />
          <Text style={[styles.baos, styles.dipsTypo]}>Baos</Text>
          <View
            style={[styles.androidLarge13Child41, styles.androidChildPosition]}
          />
          <View
            style={[styles.androidLarge13Child42, styles.androidChildPosition]}
          />
          <Image
            style={[styles.image37Icon, styles.snacksPosition]}
            contentFit="cover"
            source={require("../assets/image-24.png")}
          />
          <View
            style={[styles.androidLarge13Child43, styles.androidChildBorder]}
          />
          <Text style={[styles.add, styles.addTypo]}>ADD+</Text>
          <View
            style={[styles.androidLarge13Child44, styles.androidChildLayout]}
          />
          <Image
            style={[styles.androidLarge13Child45, styles.ourMenuPosition]}
            contentFit="cover"
            source={require("../assets/line-21.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  androidBg: {
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  androidLayout2: {
    width: 360,
    left: 0,
  },
  androidLayout1: {
    height: 238,
    top: 145,
  },
  androidLayout: {
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  rsFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  ellipseIconPosition: {
    height: 25,
    top: 41,
    position: "absolute",
  },
  kRatingsTypo: {
    fontFamily: FontFamily.inriaSerifLight,
    fontWeight: "300",
    color: Color.colorBlack,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_2xs,
    textAlign: "left",
  },
  textPosition: {
    left: 125,
    position: "absolute",
  },
  rsPosition: {
    top: 434,
    position: "absolute",
  },
  androidChildLayout7: {
    height: 18,
    position: "absolute",
  },
  androidChildPosition5: {
    top: 493,
    height: 16,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  vegTypo1: {
    top: 495,
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  androidChildPosition4: {
    top: 523,
    height: 16,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  spicyTypo: {
    top: 525,
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  androidChildLayout5: {
    height: 10,
    position: "absolute",
  },
  androidChildLayout4: {
    height: 5,
    width: 5,
    position: "absolute",
  },
  iconPosition1: {
    top: 527,
    position: "absolute",
  },
  mealsTypo: {
    left: 25,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
  },
  nonVegFriedPosition: {
    top: 641,
    position: "absolute",
  },
  addTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  vegTypo: {
    left: 24,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
  },
  androidChildLayout3: {
    width: 354,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    height: 1,
  },
  iconLayout: {
    height: 14,
    left: 328,
    width: 14,
  },
  mealsNonVegPosition: {
    top: 899,
    position: "absolute",
  },
  vegBaosPosition: {
    top: 780,
    position: "absolute",
  },
  snacksTypo: {
    left: 23,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
  },
  image29IconPosition: {
    top: 800,
    position: "absolute",
  },
  snacksPosition: {
    top: 742,
    position: "absolute",
  },
  androidChildLayout2: {
    width: 359,
    left: 0,
  },
  sidesTypo: {
    left: 17,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  sidesNonVegPosition: {
    top: 993,
    position: "absolute",
  },
  waterTypo: {
    left: 26,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  androidChildLayout1: {
    left: 7,
    width: 354,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    height: 1,
  },
  androidChildPosition2: {
    left: 1,
    width: 359,
    height: 9,
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  dipsTypo: {
    left: 21,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  iconPosition: {
    left: 329,
    height: 14,
    width: 14,
    position: "absolute",
  },
  androidChildBorder: {
    borderColor: Color.colorBlack,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  androidChildLayout: {
    height: 22,
    position: "absolute",
  },
  androidChildPosition: {
    top: 756,
    position: "absolute",
  },
  ourMenuPosition: {
    left: 115,
    position: "absolute",
  },
  androidLarge13Child: {
    top: 458,
    left: 120,
    backgroundColor: Color.colorGainsboro_200,
    width: 134,
    height: 19,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  androidLarge13Item: {
    borderRadius: Border.br_16xl,
    width: 360,
    left: 0,
    position: "absolute",
  },
  androidLarge13Inner: {
    top: 79,
    width: 325,
    height: 28,
    backgroundColor: Color.colorGainsboro_100,
    left: 20,
  },
  ourMenu: {
    top: 30,
    fontSize: FontSize.size_9xl,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 115,
    position: "absolute",
  },
  ellipseIcon: {
    width: 25,
    left: 20,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 14,
    top: 36,
    width: 37,
    height: 34,
    position: "absolute",
  },
  androidLarge13Child1: {
    top: 81,
    left: 314,
    width: 27,
    height: 23,
    position: "absolute",
  },
  rectangleView: {
    top: 83,
    left: 32,
    width: 24,
    height: 21,
    borderRadius: Border.br_8xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  rectangleIcon: {
    top: 87,
    left: 37,
    height: 13,
    width: 14,
    position: "absolute",
  },
  search: {
    top: 85,
    left: 93,
    fontWeight: "100",
    fontFamily: FontFamily.interThin,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  image12Icon: {
    top: 46,
    left: 321,
    width: 16,
    height: 16,
    position: "absolute",
  },
  androidLarge13Child2: {
    left: 316,
    width: 26,
  },
  noodles: {
    top: 380,
    left: 138,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.inriaSerifBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  northIndiamexican: {
    top: 409,
    width: 190,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    left: 106,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  dhantolinagpur: {
    top: 460,
    left: 158,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  kRatings: {
    top: 429,
    left: 171,
    fontFamily: FontFamily.inriaSerifLight,
    fontWeight: "300",
    color: Color.colorBlack,
    position: "absolute",
  },
  androidLarge13Child6: {
    top: 430,
    backgroundColor: Color.colorSeagreen,
    width: 34,
    height: 16,
    borderRadius: Border.br_8xs,
  },
  starIcon: {
    left: 144,
    height: 8,
    width: 13,
  },
  text: {
    top: 431,
    color: Color.colorWhite,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  lineIcon: {
    top: 444,
    left: 172,
    width: 49,
    height: 1,
    position: "absolute",
  },
  km: {
    top: 461,
    left: 128,
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  androidLarge13Child7: {
    top: 459,
    left: 149,
    width: 0,
  },
  androidLarge13Child8: {
    left: 100,
    width: 46,
  },
  filters: {
    left: 106,
    top: 495,
  },
  image14Icon: {
    top: 464,
    left: 122,
    height: 7,
    width: 5,
    position: "absolute",
  },
  image15Icon: {
    top: 497,
    left: 132,
    height: 9,
    width: 10,
    position: "absolute",
  },
  androidLarge13Child9: {
    left: 214,
    width: 75,
  },
  kidsChoice: {
    left: 220,
  },
  androidLarge13Child10: {
    left: 160,
    width: 46,
  },
  spicy: {
    left: 166,
  },
  androidLarge13Child11: {
    left: 91,
    width: 63,
  },
  topRated: {
    left: 97,
  },
  androidLarge13Child12: {
    left: 218,
    width: 60,
  },
  nonVeg: {
    left: 223,
  },
  androidLarge13Child13: {
    left: 156,
    width: 46,
  },
  androidLarge13Child14: {
    left: 183,
    borderColor: Color.colorSeagreen,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_10xs,
    top: 496,
    height: 10,
    backgroundColor: Color.colorWhite,
    width: 14,
  },
  androidLarge13Child15: {
    top: 499,
    left: 187,
  },
  veg: {
    left: 162,
  },
  androidLarge13Child16: {
    left: 262,
    borderColor: Color.colorRed,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_10xs,
    top: 496,
    height: 10,
    backgroundColor: Color.colorWhite,
    width: 13,
  },
  androidLarge13Child17: {
    top: 498,
    left: 266,
  },
  image21Icon: {
    left: 142,
    width: 7,
    height: 7,
  },
  image22Icon: {
    left: 190,
    width: 10,
    height: 8,
  },
  image23Icon: {
    top: 526,
    left: 273,
    width: 9,
  },
  friedRiceAnd: {
    top: 581,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  vegFriedRice: {
    top: 604,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  nonVegFried: {
    fontFamily: FontFamily.interRegular,
    left: 25,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
  },
  vegNoodles: {
    top: 680,
    left: 22,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  nonVegNoodles: {
    top: 712,
    position: "absolute",
  },
  lineView: {
    top: 625,
    left: 6,
    width: 354,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  androidLarge13Child18: {
    top: 663,
    left: 6,
    width: 354,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  androidLarge13Child19: {
    top: 698,
    left: 6,
    width: 354,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  androidLarge13Child20: {
    top: 727,
    left: 6,
    width: 354,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  image24Icon: {
    top: 609,
    position: "absolute",
  },
  image27Icon: {
    top: 705,
    position: "absolute",
  },
  image26Icon: {
    top: 674,
    position: "absolute",
  },
  image25Icon: {
    top: 641,
    position: "absolute",
  },
  mealsVeg: {
    top: 862,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  mealsNonVeg: {
    fontFamily: FontFamily.interRegular,
    left: 25,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
  },
  androidLarge13Child21: {
    top: 883,
    left: 6,
    width: 354,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  androidLarge13Child22: {
    top: 921,
    left: 6,
    width: 354,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  image30Icon: {
    top: 867,
    position: "absolute",
  },
  image31Icon: {
    height: 14,
    left: 328,
    width: 14,
  },
  vegBaos: {
    left: 24,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
  },
  nonVegBaos: {
    top: 805,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  androidLarge13Child23: {
    left: 4,
    width: 354,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    height: 1,
  },
  androidLarge13Child24: {
    top: 822,
    left: 6,
    width: 354,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  image28Icon: {
    height: 14,
    left: 328,
    width: 14,
  },
  image29Icon: {
    height: 14,
    left: 328,
    width: 14,
  },
  snacks: {
    left: 23,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  androidLarge13Child25: {
    top: 730,
    height: 9,
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  androidLarge13Child26: {
    top: 826,
    height: 9,
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  mealsFor1starating: {
    top: 841,
  },
  sidesVeg: {
    top: 961,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  sidesNonVeg: {
    fontFamily: FontFamily.interRegular,
    left: 25,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
  },
  androidLarge13Child27: {
    top: 982,
    left: 6,
    width: 354,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  androidLarge13Child28: {
    top: 925,
    height: 9,
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  sides: {
    top: 940,
  },
  image32Icon: {
    top: 962,
    position: "absolute",
  },
  image33Icon: {
    height: 14,
    left: 328,
    width: 14,
  },
  androidLarge13Child29: {
    top: 1018,
    left: 6,
    width: 354,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  petBottles: {
    top: 1058,
  },
  water: {
    top: 1090,
  },
  androidLarge13Child30: {
    top: 1079,
    position: "absolute",
  },
  androidLarge13Child31: {
    top: 1022,
  },
  drinksbeverages: {
    top: 1037,
    left: 18,
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    position: "absolute",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  androidLarge13Child32: {
    top: 1117,
  },
  dips: {
    top: 1134,
  },
  image34Icon: {
    top: 1059,
  },
  image35Icon: {
    top: 1090,
  },
  androidLarge13Child33: {
    top: 1115,
    position: "absolute",
  },
  image36Icon: {
    top: 1134,
  },
  androidLarge13Child34: {
    top: 1153,
    width: 363,
    height: 27,
    backgroundColor: Color.colorGainsboro_100,
    left: 0,
    position: "absolute",
  },
  orderedNow1: {
    fontSize: FontSize.size_sm,
    width: 93,
    height: 11,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  orderedNow: {
    left: 131,
    top: 1161,
    position: "absolute",
  },
  androidLarge13Child35: {
    top: 1199,
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    height: 34,
    backgroundColor: Color.colorGainsboro_100,
    width: 360,
    left: 0,
  },
  androidLarge13Child36: {
    left: 249,
    width: 23,
    top: 1205,
    height: 22,
  },
  androidLarge13Child37: {
    left: 168,
    width: 22,
    top: 1205,
    height: 22,
  },
  androidLarge13Child38: {
    top: 1207,
    left: 99,
    width: 17,
  },
  androidLarge13Child39: {
    top: 428,
    left: 248,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 64,
    height: 28,
    borderRadius: Border.br_3xs,
  },
  rs: {
    left: 255,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.colorBlack,
  },
  androidLarge13Child40: {
    borderRadius: Border.br_6xl,
    position: "absolute",
    height: 238,
    top: 145,
  },
  baos: {
    top: 765,
  },
  androidLarge13Child41: {
    left: 7,
    width: 354,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    height: 1,
  },
  androidLarge13Child42: {
    width: 359,
    left: 0,
    height: 9,
    backgroundColor: Color.colorGainsboro_100,
  },
  image37Icon: {
    height: 14,
    left: 328,
    width: 14,
  },
  androidLarge13Child43: {
    top: 42,
    left: 272,
    width: 42,
    height: 24,
    backgroundColor: Color.colorGainsboro_100,
  },
  add: {
    top: 47,
    left: 275,
    width: 39,
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    position: "absolute",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    height: 19,
  },
  androidLarge13Child44: {
    top: 43,
    left: 274,
    width: 40,
    backgroundColor: Color.colorGainsboro_100,
  },
  androidLarge13Child45: {
    top: 59,
    width: 137,
    height: 0,
  },
  androidLarge13: {
    top: 0,
    width: 360,
    position: "absolute",
    height: 1233,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  androidLarge13Wrapper: {
    top: 0,
    width: 360,
    position: "absolute",
    height: 1233,
  },
  androidLarge16: {
    flex: 1,
    height: 1233,
    overflow: "hidden",
    width: "100%",
  },
});

export default AndroidLarge3;
