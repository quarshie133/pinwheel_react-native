import { Button, StyleSheet, Text, View } from "react-native";

function Home({ navigation }) {

  return (
    <View style={styles.container}>
      <Text>Open Lobster Page</Text>
      <Button
        title="Go to Lobster"
        onPress={() => navigation.navigate("Lobster")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
