import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Mygoal from "./src/Mygoal";
import TicTac from "./src/TicTac";
import Boxes from "./src/Boxes";

export default function App() {
  return (
    <View style={styles.container}>
      <Text></Text>
      <StatusBar style="auto" />

      <Boxes />
    </View>
  );
}

const styles = StyleSheet.create({});
