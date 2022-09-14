import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  Modal,
  Animated,
} from "react-native";
import { COLORS, SIZES, FONTS } from "../constants";
import QuizData from "../constants/QuizData";
import Lottie from "lottie-react-native";
import { stage } from "../components";
import { ScrollView } from "react-native-gesture-handler";

const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Go to Home Page
      </Text>
    </TouchableOpacity>
  );
};

let getLottie = (stage) => {
  if(stage == "None"){
    return require("../assets/lottie_images/happy.json");
  }
  else if (stage == "Alarm Stage") {
    return require("../assets/lottie_images/stage1.json");
  } else if (stage == "Resistance Stage") {
    return require("../assets/lottie_images/stage2.json");
  } else {
    return require("../assets/lottie_images/stage3.json");
  }
};

const Quiz = () => {
  const navigation = useNavigation();

  const allQuestions = QuizData;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);

  const validateAnswer = (selectedOption, option_index) => {
    let option_points = allQuestions[currentQuestionIndex]["correct_option"][0];
    setCurrentOptionSelected(selectedOption);
    setIsOptionsDisabled(true);
    setShowNextButton(true);
    setScore(score + option_points.key(option_index));
  };
  const handleNext = () => {
    if (currentQuestionIndex == allQuestions.length - 1) {
      // Last Question
      // Show Score Modal
      setShowScoreModal(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
      setShowNextButton(false);
    }
    Animated.timing(progress, {
      toValue: currentQuestionIndex + 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  const restartQuiz = () => {
    setShowScoreModal(false);

    setCurrentQuestionIndex(0);
    setScore(0);

    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
    setShowNextButton(false);
    Animated.timing(progress, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
    navigation.navigate("Home", { score });
  };

  const renderQuestion = () => {
    return (
      <View
        style={{
          marginVertical: 20,
        }}
      >
        {/* Question Counter */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              fontSize: 13,
              opacity: 0.6,
              marginRight: 2,
              fontWeight: "bold",
            }}
          >
            {currentQuestionIndex + 1}
          </Text>
          <Text style={{ color: COLORS.white, fontSize: 13, opacity: 0.6 }}>
            / {allQuestions.length}
          </Text>
        </View>

        {/* Question */}
        <Text
          style={{
            color: COLORS.white,
            fontSize: 20,
            // textAlign: "justify"
          }}
        >
          {allQuestions[currentQuestionIndex]?.question}
        </Text>
      </View>
    );
  };
  const renderOptions = () => {
    return (
      <View>
        {allQuestions[currentQuestionIndex]?.options.map((option, index) => (
          <TouchableOpacity
            onPress={() => validateAnswer(option, index)}
            disabled={isOptionsDisabled}
            key={option}
            style={{
              borderWidth: 3,
              borderColor:
                option == currentOptionSelected
                  ? COLORS.success
                  : COLORS.secondary + "40",
              backgroundColor: COLORS.secondary + "20",
              height: 60,
              borderRadius: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              marginVertical: 10,
            }}
          >
            <Text style={{ fontSize: 16, color: COLORS.white }}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  const renderNextButton = () => {
    if (showNextButton) {
      return (
        <TouchableOpacity
          onPress={handleNext}
          style={{
            marginTop: 20,
            backgroundColor: COLORS.accent,
            padding: 20,
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: COLORS.white,
              textAlign: "center",
              alignItems: "center",
            }}
          >
            Next Question
          </Text>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  };

  const [progress, setProgress] = useState(new Animated.Value(0));
  const progressAnim = progress.interpolate({
    inputRange: [0, allQuestions.length],
    outputRange: ["0%", "100%"],
  });
  const renderProgressBar = () => {
    return (
      <View
        style={{
          width: "100%",
          height: 20,
          borderRadius: 20,
          backgroundColor: "#00000020",
        }}
      >
        <Animated.View
          style={[
            {
              height: 20,
              borderRadius: 20,
              backgroundColor: COLORS.accent,
            },
            {
              width: progressAnim,
            },
          ]}
        ></Animated.View>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      <View
        style={{
          flex: 1,
          paddingVertical: 40,
          paddingHorizontal: 16,
          backgroundColor: COLORS.background,
          position: "relative",
        }}
      >
        <ScrollView>
          {/* ProgressBar */}
          {renderProgressBar()}

          {/* Question */}
          {renderQuestion()}

          {/* Options */}
          {renderOptions()}

          {/* Next Button */}
          {renderNextButton()}
        </ScrollView>

        {/* Score Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={showScoreModal}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: COLORS.primary,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                backgroundColor: COLORS.white,
                width: "90%",
                borderRadius: 20,
                padding: 20,
                alignItems: "center",
              }}
            >
              <Lottie
                source={getLottie(stage(score))}
                autoPlay
                resizeMode="cover"
                autoSize
                style={{
                  width: 300,
                }}
              />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginVertical: 20,
                }}
              >
                <View
                  style={{
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      fontFamily: FONTS.semiBold,
                      fontSize: 15,
                    }}
                  >
                    StressScore: {} {score}
                  </Text>
                  <Text
                    style={{
                      color: "black",
                      fontFamily: FONTS.semiBold,
                      fontSize: 15,
                      padding: 5,
                    }}
                  >
                    StressLevel: {} {stage(score)}
                  </Text>
                </View>

                {/* Retry Quiz button */}
              </View>
              <RectButton minWidth={200} handlePress={restartQuiz} />
            </View>
          </View>
        </Modal>

        {/* Background Image */}
        <Image
          source={require("../assets/images/DottedBG1.png")}
          style={{
            width: SIZES.width,
            height: 130,
            zIndex: -1,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            opacity: 0.5,
          }}
          resizeMode={"contain"}
        />
      </View>
    </SafeAreaView>
  );
};

export default Quiz;
