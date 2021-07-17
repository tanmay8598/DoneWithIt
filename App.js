import { StatusBar } from "expo-status-bar"
import React from "react"
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Button,
} from "react-native"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello Tanmay</Text>
      <Button title='Get Chai' onPress={() => alert("Got chai")} />
      <Image
        source={{
          width: 200,
          height: 250,
          uri: "https://picsum.photos/200/300",
        }}
      />
      <StatusBar style='auto' />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#Ffff00",
    alignItems: "center",
    justifyContent: "center",
  },
})
