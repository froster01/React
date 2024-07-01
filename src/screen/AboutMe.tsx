import {StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AboutMe = () => {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Button
                title="Portfolio"
                onPress={() => navigation.navigate('Screen3' as never)} // Please help to explain this.. why i should put never?
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

