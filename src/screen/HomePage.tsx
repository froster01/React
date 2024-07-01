import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
    const navigation: any = useNavigation();
    return (
    <View style={styles.container}>
        <Button
            title = 'Click me'
            onPress = {() => navigation.navigate('Screen2')}
            />
        <Text style={styles.text}>HomePage</Text>
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
    Button: {
        
    }
});

export default HomePage;
