import {StyleSheet, Text, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Please change this parent function and filename to ScreenTwo
const AboutMe = () => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        title="Portfolio"
        onPress={() => navigation.navigate('Screen3')} // Please help to explain this.. why i should put never?
      />
      <Text style={styles.text}> AboutMe </Text>
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

export default AboutMe;
