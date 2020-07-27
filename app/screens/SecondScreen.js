import React from "react";
import { View, StyleSheet, Text } from "react-native";

function SecondScreen(params) {
  return (
    <View style={styles.CenterText}>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  CenterText: {
    flex: 1,
  },
});

export default SecondScreen;
