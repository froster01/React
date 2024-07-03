import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutMe from '../screen/AboutMe';
import HomePage from '../screen/HomePage';
import Myself from '../screen/Myself';
import DrawerMenu from '../component/DrawerMenu';
import Address from '../screen/Address';
import Age from '../screen/Age';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerRoot = () => {
    return (
    <Drawer.Navigator
        initialRouteName="HomePage"
        drawerContent={(props) => <DrawerMenu {...props} />}
        screenOptions={{ headerShown: true, drawerStyle: { width: 300 } }}
    >
        <Drawer.Screen name="HomePage" component={HomePage} />
        <Drawer.Screen name="AboutMe" component={AboutMe} />
        <Drawer.Screen name="Myself" component={Myself} />
        <Drawer.Screen name="Age" component={Age} />
        <Drawer.Screen name="Address" component={Address} />
    </Drawer.Navigator>
    );
};

    const StackNavigatorRoot = () => {
    return (
    <Stack.Navigator initialRouteName="DrawerRoot">
        <Stack.Screen name="DrawerRoot" component={DrawerRoot} options={{ headerShown: false }} />
    </Stack.Navigator>
    );
};
export default StackNavigatorRoot;
