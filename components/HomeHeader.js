import React from "react";
import { View, Text, Image, TextInput } from "react-native";

import { COLORS, FONTS, SIZES, assets } from "../constants";
import {stage} from "./stage"

const HomeHeader = ({ score }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* <Image
          source={assets.laughing}
          resizeMode="contain"
          style={{ width: 90, height: 25 }}
        /> */}
        <Text
          style={{
            fontFamily: FONTS.bold,
            color: COLORS.white,
            fontSize: 25,
          }}
        >
         Until The EU
        </Text>
      </View>
        
      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white,
            // marginTop: SIZES.base / 2,
            fontStyle: "italic",
          }}
        >
        ~ Stress should be a powerful driving force not an obstacle
        </Text>
      </View>
      
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontFamily: FONTS.semiBold,fontSize: 12 }}>
          StressScore: {score}
        </Text>
        <Text style={{ color: "white", fontFamily: FONTS.semiBold, fontSize: 12 }}>
          StressLevel: {stage(score)}
        </Text>
      </View>
    </View>
  );
};

export default HomeHeader;
