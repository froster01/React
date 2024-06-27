import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boldLetter}>Hi welcome aiman!</Text>
      <Text style={styles.normalLetter}>
        5 - Please refer to official react native about alert
        https://reactnative.dev/docs/alert
      </Text>
      <Text style={styles.normalLetter}>
        6 - Understand the alert carefully and create me an alert with dialog
        box of....
      </Text>
      <Text style={styles.normalLetter}>
        title (Your name), description (the way you greet and meet new people.
        eg; hi my name is... would you like to be my friend?), and 2 button of
        yes and no
      </Text>
      <Text style={styles.normalLetter}>
        7 - You should clean your app.tsx and try to create from the scratch.
        you should see a blank white screen. (i mean by scratch is using React
        Native Functional Export Component With Styles)
      </Text>
      <Text style={styles.normalLetter}>
        8 - please refer back to task1.txt
      </Text>
      <View style={styles.container2}>
        <Text style={styles.boldLetter}>GOODLUCK! :D</Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  container2: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
  },
  boldLetter: {
    fontWeight: 'bold',
    fontSize: 36,
    marginBottom: 20,
  },
  normalLetter: {
    fontWeight: 'normal',
    fontSize: 20,
  },
  centerLetter: {
    display: 'flex',
    fontWeight: 'normal',
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
