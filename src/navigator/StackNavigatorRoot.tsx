import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AboutMe from '../screen/AboutMe';
import HomePage from '../screen/HomePage';
import Myself from '../screen/Myself';

const Stack = createStackNavigator();
const NavStack = () => {
    // apps Routes.
    return (
    <Stack.Navigator initialRouteName='HomePage'> 
    <Stack.Screen
        name="Screen1"
        component={HomePage}
        options={{ headerShown: false }}
    />
    <Stack.Screen
        name="Screen2"
        component={AboutMe}
        options={{ headerShown: true }}
    />
    <Stack.Screen
        name="Screen3"
        component={Myself}
        options={{ headerShown: true }}
    />
    </Stack.Navigator>
    
    );
};

export default NavStack;