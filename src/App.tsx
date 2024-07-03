import React from 'react';
import StackNavigatorRoot from './navigator/StackNavigatorRoot';
import { NavigationContainer } from '@react-navigation/native';



const App = () => {
  return (
    <NavigationContainer>
      <StackNavigatorRoot />
    </NavigationContainer>
  );
};

export default App;
