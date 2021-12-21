import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainStack from './MainStack';
// import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>{MainStack(Stack)}</Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
