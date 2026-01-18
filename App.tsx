import {
  StyleSheet,
  Image,
  Button,
  Alert,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const onButtonPress = () => Alert.alert("Button Pressed!");
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ backgroundColor:"red"}}
      >
        <Image
          source={require("./assets/splash-icon.png")}
          style={styles.image1}
        ></Image>
        <Image
          source={require("./assets/splash-icon.png")}
          style={styles.image1}
        ></Image>
        <Image
          source={require("./assets/splash-icon.png")}
          style={styles.image1}
        ></Image>
        <Image
          source={require("./assets/splash-icon.png")}
          style={styles.image1}
        ></Image>
        <Image
          source={require("./assets/splash-icon.png")}
          style={styles.image1}
        ></Image>
        <Image
          source={require("./assets/splash-icon.png")}
          style={styles.image1}
        ></Image>
        <Image
          source={require("./assets/splash-icon.png")}
          style={styles.image1}
        ></Image>
        <Image
          source={require("./assets/splash-icon.png")}
          style={styles.image1}
        ></Image>
        <Image
          source={require("./assets/splash-icon.png")}
          style={styles.image1}
        ></Image>
        <TouchableOpacity>
          <Image
            source={require("./assets/splash-icon.png")}
            style={styles.image1}
          ></Image>
        </TouchableOpacity>
        <Pressable onPress={onButtonPress}>
          <Image
            source={{ uri: "https://picsum.photos/200/300" }}
            style={styles.image2}
            blurRadius={4}
          />
        </Pressable>
        <Button title="Press Me" onPress={onButtonPress} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image1: {
    width: 200,
    height: 200,
  },
  image2: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});
