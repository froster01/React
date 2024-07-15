import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { FontSize, Color, FontFamily, Border, Padding } from "../styles/GlobalStyles";

const Homepage = () => {
  return (
    <View style={styles.iphone1415ProMax1Parent}>
      <View style={styles.iphone1415ProMax1}>
        <View
          style={[styles.iphone1415ProMax1Child, styles.iphone1415Position]}
        />
        <Image
          style={styles.dAvatars10}
          resizeMode="cover"
          source={require("../assets/3d-avatars--10.png")}
        />
        <Text style={[styles.thisIsMy, styles.thisIsMyTypo]}>
          This is my Homepage designed using Figma
        </Text>
        <View
          style={[styles.iphone1415ProMax1Item, styles.iphone1415Position]}
        />
        <Text style={[styles.wantToLearn, styles.labelTextTypo]}>
          want to learn more about me? Press the button below !
        </Text>
        <Text style={[styles.testingUsingFigma, styles.labelTextTypo]}>
          Testing using Figma zzzz
        </Text>
      </View>
      <View style={styles.topAppBar}>
        <View style={[styles.leadingIcon, styles.stateIconFlexBox]}>
          <View style={[styles.container, styles.buttonFlexBox]}>
            <View style={[styles.stateLayer, styles.stateIconFlexBox]}>
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
            </View>
          </View>
        </View>
        <Text style={[styles.headline, styles.thisIsMyTypo]}>Homepage</Text>
        <View style={[styles.trailingIcon, styles.stateIconFlexBox]}>
          <View style={[styles.container, styles.buttonFlexBox]}>
            <View style={[styles.stateLayer, styles.stateIconFlexBox]}>
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.button, styles.buttonFlexBox]}>
        <View style={[styles.stateLayer2, styles.stateIconFlexBox]}>
          <Text style={styles.labelTextTypo}>About Me</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone1415Position: {
    width: 430,
    left: 0,
    position: "absolute",
  },
  thisIsMyTypo: {
    textAlign: "center",
    lineHeight: 38,
    fontSize: FontSize.size_13xl,
  },
  labelTextTypo: {
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.m3HeadlineMedium,
    lineHeight: 36,
    fontSize: FontSize.m3HeadlineMedium_size,
    textAlign: "center",
  },
  stateIconFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonFlexBox: {
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  iphone1415ProMax1Child: {
    backgroundColor: "#d9d9d9",
    top: 0,
    left: 0,
    height: 932,
  },
  dAvatars10: {
    top: 127,
    left: 155,
    width: 120,
    height: 120,
    position: "absolute",
  },
  thisIsMy: {
    top: 277,
    left: 18,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    color: "#000",
    width: 394,
    height: 93,
    position: "absolute",
  },
  iphone1415ProMax1Item: {
    top: 423,
    borderTopLeftRadius: Border.br_13xl,
    borderTopRightRadius: Border.br_13xl,
    backgroundColor: "#7491a0",
    height: 509,
  },
  wantToLearn: {
    top: 473,
    left: 29,
    position: "absolute",
  },
  testingUsingFigma: {
    top: 581,
    left: 58,
    position: "absolute",
  },
  iphone1415ProMax1: {
    backgroundColor: Color.schemesOnPrimary,
    overflow: "hidden",
    width: 430,
    left: 0,
    top: 0,
    position: "absolute",
    height: 932,
  },
  icon: {
    width: 24,
    height: 24,
  },
  stateLayer: {
    padding: Padding.p_5xs,
    flexDirection: "row",
  },
  container: {
    flexDirection: "row",
  },
  leadingIcon: {
    height: 48,
    width: 48,
    justifyContent: "center",
  },
  headline: {
    fontFamily: FontFamily.interRegular,
    color: Color.schemesOnSurface,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    marginLeft: 6,
    flex: 1,
  },
  trailingIcon: {
    marginLeft: 6,
    height: 48,
    width: 48,
    justifyContent: "center",
  },
  topAppBar: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    backgroundColor: Color.schemesSurface,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
    width: 430,
    left: 0,
    top: 0,
    position: "absolute",
  },
  stateLayer2: {
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
    flex: 1,
  },
  button: {
    top: 666,
    left: 49,
    backgroundColor: Color.schemesPrimary,
    width: 332,
    height: 64,
    position: "absolute",
  },
  iphone1415ProMax1Parent: {
    width: "100%",
    height: 932,
    flex: 1,
  },
});

export default Homepage;
