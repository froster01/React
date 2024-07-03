import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView} from '@react-navigation/drawer';

interface DrawerMenuProps {
  navigation: any; 
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({ navigation }) => {
  const navigateToScreen = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <DrawerContentScrollView>
      <View style={styles.drawerContent}>
        <Text style={styles.drawerHeader}>Drawer Menu</Text>

        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigateToScreen('HomePage')}
        >
          <Text>HomePage</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigateToScreen('AboutMe')}
        >
          <Text>AboutMe</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigateToScreen('Myself')}
        >
          <Text>Myself</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigateToScreen('Age')}
        >
          <Text>Age</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigateToScreen('Address')}
        >
          <Text>Address</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );

};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  drawerHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  drawerItem: {
    padding: 10,
  },
});

export default DrawerMenu;
