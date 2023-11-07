import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  View,
  Platform,
} from "react-native";
import lobster from "../../assets/lobster.png";
import { WINDOW_HEIGHT } from "../../constants/Dimensions";
import LobsterContent from "../main/LobsterContent";

const BOTTOM_SHEET_MAX_HEIGHT = WINDOW_HEIGHT * 0.7;
const BOTTOM_SHEET_MIN_HEIGHT = WINDOW_HEIGHT * 0.2;
function Lobster({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={lobster} style={styles.image} resizeMode="cover">
        <View style={styles.btn}>
          <Ionicons
            name="md-arrow-back-outline"
            size={24}
            onPress={() => navigation.navigate("Home")}
          />
        </View>
      </ImageBackground>
      <View>
        <View style={styles.bottomSheet}>
          <View style={styles.draggableArea}>
            <View style={styles.dragHandle} />
          </View>
          <LobsterContent />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 451,
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginLeft: 25,
    backgroundColor: "#fff",
    height: 38,
    width: 38,
    borderRadius: 35,
  },

  bottomSheet: {
    position: "absolute",
    width: "100%",
    height: BOTTOM_SHEET_MAX_HEIGHT,
    bottom: BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT,
    ...Platform.select({
      ios: {
        shadowColor: "#a8bed2",
        shhadowOpacity: 1,
        shadowRadius: 6,
        shadowOffset: {
          width: 2,
          height: 2,
        },
      },
    }),

    backgroundColor: "white",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  draggableArea: {
    width: 100,
    height: 32,
    alignSelf: "center",
    justifyContent: "center",
  },
  dragHandle: {
    width: 60,
    height: 2,
    backgroundColor: "rgba(0, 0, 0, 0.50)",
    borderRadius: 10,
  },
});

export default Lobster;
