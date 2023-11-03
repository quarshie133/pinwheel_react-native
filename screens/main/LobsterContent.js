import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  useWindowDimensions,
  Pressable,
  TouchableOpacity,
} from "react-native";

// import { NativeBaseProvider, ScrollView } from "native-base";

import star from "../../assets/star.png";
import { IMAGES } from "../../constants/data";
import Ionicons from "@expo/vector-icons/Ionicons";
//Fonts
import { useFonts } from "expo-font";

function LobsterContent() {
  const [count, setCount] = useState(0);
  const { width } = useWindowDimensions();
  const SIZE = width * 0.3;

  let [fontsLoading] = useFonts({
    Montserrat: require("../../assets/fonts/Montserrat-Regular.ttf"),
    KumbhSans: require("../../assets/fonts/KumbhSans-Medium.ttf"),
  });

  if (!fontsLoading) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lobster</Text>
      <View style={styles.lobItems}>
        <Image source={star} />
        <Text
          style={{
            color: "#000",
            fontFamily: "Montserrat",
            fontSize: 14,
            fontWeight: "400",
          }}
        >
          3.5
        </Text>
        <Ionicons
          name="location"
          size={18}
          color="#2B65EC"
          style={styles.location}
        />
      </View>

      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan enim
        adipiscing vbitant. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Accumsan enim adipiscing vbitant.
      </Text>
      <View>
        <Text
          style={{
            color: "#2B65EC",
            fontFamily: "Montserrat",
            fontSize: 18,
            fontWeight: "700",
            fontStyle: "normal",
            marginLeft: 24,
          }}
        >
          GH₵00.00
        </Text>
        <View style={styles.itemPrice}>
          <View style={styles.split}>
            <Text
              style={{
                color: "#000",
                fontFamily: "Montserrat",
                fontSize: 13,
                fontWeight: "500",
                fontStyle: "normal",
                marginTop: 4,
              }}
            >
              per kg
            </Text>
            <Ionicons name="alert-circle" size={14} color="#ff0000" />
          </View>
          <View style={styles.split}>
            <Ionicons
              name="remove-circle-outline"
              size={27}
              style={{ color: "#2B65EC", marginRight: 8 }}
              onPress={() => setCount(count - 1)}
            />
            <Text
              style={{
                color: "#000",
                fontFamily: "Montserrat",
                fontSize: 15,
                fontWeight: "700",
                fontStyle: "normal",
                marginTop: 4,
              }}
            >
              {count}
            </Text>
            <Ionicons
              name="add-circle-sharp"
              size={27}
              style={{ color: "#2B65EC", marginLeft: 8 }}
              onPress={() => setCount(count + 1)}
            />
          </View>
        </View>

        <Text
          style={{
            color: "#000",
            fontFamily: "Montserrat",
            fontSize: 12,
            fontWeight: "400",
            fontStyle: "normal",
            marginLeft: 24,
            marginBottom: 30,
          }}
        >
          (Including delivery fee)
        </Text>
      </View>
      <Text
        style={{
          color: "#000",
          fontFamily: "Montserrat",
          fontSize: 14,
          fontWeight: "500",
          fontStyle: "normal",
          marginLeft: 24,
        }}
      >
        Have a look at your product
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        scrollEventThrottle={6}
        decelerationRate="fast"
      >
        {IMAGES.map((img, index) => {
          return (
            <View style={{ width: SIZE }} key={index}>
              <View style={styles.images}>
                <Image source={img.image} style={styles.image} />
              </View>
            </View>
          );
        })}
      </ScrollView>
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={styles.btn}>
          <View>
            <Text
              style={{
                // flex: 1,
                width: 310,
                height: 40,
                fontFamily: "Montserrat",
                fontSize: 20,
                fontWeight: "500",
                textAlign: "center",
                textAlignVertical:"center",
                marginHorizontal: 15,
                marginVertical: 5,
                borderRadius: 20,
                color: "#fff",
                backgroundColor: "#2B65EC",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Add to Order
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    marginTop: 2,
  },
  title: {
    color: "#000",
    fontFamily: "Montserrat",
    fontSize: 16,
    fontWeight: "600",
    fontStyle: "normal",
    marginLeft: 24,
    marginBottom: 9,
  },
  lobItems: {
    flex: 1,
    flexDirection: "row",
    columnGap: 3,
    position: "absolute",
    marginTop: 3,
    marginLeft: 85,
  },
  location: {
    marginLeft: 170,
  },
  text: {
    width: 297,
    fontFamily: "Montserrat",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "300",
    marginLeft: 24,
    marginBottom: 15,
  },
  itemPrice: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
  },
  split: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 13,
  },
  images: {
    // flex: 1,
    borderRadius: 34,
    // overflow: "hidden",
  },
  image: {
    width: 90.614,
    height: undefined,
    aspectRatio: 1,
    marginBottom: 5,
    marginLeft: 15,
  },
  btn: {
    marginLeft: 15,
  },
});

export default LobsterContent;
