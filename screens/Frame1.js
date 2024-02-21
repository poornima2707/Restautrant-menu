import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Frame1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge13Parent}>
      <View style={[styles.androidLarge13, styles.androidLayout1]}>
        <View style={[styles.androidLarge13Child, styles.addLayout]} />
        <Image
          style={[styles.androidLarge13Item, styles.androidLayout1]}
          contentFit="cover"
          source={require("../assets/rectangle-61.png")}
        />
        <View style={[styles.androidLarge13Inner, styles.androidLayout]} />
        <Text style={[styles.ourMenu, styles.addTypo]}>Our Menu</Text>
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
        <View style={[styles.rectangleView, styles.rectangleViewBg]} />
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
        <Text style={[styles.asianBistro, styles.addTypo]}>Asian Bistro</Text>
        <Text style={styles.asianChineseSushi}>Asian Chinese sushi</Text>
        <Text style={[styles.bajajNagarnagpur, styles.kRatingsTypo]}>
          Bajaj Nagar,Nagpur
        </Text>
        <Text style={[styles.kRatings, styles.textTypo]}>2.2k ratings</Text>
        <View style={[styles.androidLarge13Child6, styles.textPosition]} />
        <Image
          style={styles.starIcon}
          contentFit="cover"
          source={require("../assets/star-2.png")}
        />
        <Text style={[styles.text, styles.textPosition]}>4.5</Text>
        <Image
          style={[styles.lineIcon, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line-5.png")}
        />
        <Text style={styles.km}>3.7 km</Text>
        <Image
          style={[styles.androidLarge13Child7, styles.androidChildLayout6]}
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
        <Text style={[styles.kidsChoice, styles.spicyTypo]}>Kid’s choice</Text>
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
          style={[styles.androidLarge13Child14, styles.androidChildLayout4]}
        />
        <Image
          style={[styles.androidLarge13Child15, styles.androidChildLayout3]}
          contentFit="cover"
          source={require("../assets/ellipse-19.png")}
        />
        <Text style={[styles.veg, styles.vegTypo1]}>Veg</Text>
        <View
          style={[styles.androidLarge13Child16, styles.androidChildLayout4]}
        />
        <Image
          style={[styles.androidLarge13Child17, styles.androidChildLayout3]}
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
          style={[styles.image23Icon, styles.androidChildLayout4]}
          contentFit="cover"
          source={require("../assets/image-23.png")}
        />
        <Text
          style={[styles.mealsForOne, styles.vegPosition1]}
        >{`Meals for One `}</Text>
        <Text style={[styles.platters, styles.nonPosition]}>Platters</Text>
        <Text style={[styles.soupsAndSalad, styles.image25IconPosition]}>
          Soups and salad
        </Text>
        <Text style={[styles.vegSoups, styles.vegTypo]}>Veg Soups</Text>
        <Text style={[styles.nonVegSoups, styles.vegTypo]}>Non Veg Soups</Text>
        <View style={[styles.lineView, styles.androidChildLayout2]} />
        <View
          style={[styles.androidLarge13Child18, styles.androidChildLayout2]}
        />
        <View
          style={[styles.androidLarge13Child19, styles.androidChildLayout2]}
        />
        <View
          style={[styles.androidLarge13Child20, styles.androidChildLayout2]}
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
        <Text style={[styles.vegMainCourse, styles.vegTypo]}>
          Veg Main course
        </Text>
        <Text style={[styles.nonVegMain, styles.nonVegMainPosition]}>
          Non Veg Main Course
        </Text>
        <View
          style={[styles.androidLarge13Child21, styles.androidChildLayout2]}
        />
        <View
          style={[styles.androidLarge13Child22, styles.androidChildLayout2]}
        />
        <Image
          style={[styles.image30Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-24.png")}
        />
        <Image
          style={[styles.image31Icon, styles.nonVegMainPosition]}
          contentFit="cover"
          source={require("../assets/image-24.png")}
        />
        <Text style={[styles.vegStarter, styles.vegTypo]}>Veg Starter</Text>
        <Text style={[styles.nonVegStarter, styles.image29IconPosition]}>
          Non-Veg Starter
        </Text>
        <View
          style={[styles.androidLarge13Child23, styles.androidChildLayout2]}
        />
        <View
          style={[styles.androidLarge13Child24, styles.androidChildLayout2]}
        />
        <Image
          style={[styles.image28Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-24.png")}
        />
        <Image
          style={[styles.image29Icon, styles.image29IconPosition]}
          contentFit="cover"
          source={require("../assets/image-24.png")}
        />
        <Text style={[styles.starters, styles.addTypo]}>Starters</Text>
        <View
          style={[styles.androidLarge13Child25, styles.androidChildLayout1]}
        />
        <View
          style={[styles.androidLarge13Child26, styles.androidChildLayout1]}
        />
        <Text style={[styles.mainCourse, styles.mainCourseTypo]}>
          Main Course
        </Text>
        <Text style={[styles.momos, styles.vegTypo]}>Momos</Text>
        <Text style={[styles.vegDimsumsnonVeg, styles.vegPosition]}>
          Veg Dimsums/Non Veg Dimsums
        </Text>
        <View
          style={[styles.androidLarge13Child27, styles.androidChildLayout2]}
        />
        <View
          style={[styles.androidLarge13Child28, styles.androidChildLayout1]}
        />
        <Text style={[styles.momosAndDimsums, styles.mainCourseTypo]}>
          Momos and Dimsums
        </Text>
        <Image
          style={[styles.image32Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-24.png")}
        />
        <Image
          style={[styles.image33Icon, styles.vegPosition]}
          contentFit="cover"
          source={require("../assets/image-24.png")}
        />
        <View
          style={[styles.androidLarge13Child29, styles.androidChildLayout2]}
        />
        <Text style={[styles.petBottles, styles.waterTypo]}>Pet Bottles</Text>
        <Text style={[styles.water, styles.waterTypo]}>Water</Text>
        <View
          style={[styles.androidLarge13Child30, styles.androidChildPosition2]}
        />
        <View
          style={[styles.androidLarge13Child31, styles.androidChildPosition1]}
        />
        <Text style={[styles.drinksbeverages, styles.addTypo]}>
          Drinks(Beverages)
        </Text>
        <View
          style={[styles.androidLarge13Child32, styles.androidChildPosition1]}
        />
        <Text style={[styles.desserts, styles.addTypo]}>Desserts</Text>
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
          style={[styles.androidLarge13Child33, styles.androidChildPosition2]}
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
          <Text style={[styles.orderedNow1, styles.addTypo]}>Ordered Now</Text>
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
          style={[styles.androidLarge13Child38, styles.androidChildLayout6]}
          contentFit="cover"
          source={require("../assets/rectangle-58.png")}
        />
        <View
          style={[styles.androidLarge13Child39, styles.androidChildBorder]}
        />
        <Text style={[styles.rs, styles.vegTypo]}>267 RS</Text>
        <Image
          style={[styles.androidLarge13Child40, styles.androidLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-401.png")}
        />
        <Image
          style={[styles.image37Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-24.png")}
        />
        <View
          style={[styles.androidLarge13Child41, styles.androidChildLayout2]}
        />
        <View
          style={[styles.androidLarge13Child42, styles.androidChildLayout1]}
        />
        <View
          style={[styles.androidLarge13Child43, styles.androidChildPosition1]}
        />
        <View
          style={[styles.androidLarge13Child44, styles.androidChildBorder]}
        />
        <Text style={[styles.add, styles.addTypo]}>ADD+</Text>
        <View
          style={[styles.androidLarge13Child45, styles.androidChildLayout]}
        />
        <Image
          style={[styles.androidLarge13Child46, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line-26.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  androidLayout1: {
    width: 360,
    left: 0,
  },
  addLayout: {
    height: 19,
    position: "absolute",
  },
  androidLayout: {
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  addTypo: {
    color: Color.colorBlack,
    textAlign: "left",
    fontWeight: "700",
  },
  ellipseIconPosition: {
    height: 25,
    top: 41,
    position: "absolute",
  },
  rectangleViewBg: {
    backgroundColor: Color.colorWhite,
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
  lineIconLayout: {
    height: 1,
    position: "absolute",
  },
  androidChildLayout6: {
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
  androidChildLayout4: {
    height: 10,
    position: "absolute",
  },
  androidChildLayout3: {
    height: 5,
    width: 5,
    position: "absolute",
  },
  iconPosition1: {
    top: 527,
    position: "absolute",
  },
  vegPosition1: {
    left: 24,
    fontSize: FontSize.size_xs,
  },
  nonPosition: {
    left: 25,
    fontSize: FontSize.size_xs,
  },
  image25IconPosition: {
    top: 641,
    position: "absolute",
  },
  vegTypo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.colorBlack,
  },
  androidChildLayout2: {
    width: 354,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    height: 1,
    position: "absolute",
  },
  iconLayout: {
    height: 14,
    left: 328,
    width: 14,
  },
  nonVegMainPosition: {
    top: 899,
    position: "absolute",
  },
  image29IconPosition: {
    top: 800,
    position: "absolute",
  },
  androidChildLayout1: {
    width: 359,
    height: 9,
    backgroundColor: Color.colorGainsboro_100,
    left: 0,
    position: "absolute",
  },
  mainCourseTypo: {
    left: 17,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  vegPosition: {
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
  androidChildPosition2: {
    left: 7,
    width: 354,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    height: 1,
    position: "absolute",
  },
  androidChildPosition1: {
    left: 1,
    width: 359,
    height: 9,
    backgroundColor: Color.colorGainsboro_100,
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
  androidLarge13Child: {
    top: 458,
    backgroundColor: Color.colorGainsboro_200,
    width: 160,
    borderRadius: Border.br_3xs,
    left: 106,
  },
  androidLarge13Item: {
    top: 145,
    borderRadius: Border.br_16xl,
    height: 238,
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
    top: 24,
    left: 115,
    fontSize: FontSize.size_9xl,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
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
  asianBistro: {
    top: 380,
    left: 138,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.inriaSerifBold,
    textAlign: "left",
    position: "absolute",
  },
  asianChineseSushi: {
    top: 404,
    left: 123,
    width: 124,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  bajajNagarnagpur: {
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
    top: 434,
    position: "absolute",
  },
  text: {
    top: 431,
    color: Color.colorWhite,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 125,
  },
  lineIcon: {
    top: 444,
    left: 172,
    width: 49,
  },
  km: {
    top: 461,
    left: 118,
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
  },
  image14Icon: {
    top: 463,
    left: 111,
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
    top: 527,
    height: 8,
  },
  image23Icon: {
    top: 526,
    left: 273,
    width: 9,
  },
  mealsForOne: {
    top: 572,
    textAlign: "left",
    color: Color.colorBlack,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    position: "absolute",
  },
  platters: {
    top: 604,
    textAlign: "left",
    color: Color.colorBlack,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    position: "absolute",
  },
  soupsAndSalad: {
    left: 25,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  vegSoups: {
    top: 680,
    left: 22,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  nonVegSoups: {
    top: 712,
    left: 24,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  lineView: {
    top: 625,
    left: 6,
    width: 354,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
  },
  androidLarge13Child18: {
    top: 663,
    left: 6,
    width: 354,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
  },
  androidLarge13Child19: {
    top: 698,
    left: 6,
    width: 354,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
  },
  androidLarge13Child20: {
    top: 727,
    left: 6,
    width: 354,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
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
  vegMainCourse: {
    top: 862,
    left: 25,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  nonVegMain: {
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.colorBlack,
    left: 25,
    fontSize: FontSize.size_xs,
  },
  androidLarge13Child21: {
    top: 883,
    left: 6,
    width: 354,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
  },
  androidLarge13Child22: {
    top: 921,
    left: 6,
    width: 354,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
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
  vegStarter: {
    top: 763,
    left: 25,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  nonVegStarter: {
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.colorBlack,
    left: 25,
    fontSize: FontSize.size_xs,
  },
  androidLarge13Child23: {
    top: 784,
    left: 6,
    width: 354,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
  },
  androidLarge13Child24: {
    top: 822,
    left: 6,
    width: 354,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
  },
  image28Icon: {
    top: 768,
    position: "absolute",
  },
  image29Icon: {
    height: 14,
    left: 328,
    width: 14,
  },
  starters: {
    top: 741,
    left: 13,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    position: "absolute",
  },
  androidLarge13Child25: {
    top: 730,
  },
  androidLarge13Child26: {
    top: 826,
  },
  mainCourse: {
    top: 841,
  },
  momos: {
    top: 961,
    left: 25,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  vegDimsumsnonVeg: {
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.colorBlack,
    left: 24,
    fontSize: FontSize.size_xs,
  },
  androidLarge13Child27: {
    top: 982,
    left: 6,
    width: 354,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
  },
  androidLarge13Child28: {
    top: 925,
  },
  momosAndDimsums: {
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
  },
  petBottles: {
    top: 1058,
  },
  water: {
    top: 1090,
  },
  androidLarge13Child30: {
    top: 1079,
  },
  androidLarge13Child31: {
    top: 1022,
  },
  drinksbeverages: {
    top: 1037,
    left: 18,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    position: "absolute",
  },
  androidLarge13Child32: {
    top: 1117,
  },
  desserts: {
    left: 21,
    top: 1134,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    position: "absolute",
  },
  image34Icon: {
    top: 1059,
  },
  image35Icon: {
    top: 1090,
  },
  androidLarge13Child33: {
    top: 1115,
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
    textAlign: "left",
    fontFamily: FontFamily.interBold,
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
    top: 434,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  androidLarge13Child40: {
    top: 147,
    left: -1,
    width: 358,
    height: 235,
  },
  image37Icon: {
    top: 573,
  },
  androidLarge13Child41: {
    top: 587,
    left: 8,
  },
  androidLarge13Child42: {
    top: 627,
  },
  androidLarge13Child43: {
    top: 588,
  },
  androidLarge13Child44: {
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
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    height: 19,
    position: "absolute",
  },
  androidLarge13Child45: {
    top: 43,
    left: 274,
    width: 40,
    backgroundColor: Color.colorGainsboro_100,
  },
  androidLarge13Child46: {
    top: 54,
    left: 124,
    width: 123,
  },
  androidLarge13: {
    top: 0,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    position: "absolute",
    height: 1233,
  },
  androidLarge13Parent: {
    flex: 1,
    height: 1233,
    width: "100%",
  },
});

export default Frame1;
