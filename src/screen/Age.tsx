import {StyleSheet, Text, View} from 'react-native';


const Age = () => {
    return (
    <View style={styles.container}>
    <Text style={styles.text}> Age Page </Text>
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

export default Age;
