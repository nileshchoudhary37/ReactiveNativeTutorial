import {
  StyleSheet,
  ActivityIndicator,
  View,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator color={"green"}></ActivityIndicator>
      <ActivityIndicator size={"large"} color={"blue"}></ActivityIndicator>
      <View style={styles.view1}>
        <Text style={styles.text}> Hello </Text>
        <Text style={styles.text}> Text 2 </Text>
      </View>
      <View style={styles.view2}>
        <View style={styles.childView}></View>
      </View>
      <View style={styles.view3}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
  view1:{
    height: 200,
    width: 200,
    backgroundColor: "red",
  },
  view2:{
    height: 150,
    width: 150,
    backgroundColor: "black",
    marginLeft: 20,
    margin: 100,
    padding: 20,
  },
  view3:{
    height: 150,
    width: 150,
    backgroundColor: "yellow",
    marginLeft: 100,
  },
  childView:{
    height: 50,
    width: 50,
    backgroundColor: "red"
  },
  text:{
    fontSize: 50,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  }
});
