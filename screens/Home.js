import React, { useEffect } from "react";
import {
  View,
  SafeAreaView,
  FlatList,
  StatusBar,
  BackHandler,
  Text,
  Alert,
  Modal,
} from "react-native";

import { Card, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, Data } from "../constants";

const Home = (route) => {
  let { score } = route.route.params;
  useEffect(() => {
    // showAlert()
    BackHandler.addEventListener('hardwareBackPress',()=>{
      return true;
    })
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        backgroundColor={COLORS.secondary}
      />
      <StatusBar backgroundColor={COLORS.primary} animated={true} />

     
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={Data}
            renderItem={({ item }) => <Card data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader score={score}/>}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
