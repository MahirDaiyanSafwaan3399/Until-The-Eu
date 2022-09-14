import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  StatusBar,
  Alert,
  Button
} from "react-native";
import React, { useState, useCallback } from "react";
import Lottie from "lottie-react-native";
import { CardTitle } from "../components/SubInfo";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, assets, FONTS } from "../constants";
import { CircleButton } from "../components";
import YoutubePlayer from "react-native-youtube-iframe";

// TODO: decide the lottie before home,
// TODO: add music to each lottie after enterinng

const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#259c40",
        padding: SIZES.small,
        margin: 40,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: 15,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Mark Task as Done
      </Text>
    </TouchableOpacity>
  );
};

const DetailsHeader = ({ data, navigation }) => (
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
      top={StatusBar.currentHeight + 8}
    />
    <CircleButton
      imgUrl={data.avatar}
      right={15}
      top={StatusBar.currentHeight + 8}
    />
  </View>
);

let imgexists = (img) => {
  if (img != undefined) {
    return (
      <View style={{ width: "100%", height: 250, padding: 20 }}>
        <Lottie source={img} autoPlay resizeMode="contain" />
      </View>
    );
  }
};

let imageChange = (img1, img2) => {
  if (img1 != undefined) {
    const [img, setImg] = useState(img1);
    return (
      <View style={{ width: "100%", height: 373 }}>
        <TouchableOpacity
          onPress={() => {
            setImg(img2);
          }}
          activeOpacity={1}
          touchSoundDisabled={false}
        >
          <Image
            source={img}
            style={{
              resizeMode: "contain",
              // height: 100,
              width: "100%",
              height: 375,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
};

let containsInputBox = (contains) => {
  if (contains) {
    return (
      <TextInput
        placeholder="Enter Here"
        multiline={true}
        style={{
          backgroundColor: "#e6e4e3",
          color: "black",
          padding: 20,
          width: "100%",
          borderRadius: 5,
          height: 150,
        }}
      />
    );
  }
};

const showAlert = (navigation) =>
  Alert.alert(
    "Congratulations !! ",
    "You have succesfully completed the Task",
    [
      {
        text: "Go to next level",
        onPress: () => navigation.goBack(),
        style: "message",
      },
      {
        dismissable: true,
      },
    ]
  );

let musicExists = (music) => {

  if (music != undefined) {
    return (
      <View>
        <YoutubePlayer
          height={200}
          play={true}
          videoId={"FjHGZj2IjBk"}
        />
      </View>
    );
  }
};

// FjHGZj2IjBk

const DetailsDesc = ({ data }) => {
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <CardTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />
      </View>

      <View style={{ marginVertical: SIZES.extraLarge * 0.3 }}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>
        <View
          style={{
            marginTop: SIZES.base,
            textAlign: "justify",
            paddingBottom: 20,
          }}
        >
          {data.description.map((points, index) => {
            return (
              <Text
                style={{
                  color: "black",
                  fontSize: 14,
                  fontFamily: FONTS.light,
                  lineHeight: SIZES.large,
                  textAlign: "justify",
                }}
                key={index}
              >
                {`${index + 1}. ${points}`}
              </Text>
            );
          })}
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {imgexists(data.img2)}
        {containsInputBox(data.inputBox)}
        {imageChange(data.pic1, data.pic2)}
        {musicExists(data.musicmp)}
        <RectButton
          minWidth={200}
          handlePress={() => {
            showAlert(navigation);
          }}
        />
      </ScrollView>
    </ScrollView>
  );
};

const Solution = ({ route, navigation }) => {
  const {
    levelName,
    levelSub,
    solutionImgSrc,
    levelDesc,
    img2,
    inputBox,
    pic1,
    pic2,
    avatar,
    musicmp,
  } = route.params;

  const data = {
    description: levelDesc,
    name: levelName,
    creator: levelSub,
    img2,
    inputBox,
    pic1,
    pic2,
    avatar,
    musicmp,
  };
  return (
    <SafeAreaView>
      <Lottie source={solutionImgSrc} autoPlay />
      <View style={{ width: "100%", height: 373 }}>
        <DetailsHeader data={data} navigation={navigation} />
        <View style={{ padding: SIZES.font }}>
          <DetailsDesc data={data} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Solution;
