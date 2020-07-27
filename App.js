import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  SafeAreaView,
  TouchableHighlight,
  Button,
  Alert,
} from "react-native";
import { useDimensions } from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import SecondScreen from "./app/screens/SecondScreen";

export default function App() {
  return <WelcomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
