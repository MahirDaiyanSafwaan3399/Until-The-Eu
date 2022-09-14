import React, { useEffect } from "react";
import { View, SafeAreaView, Image, StatusBar, FlatList } from "react-native";

import { COLORS, SIZES, assets, FONTS } from "../constants";
import { CircleButton, DetailsDesc, ListItem, RectButton } from "../components";

export const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: "100%", height: 373 }}>
    <Image
      source={data.image}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
    />
    <CircleButton
      imgUrl={assets.left}
      handlePress={() => {
        navigation.goBack();
      }}
      left={15}
      top={StatusBar.currentHeight + 10}
    />
  </View>
);

const Details = ({ route, navigation }) => {
  const { data } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={COLORS.gray} />

      <FlatList
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3,
        }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />
            </View>
            <View>
              {data.solutions.map((solution, index) => {
                return (
                  <ListItem
                    key={index}
                    levelName={solution.levelName}
                    levelDesc={solution.levelSub}
                    imgSrc={solution.imgSrc}
                    onPress={() => {
                      navigation.navigate("Solution", solution);
                    }}
                  />
                );
              })}
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;
