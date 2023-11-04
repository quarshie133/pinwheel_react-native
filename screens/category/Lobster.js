import React, { useCallback, useRef, useState, useMemo } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
// import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  View,
} from "react-native";
import lobster from "../../assets/lobster.png";

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

  // bottomSheet: {
  //   flex: 1,
  //   padding: 24,
  // },
});

export default Lobster;
