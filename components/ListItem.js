import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import { FONTS} from "../constants";

export default function ListItem({ levelName, levelDesc, imgSrc, onPress }) {
  const windowWidth = Dimensions.get("window").width;

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
        margin: 20,
        padding: 5,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
        <Image
          source={imgSrc}
          style={{ width: 55, height: 55, borderRadius: 10, marginRight: 8 }}
        />
        <View style={{ width: windowWidth - 220 }}>
          <Text
            numberOfLines={1}
            style={{
              color: "#333",
              fontFamily: FONTS.regular,
              fontSize: 14,
              textTransform: "uppercase",
            }}
          >
            {levelName}
          </Text>
          <Text
            style={{
              color: "#333",
              fontFamily: FONTS.regular,
              fontSize: 14,
            }}
          >
            {levelDesc}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: "#252c4a",
          padding: 10,
          width: 100,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontFamily: FONTS.semiBold,
            fontSize: 13,
          }}
        >
          Enter Now
        </Text>
      </TouchableOpacity>
    </View>
  );
}
