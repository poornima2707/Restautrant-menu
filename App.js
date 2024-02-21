const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AndroidLarge from "./screens/AndroidLarge";
import AndroidLarge1 from "./screens/AndroidLarge1";
import Frame from "./screens/Frame";
import AndroidLarge2 from "./screens/AndroidLarge2";
import Image1 from "./components/Image1";
import ManchurianText from "./components/ManchurianText";
import NorthIndianMexicanText from "./components/NorthIndianMexicanText";
import DhantoliNagpurText from "./components/DhantoliNagpurText";
import AndroidLarge3 from "./screens/AndroidLarge3";
import AndroidLarge4 from "./screens/AndroidLarge4";
import AndroidLarge5 from "./screens/AndroidLarge5";
import AndroidLarge6 from "./screens/AndroidLarge6";
import AndroidLarge7 from "./screens/AndroidLarge7";
import Rectangle from "./components/Rectangle";
import AndroidLarge8 from "./screens/AndroidLarge8";
import Frame1 from "./screens/Frame1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "InriaSerif-Light": require("./assets/fonts/InriaSerif-Light.ttf"),
    "InriaSerif-Bold": require("./assets/fonts/InriaSerif-Bold.ttf"),
    "Inter-Thin": require("./assets/fonts/Inter-Thin.ttf"),
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="AndroidLarge"
              component={AndroidLarge}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge1"
              component={AndroidLarge1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge2"
              component={AndroidLarge2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge3"
              component={AndroidLarge3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge4"
              component={AndroidLarge4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge5"
              component={AndroidLarge5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge6"
              component={AndroidLarge6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge7"
              component={AndroidLarge7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge8"
              component={AndroidLarge8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame1"
              component={Frame1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
