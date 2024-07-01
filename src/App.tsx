import React from 'react';
import NavStack from './navigator/StackNavigatorRoot'; // Adjust the path as necessary
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  );
};

export default App;
