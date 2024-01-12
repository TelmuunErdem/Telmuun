import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

const Mygoal = () => {
  return (
    <View style={styles.container}>
      <Text>hi my names Erdem</Text>
      <Text> Minii bol Telmuun-Erdem </Text>
      <Text> bi Codely academyd surdag </Text>
      <Text>
        minii appiin sanaa bol humuus biy biydee tulgarsan asuudal deer zuvluguu
        ugdug app hiimeer bna
      </Text>
      <StatusBar style="auto" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",

    alignItems: "center",
    justifyContent: "center",
  },
});

export default Mygoal;
