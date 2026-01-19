import { StyleSheet, View, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {scale, verticalScale, s, vs} from 'react-native-size-matters';

export default function App() {
  //Percentage
  //Dimensions
  //Libraries for responsive
  const PHONE_WIDTH = Dimensions.get("screen").width;
  const PHONE_HEIGHT = Dimensions.get("screen").height;
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
          // flexDirection: "column",  //this main axis is vertical
          // justifyContent: "center",  //main axis is vertical
          // alignItems: "center",      //cross axis is horizontal
           flexDirection: "row",  //this main axis is horizontal
          justifyContent: "center",  //main axis is horizontal
          alignItems: "center",      //cross axis is vertical
          // alignItems: "baseline",
          // alignItems: "flex-start"
          // alignItems: "flex-end"
          // justifyContent: "flex-end"
          // justifyContent: "space-between"
          // justifyContent: "space-around"
          // flexWrap: "wrap",
          // alignContent: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "tomato",
            width: scale(90),           //responsive size
            height: verticalScale(90),  //responsive size
          }}
        />
        <View
          style={{
            backgroundColor: "green",
            width: s(90),
            height: vs(90),
            top: 30,
            left: 30,
            position: "absolute" //default is relative
          }}
        />
        <View
          style={{
            backgroundColor: "yellow",
            width: s(90),
            height: vs(90),
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
});
