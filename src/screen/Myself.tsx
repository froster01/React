import {StyleSheet, Text, View} from 'react-native';

// Please change this parent function and filename to ScreenThree
const Myself = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Myself data here </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: 'black',
  },
});

export default Myself;
