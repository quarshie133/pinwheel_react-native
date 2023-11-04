import { StatusBar } from "expo-status-bar";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Lobster from "./screens/category/Lobster";
import Home from "./screens/main/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="Lobster"
            component={Lobster}
          />
        </Stack.Navigator>
        {/* <StatusBar style="auto"/> */}
      </NavigationContainer>
    </GestureHandlerRootView>
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
