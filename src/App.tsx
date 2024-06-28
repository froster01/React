import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import React from 'react';

const App = () => {
  // This like Controller
  const AnswerButton = () => 
    Alert.alert('Ferostzz', 'Hi my name is Ferostzz. Do you want some cupcake?', [
      {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel', // react-native often have predefined cancel. this to prevent react predefine
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
      
    ]);
  
  return( 
    //this like HTML
    <View style={styles.container}>
      <Text style={styles.title}>Hello New Friend</Text>
      <Button title={'Press Me !'} onPress={AnswerButton} />
    </View>
  );
  }

const styles = StyleSheet.create({ 
  // this likes CSS 
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 100,
    
    
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
  }
});

export default App;
