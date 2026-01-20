import {View, Text, Button} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [count, setCount]= useState(20)
  return (
    <View style={{
      backgroundColor: "white",
      flex: 1,
      justifyContent: "center",
    }}>
      <Button title="Increment Count" onPress={()=> setCount(count+1)} />
      <Text style={{ fontSize: 100}}>{count}</Text>
      <Button title="Decrement Count" onPress={()=> setCount(count-1)} />
    </View>
);
   

}