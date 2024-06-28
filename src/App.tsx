import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import React from 'react';

// This is parent function
const App = () => {
  // This is function inside parent function. You can call it as baby function or sub function, but preferably 'function'
  const AnswerButton = () =>
    // This is a assets component made by React API
    Alert.alert(
      'Ferostzz',
      'Hi my name is Ferostzz. Do you want some cupcake?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
    );

  // This is where your App.tsx function ends and render on phone screen
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello New Friend</Text>
      <Button title={'Press Me !'} onPress={AnswerButton} />
    </View>
  );
};

// This is your CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 100,
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
  },
});

export default App;
