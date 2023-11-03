import React, { useCallback, useRef, useState, useMemo } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

import { StyleSheet, View, ImageBackground } from "react-native";
import lobster from "../../assets/lobster.png";
import LobsterContent from "../main/LobsterContent";

function Lobster({ navigation }) {
  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);
  const snapPoints = useMemo(() => ["25%", "50%", "150%"], []);
  // const snapPoints = ["100%",]

  return (
    <View style={styles.container}>
      <ImageBackground
        source={lobster}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={{ flex: 1 }}>
        <Ionicons
          name="arrow-back-outline"
          size={28}
          style={styles.btn}
          onPress={() => navigation.navigate("Home")}
        />
      </View>

      <View style={styles.bottomSheet}>
        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          enablePanDownToClose={false}
          onClose={() => setIsOpen(false)}
          index={2}
          backgroundStyle={{ borderRadius: 35 }}
        >
          <BottomSheetView>
            <LobsterContent />
          </BottomSheetView>
        </BottomSheet>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    width: 360,
    height: 451,
    justifyContent: "center",
    position: "absolute",
  },
  btn: {
    marginTop: 43,
    margin: 30,
    backgroundColor: "#fff",
    height: 28,
    width: 28,
    borderRadius: 28,
  },
  bottomSheet: {
    flex: 1,
    padding: 24,
  },
});

export default Lobster;

