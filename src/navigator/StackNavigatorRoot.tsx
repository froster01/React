import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AboutMe from '../screen/AboutMe';
import HomePage from '../screen/HomePage';
import Myself from '../screen/Myself';

const Stack = createStackNavigator();
const NavStack = () => {
  // apps Routes.
  return (
    <Stack.Navigator initialRouteName="HomePage">
      <Stack.Screen
        name="Screen1" // If you name this as your ScreenOne please change component to ScreenOne as well to prevent future confusion. If you prefer HomePage, then use HomePage instead.
        component={HomePage} // change
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Screen2" // Please change to ScreenTwo
        component={AboutMe} // change
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Screen3" // Please change to ScreenThree
        component={Myself} // change
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export default NavStack;
