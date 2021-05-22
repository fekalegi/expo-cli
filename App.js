import React from 'react';
import { SafeAreaView, StyleSheet, ToastAndroid, Button, Image, StatusBar } from 'react-native';

export default function App() {
  function handlePress() {
    ToastAndroid.show('Request sent successfully!', ToastAndroid.SHORT);
    console.log("The Button is Pressed")
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{
        width: 200,
        height: 300,
        uri: "https://picsum.photos/200/300"}}  />
      <Button title="Show Toast" onPress={handlePress} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 8,
  },
});