import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const AndroidLarge = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge11}>
      <View style={styles.androidLarge11Child} />
      <View style={[styles.androidLarge11Inner, styles.groupWrapperLayout]}>
        <View style={[styles.groupWrapper, styles.groupPosition1]}>
          <View style={[styles.groupWrapper, styles.groupPosition1]}>
            <View style={[styles.groupChild, styles.groupLayout]} />
            <View style={[styles.groupItem, styles.groupLayout]} />
            <Pressable
              style={[styles.wrapper, styles.wrapperPosition]}
              onPress={() => navigation.navigate("Frame1")}
            >
              <Image
                style={[styles.icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-40.png")}
              />
            </Pressable>
            <View style={[styles.groupInner, styles.groupLayout]} />
            <View style={[styles.rectangleView, styles.groupChild1Position]} />
            <Text style={[styles.rsForTwo, styles.forFlexBox]}>
              200rs for two
            </Text>
            <Text style={[styles.dhantolinagpur, styles.forFlexBox]}>
              Dhantoli,Nagpur
            </Text>
            <View style={[styles.groupChild1, styles.groupChild1Position]} />
            <Text style={[styles.rsForTwo1, styles.forFlexBox]}>
              200rs for two
            </Text>
            <Text style={[styles.tacoBell, styles.noodlesTypo]}>Taco Bell</Text>
            <Text style={[styles.noodles, styles.noodlesTypo]}>Noodles</Text>
            <Text style={[styles.absAbsoluteBarbecues, styles.noodlesTypo]}>
              AB’s Absolute Barbecues
            </Text>
            <Text
              style={[styles.mexicanfastFoodWraps, styles.northTypo]}
            >{`Mexican,Fast Food,
Wraps`}</Text>
            <Text style={[styles.northIndianmexican, styles.northTypo]}>
              North Indian,Mexican
            </Text>
            <Text style={[styles.dhantolinagpur1, styles.forFlexBox]}>
              Dhantoli,Nagpur
            </Text>
            <Text style={[styles.rsForFive, styles.forFlexBox]}>
              1850rs for five
            </Text>
            <Text style={[styles.km, styles.kmTypo]}>3.1 km</Text>
            <View style={[styles.groupChild2, styles.groupChildLayout1]} />
            <Image
              style={[styles.starIcon, styles.starIconLayout]}
              contentFit="cover"
              source={require("../assets/star-1.png")}
            />
            <Text style={[styles.text, styles.textTypo1]}>4.4</Text>
            <Text style={[styles.km1, styles.kmTypo]}>2 km</Text>
            <Text style={[styles.rsForTwo2, styles.rsForTwo2Position]}>
              400rs for two
            </Text>
            <Pressable
              style={[styles.container, styles.wrapperPosition]}
              onPress={() => navigation.navigate("Frame")}
            >
              <Image
                style={[styles.icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-39.png")}
              />
            </Pressable>
            <Text style={[styles.asianBistro, styles.noodlesTypo]}>
              Asian Bistro
            </Text>
            <View style={[styles.groupChild3, styles.groupChildLayout]} />
            <Text style={[styles.text1, styles.textTypo1]}>4.5</Text>
            <Image
              style={[styles.groupChild4, styles.starIconLayout]}
              contentFit="cover"
              source={require("../assets/star-2.png")}
            />
            <Text style={[styles.asianchinesesushi, styles.northTypo]}>
              Asian,Chinese,Sushi
            </Text>
            <Text style={[styles.bajajNagarnagpur, styles.forFlexBox]}>
              Bajaj Nagar,Nagpur
            </Text>
            <Text style={[styles.rsForThree, styles.addPosition]}>
              800rs for three
            </Text>
            <Text style={[styles.km2, styles.kmTypo]}>3.7 km</Text>
            <View style={[styles.groupChild5, styles.groupChildLayout1]} />
            <View style={[styles.groupChild6, styles.groupChildLayout]} />
            <Image
              style={[styles.groupChild7, styles.groupChildPosition]}
              contentFit="cover"
              source={require("../assets/star-2.png")}
            />
            <Image
              style={[styles.groupChild8, styles.groupChildPosition]}
              contentFit="cover"
              source={require("../assets/star-2.png")}
            />
            <Text style={[styles.text2, styles.textTypo]}>4.4</Text>
            <Text style={[styles.text3, styles.textTypo]}>4.5</Text>
            <Text style={[styles.km3, styles.km3Typo]}>2 km</Text>
            <Text style={[styles.km4, styles.km3Typo]}>2 km</Text>
          </View>
        </View>
      </View>
      <Text style={[styles.ourMenu, styles.addTypo]}>Our Menu</Text>
      <Image
        style={[styles.androidLarge11Item, styles.androidPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-10.png")}
      />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Image
        style={styles.androidLarge11Child1}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <View style={styles.androidLarge11Child2} />
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-47.png")}
      />
      <Pressable
        style={[styles.frame, styles.groupLayout]}
        onPress={() => navigation.navigate("AndroidLarge5")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-37.png")}
        />
      </Pressable>
      <View style={[styles.androidLarge11Child3, styles.groupChildLayout1]} />
      <Text style={[styles.text4, styles.textTypo1]}>4.4</Text>
      <Image
        style={[styles.androidLarge11Child4, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/star-11.png")}
      />
      <Text
        style={[styles.biryanibbqKebabNorth, styles.northTypo]}
      >{`Biryani,BBQ, Kebab, North In... `}</Text>
      <Text style={[styles.dharampethnagpur, styles.forFlexBox]}>
        Dharampeth,Nagpur
      </Text>
      <Text style={[styles.search, styles.forFlexBox]}>Search.......</Text>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("AndroidLarge3")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/rectangle-53.png")}
        />
      </Pressable>
      <Pressable
        style={styles.wrapper1}
        onPress={() => navigation.navigate("AndroidLarge4")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/rectangle-54.png")}
        />
      </Pressable>
      <View style={[styles.androidLarge11Child5, styles.androidChildBorder]} />
      <Image
        style={[styles.androidLarge11Child6, styles.androidChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-56.png")}
      />
      <Image
        style={[styles.androidLarge11Child7, styles.androidChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-57.png")}
      />
      <Image
        style={[styles.androidLarge11Child8, styles.rsForTwo2Position]}
        contentFit="cover"
        source={require("../assets/rectangle-58.png")}
      />
      <Image
        style={[styles.image12Icon, styles.groupChildLayout1]}
        contentFit="cover"
        source={require("../assets/image-12.png")}
      />
      <Image
        style={[styles.androidLarge11Child9, styles.androidPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <View style={styles.androidLarge11Child} />
      <Image
        style={styles.androidLarge11Child1}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.image12Icon, styles.groupChildLayout1]}
        contentFit="cover"
        source={require("../assets/image-12.png")}
      />
      <Image
        style={[styles.androidLarge11Child9, styles.androidPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <View style={[styles.androidLarge11Child13, styles.androidChildBorder]} />
      <Text style={[styles.add, styles.addPosition]}>ADD+</Text>
      <View style={[styles.androidLarge11Child14, styles.androidChildLayout]} />
      <Image
        style={styles.lineIcon}
        contentFit="cover"
        source={require("../assets/line-22.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupWrapperLayout: {
    height: 590,
    position: "absolute",
  },
  groupPosition1: {
    top: 0,
    left: 0,
    width: 325,
  },
  groupLayout: {
    height: 142,
    position: "absolute",
  },
  wrapperPosition: {
    top: 188,
    width: 151,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  groupChild1Position: {
    top: 448,
    height: 142,
    width: 151,
    borderBottomLeftRadius: Border.br_mini,
    borderBottomRightRadius: Border.br_mini,
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  forFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  noodlesTypo: {
    fontFamily: FontFamily.inriaSerifBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  northTypo: {
    fontFamily: FontFamily.interLight,
    textAlign: "left",
    color: Color.colorBlack,
    fontWeight: "300",
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  kmTypo: {
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.interLight,
    textAlign: "left",
    color: Color.colorBlack,
    fontWeight: "300",
    position: "absolute",
  },
  groupChildLayout1: {
    height: 16,
    position: "absolute",
  },
  starIconLayout: {
    height: 8,
    width: 13,
    position: "absolute",
  },
  textTypo1: {
    color: Color.colorWhite,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  rsForTwo2Position: {
    left: 100,
    position: "absolute",
  },
  groupChildLayout: {
    left: 281,
    height: 16,
    width: 34,
    backgroundColor: Color.colorSeagreen,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  addPosition: {
    left: 262,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  groupChildPosition: {
    top: 556,
    height: 8,
    width: 13,
    position: "absolute",
  },
  textTypo: {
    top: 553,
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_2xs,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  km3Typo: {
    top: 577,
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.interLight,
    textAlign: "left",
    color: Color.colorBlack,
    fontWeight: "300",
    position: "absolute",
  },
  addTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  androidPosition: {
    height: 25,
    top: 24,
    position: "absolute",
  },
  rectangleIconLayout: {
    width: 14,
    position: "absolute",
  },
  androidChildBorder: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  androidChildLayout: {
    height: 22,
    position: "absolute",
  },
  androidLarge11Child: {
    top: 62,
    borderRadius: Border.br_6xl,
    height: 28,
    width: 325,
    backgroundColor: Color.colorGainsboro_100,
    left: 15,
    position: "absolute",
  },
  groupChild: {
    width: 151,
    backgroundColor: Color.colorWhitesmoke_100,
    height: 142,
    borderBottomLeftRadius: Border.br_mini,
    borderBottomRightRadius: Border.br_mini,
    left: 174,
    top: 287,
  },
  groupItem: {
    backgroundColor: Color.colorWhitesmoke_100,
    height: 142,
    borderBottomLeftRadius: Border.br_mini,
    borderBottomRightRadius: Border.br_mini,
    left: 0,
    top: 0,
    width: 325,
  },
  icon: {
    borderBottomLeftRadius: Border.br_mini,
    borderBottomRightRadius: Border.br_mini,
    height: "100%",
  },
  wrapper: {
    height: 190,
    left: 174,
  },
  groupInner: {
    width: 151,
    backgroundColor: Color.colorWhitesmoke_100,
    height: 142,
    borderBottomLeftRadius: Border.br_mini,
    borderBottomRightRadius: Border.br_mini,
    top: 287,
    left: 0,
  },
  rectangleView: {
    left: 0,
  },
  rsForTwo: {
    left: 95,
    fontFamily: FontFamily.inriaSerifLight,
    fontWeight: "300",
    fontSize: FontSize.size_5xs,
    top: 568,
    position: "absolute",
  },
  dhantolinagpur: {
    top: 578,
    left: 5,
    fontFamily: FontFamily.inriaSerifLight,
    fontWeight: "300",
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  groupChild1: {
    left: 174,
  },
  rsForTwo1: {
    left: 271,
    fontFamily: FontFamily.inriaSerifLight,
    fontWeight: "300",
    fontSize: FontSize.size_5xs,
    top: 568,
    position: "absolute",
  },
  tacoBell: {
    fontSize: FontSize.size_smi,
    left: 4,
    top: 378,
  },
  noodles: {
    top: 552,
    fontSize: FontSize.size_smi,
    left: 4,
  },
  absAbsoluteBarbecues: {
    top: 100,
    left: 10,
    fontSize: FontSize.size_xs,
  },
  mexicanfastFoodWraps: {
    top: 394,
    left: 4,
  },
  northIndianmexican: {
    left: 4,
    top: 568,
  },
  dhantolinagpur1: {
    top: 413,
    left: 4,
    fontFamily: FontFamily.inriaSerifLight,
    fontWeight: "300",
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  rsForFive: {
    top: 121,
    left: 269,
    fontFamily: FontFamily.inriaSerifLight,
    fontWeight: "300",
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  km: {
    top: 129,
    left: 280,
  },
  groupChild2: {
    left: 103,
    width: 34,
    backgroundColor: Color.colorSeagreen,
    height: 16,
    borderRadius: Border.br_8xs,
    top: 378,
  },
  starIcon: {
    top: 382,
    left: 123,
  },
  text: {
    top: 379,
    left: 106,
  },
  km1: {
    top: 410,
    left: 117,
  },
  rsForTwo2: {
    top: 398,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.inriaSerifLight,
    fontWeight: "300",
    fontSize: FontSize.size_5xs,
  },
  container: {
    height: 183,
    left: 0,
  },
  asianBistro: {
    top: 383,
    left: 173,
    fontSize: FontSize.size_smi,
  },
  groupChild3: {
    top: 388,
  },
  text1: {
    top: 389,
    left: 283,
  },
  groupChild4: {
    top: 392,
    left: 301,
  },
  asianchinesesushi: {
    top: 399,
    left: 175,
    width: 79,
  },
  bajajNagarnagpur: {
    top: 411,
    left: 177,
    fontFamily: FontFamily.inriaSerifLight,
    fontWeight: "300",
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  rsForThree: {
    top: 407,
    fontFamily: FontFamily.inriaSerifLight,
    fontWeight: "300",
    fontSize: FontSize.size_5xs,
  },
  km2: {
    top: 417,
    left: 283,
  },
  groupChild5: {
    left: 106,
    width: 34,
    backgroundColor: Color.colorSeagreen,
    height: 16,
    borderRadius: Border.br_8xs,
    top: 552,
  },
  groupChild6: {
    top: 552,
  },
  groupChild7: {
    left: 125,
  },
  groupChild8: {
    left: 300,
  },
  text2: {
    left: 107,
  },
  text3: {
    left: 283,
  },
  km3: {
    left: 108,
  },
  km4: {
    left: 286,
  },
  groupWrapper: {
    left: 0,
    height: 590,
    position: "absolute",
  },
  androidLarge11Inner: {
    top: 153,
    left: 11,
    width: 325,
  },
  ourMenu: {
    top: 13,
    left: 110,
    fontSize: FontSize.size_9xl,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  androidLarge11Item: {
    width: 25,
    left: 15,
  },
  ellipseIcon: {
    top: 19,
    left: 9,
    width: 37,
    height: 34,
    position: "absolute",
  },
  androidLarge11Child1: {
    top: 64,
    width: 27,
    height: 23,
    left: 309,
    position: "absolute",
  },
  androidLarge11Child2: {
    top: 66,
    left: 27,
    backgroundColor: Color.colorWhite,
    width: 24,
    height: 21,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  rectangleIcon: {
    top: 70,
    left: 32,
    height: 13,
  },
  icon2: {
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_12xs,
  },
  frame: {
    top: 111,
    left: 11,
    width: 325,
  },
  androidLarge11Child3: {
    top: 258,
    left: 289,
    width: 34,
    backgroundColor: Color.colorSeagreen,
    height: 16,
    borderRadius: Border.br_8xs,
  },
  text4: {
    top: 259,
    left: 291,
  },
  androidLarge11Child4: {
    top: 261,
    height: 9,
    left: 309,
  },
  biryanibbqKebabNorth: {
    top: 268,
    left: 20,
  },
  dharampethnagpur: {
    top: 279,
    left: 21,
    fontFamily: FontFamily.inriaSerifLight,
    fontWeight: "300",
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  search: {
    top: 68,
    left: 88,
    fontWeight: "100",
    fontFamily: FontFamily.interThin,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  rectanglePressable: {
    top: 601,
    height: 104,
    width: 151,
    left: 11,
    position: "absolute",
  },
  wrapper1: {
    left: 188,
    top: 602,
    width: 148,
    height: 99,
    position: "absolute",
  },
  androidLarge11Child5: {
    top: 766,
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    width: 360,
    height: 34,
    left: 0,
  },
  androidLarge11Child6: {
    left: 250,
    width: 23,
    top: 772,
    height: 22,
  },
  androidLarge11Child7: {
    left: 169,
    width: 22,
    top: 772,
    height: 22,
  },
  androidLarge11Child8: {
    top: 774,
    width: 17,
    height: 18,
  },
  image12Icon: {
    top: 29,
    left: 316,
    width: 16,
  },
  androidLarge11Child9: {
    left: 311,
    width: 26,
  },
  androidLarge11Child13: {
    top: 25,
    left: 259,
    width: 42,
    height: 24,
  },
  add: {
    top: 30,
    width: 39,
    height: 19,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
  },
  androidLarge11Child14: {
    top: 26,
    left: 261,
    width: 40,
    backgroundColor: Color.colorGainsboro_100,
  },
  lineIcon: {
    top: 45,
    left: 113,
    width: 131,
    height: 1,
    position: "absolute",
  },
  androidLarge11: {
    backgroundColor: "#eee",
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default AndroidLarge;
