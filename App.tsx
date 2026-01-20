import { ImageBackground, TextInput, View } from "react-native";

export default function App() {
  return (
    <ImageBackground
      source={require("./assets/Beautiful-flowers-background-png-image-1-min.png")}
      style={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextInput
          autoFocus
          style={{
            height: 40,
            width: "80%",
            borderRadius: 4,
            borderWidth: 1,
            borderColor: "grey",
          }}

          placeholder="Enter your name"
          keyboardType="default"
          // secureTextEntry={true}
          // multiline={true}
        />
      </View>
    </ImageBackground>
  );
}
