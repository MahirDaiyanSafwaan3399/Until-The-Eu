import { SafeAreaView, Text } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, FONTS } from "../constants";

const Splash = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#ffffff",
      }}
    >
      <LottieView
        source={require("../assets/lottie_images/splash.json")}
        autoPlay
        loop={false}
        onAnimationFinish={() => {
          navigation.navigate("Quiz");
        }}
      />
    </SafeAreaView>
  );
};

export default Splash;
