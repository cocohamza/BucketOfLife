import React, { useState } from "react";
import { XYPlot, VerticalBarSeries, LineSeries } from "react-vis";

import {
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Button,
} from "react-native";

const name = "Hamza";

// let totalPoints = 0;
let achievable = 1000;

const pointsDictionary = {
  gym: 10,
  Swimmning: 20,
  Youga: 15,
  Running: 15,
  Fasting: 30,
  Cycling: 20,
  Meditation: 30,
  Swimmning: 30,
};

function WelcomeScreen() {
  const buttons = [];
  const [totalPoints, setTotalPoints] = useState(0);

  const data = [{ x: 5, y: totalPoints }];

  let lineData = [];
  for (let i = 0; i < 20; i++) {
    lineData.push({ x: i, y: achievable });
  }

  RenderButtons(buttons, setTotalPoints, totalPoints);

  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.background}
        source={require("../assets/dark-background.jpg")}
      ></ImageBackground>

      <View>
        <Text>{name}</Text>
      </View>

      <View style={styles.graphArea}>
        <Text>Graph Area</Text>
        <Text>{totalPoints}</Text>
        <XYPlot height={300} width={300}>
          <VerticalBarSeries data={data} />
          <LineSeries color={"red"} data={lineData} />
        </XYPlot>
      </View>

      <View style={styles.buttonArea}>{buttons}</View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  background: { flex: 1 },
  loginButton: {},
  logoutButton: {},
  graphArea: {
    height: "30vh",
    width: "100%",
  },
  buttonArea: {
    width: "100%",
    margin: "2px",
  },
});

export default WelcomeScreen;
function RenderButtons(buttons, setTotalPoints, totalPoints) {
  for (let key in pointsDictionary) {
    console.log(key);
    buttons.push(
      <Button
        style={styles.buttonArea}
        title={key}
        onPress={() => setTotalPoints(totalPoints + pointsDictionary[key])}
      ></Button>
    );
  }
}
