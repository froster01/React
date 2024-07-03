import {View, Text, StyleSheet} from 'react-native';


const Address = () => {
    return (
    <View style={styles.container}>
    <Text style={styles.text}>Address Page</Text>
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
    }
});

export default Address;
