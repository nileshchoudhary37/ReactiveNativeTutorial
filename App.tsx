import { Button, Modal, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "gold",
        justifyContent: "center",
      }}
    >
      <View style={{alignItems: "center" }}>
        <Button title="Show Modal" onPress={() => setModalVisible(true)} />
      </View>
      <Modal visible={modalVisible} animationType="slide">
        <Text style={{ marginTop: 50, fontSize: 50 }}>Modal is Opened</Text>
        <View style={{alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Button title="Show Modal" onPress={() => setModalVisible(false)} />
          <AntDesign name="close-circle" size={44} color="red" onPress={() => setModalVisible(false)} />
      </View>
      </Modal>
    </SafeAreaView>
  );
}
