import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  FlatList,
} from "react-native";
import { ScrollView } from "react-native-virtualized-view";

import Ionicons from "@expo/vector-icons/Ionicons";
//Fonts
import { useFonts } from "expo-font";

import lobster_1 from "../../assets/lobster-1.png";
import lobster_2 from "../../assets/lobster-2.png";
import lobster_3 from "../../assets/lobster-3.png";

const IMAGES = [
  {
    id: 1,
    image: lobster_1,
  },
  {
    id: 2,
    image: lobster_2,
  },
  {
    id: 3,
    image: lobster_3,
  },

  {
    id: 4,
    image: lobster_1,
  },

  {
    id: 5,
    image: lobster_2,
  },

  {
    id: 6,
    image: lobster_3,
  },
];

function ListImage({ image, id }) {
  return (
    <View style={{ flex: 1 }}>
      <Image
        style={{
          borderRadius: 8,
          aspectRatio: 1,
        }}
        source={image}
        key={id}
      />
    </View>
  );
}

function LobsterContent() {
  const [count, setCount] = useState(0);
  const { width } = useWindowDimensions();
  const SIZE = width * 0.3;

  let [fontsLoading] = useFonts({
    Montserrat: require("../../assets/fonts/Montserrat-Regular.ttf"),
    Monts_Black: require("../../assets/fonts/Montserrat-Bold.ttf"),
    KumbhSans: require("../../assets/fonts/KumbhSans-ExtraBold.ttf"),
  });

  if (!fontsLoading) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* Text Title Section */}

      <View style={styles.lobItems}>
        <Text
          style={{
            fontFamily: "Montserrat",
            fontSize: 17,
            fontWeight: "600",
          }}
        >
          Lobster
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Ionicons name="star" size={18} color="#FFD233" />
          <Text
            style={{
              fontFamily: "Montserrat",
              fontSize: 15,
              fontWeight: "600",
            }}
          >
            3.5
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: "flex-end", right: 30 }}>
          <Ionicons name="location-sharp" color="#2B65EC" size={18} />
        </View>
      </View>
      {/* <View>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan enim
          adipiscing vbitant. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Accumsan enim adipiscing vbitant.
        </Text>
      </View> */}

      {/* Price items */}
      <View style={styles.itemPrice}>
        <View style={[styles.split, styles.amountItems]}>
          <Text
            style={{
              color: "#2B65EC",
              fontFamily: "Montserrat",
              fontSize: 18,
              fontWeight: "600",
            }}
          >
            GH₵00.00
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <Text
            style={{
              fontFamily: "Montserrat",
              fontSize: 11,
              fontWeight: "400",
            }}
          >
            per kg
          </Text>
          <Ionicons name="alert-circle" color="#ff0000" size={13} />
        </View>

        <View style={[styles.split, styles.numItems]}>
          <Ionicons
            name="remove-circle-outline"
            size={28}
            color="#2B65EC"
            onPress={() => setCount(count - 1)}
          />
          <Text
            style={{
              fontFamily: "Montserrat",
              fontSize: 15,
              fontWeight: "500",
            }}
          >
            {count}
          </Text>
          <Ionicons
            name="add-circle-sharp"
            size={28}
            color="#2B65EC"
            onPress={() => setCount(count + 1)}
          />
        </View>
      </View>

      <Text
        style={{
          fontFamily: "Montserrat",
          fontSize: 13,
          fontWeight: "400",
          paddingLeft: 24,
          marginBottom: 30,
        }}
      >
        (Including delivery fee)
      </Text>

      <View style={{ marginBottom: 15 }}>
        <Text
          style={{
            fontFamily: "Montserrat",
            fontSize: 16,
            fontWeight: "500",
            paddingLeft: 24,
            // marginTop: -5
          }}
        >
          Have a look at your product
        </Text>
      </View>
      {/* Lobster Image FlatList Section */}
      <View style={styles.layout}>
        <ScrollView
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          decelerationRate="fast"
        >
          <FlatList
            style={styles.image}
            horizontal
            scrollEventThrottle={6}
            bounces={false}
            showsHorizontalScrollIndicator={false}
            data={IMAGES}
            renderItem={({ item }) => (
              <ListImage image={item.image} style={styles.images} />
            )}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
      </View>
      <View
        style={{
          flex: 1,
          paddingLeft: 24,
          marginBottom: 30,
          marginHorizontal: 5,
          marginVertical: 5,
        }}
      >
        <TouchableOpacity style={styles.btn}>
          <View>
            <Text
              style={{
                color: "#fff",
                fontFamily: "Montserrat",
                fontSize: 16,
                fontWeight: "600",
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
  // Title

  container: {
    flex: 1,
    marginTop: 14,
  },

  lobItems: {
    paddingLeft: 24,
    flexDirection: "row",
    gap: 10,
    marginBottom: 25,
  },

  text: {
    marginTop: "2%",
    paddingLeft: 24,
    fontFamily: "Montserrat",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "300",
  },

  itemPrice: {
    marginTop: "3%",
    paddingLeft: 24,
    flexDirection: "row",
  },

  split: {
    flexDirection: "row",
  },

  numItems: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    right: 30,
    gap: 5,
  },

  //lobster images flatlist

  layout: {
    flex: 1,
    

  },

  image: {
    borderRadius: 8,
    paddingLeft: 5,
    paddingRight: 5,
  },
  images: {
    width: 99.614,
    height: 108,
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

  btn: {
    width: 310,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2B65EC",
    padding: 8,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "#2B65EC",
  },
});

export default LobsterContent;
