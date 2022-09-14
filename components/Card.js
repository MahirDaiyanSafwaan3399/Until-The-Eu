import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image } from "react-native";

import { COLORS, SIZES, SHADOWS } from "../constants";
import { CardTitle } from "./SubInfo";
import { RectButton } from "./Button";

const Card = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        textAlign: "center",
        ...SHADOWS.dark,
      }}
    >
      <View
        style={{
          width: "100%",
          height: 250,
        }}
      >
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />

      </View>

      <View style={{ width: "100%", padding: 15 }}>
        <CardTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />

        <View
          style={{
            marginTop: 20,
            // flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
  
          <RectButton
            minWidth={200}
            handlePress={() => navigation.navigate("Details", { data })}
            text={"Enter Now"}
          />
        </View>
      </View>
    </View>
  );
};

export default Card;
