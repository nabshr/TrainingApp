import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationStrings from '../Constants/navigationStrings';
import {Home, Map, ProductDetails} from '../Screens';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      // screenOptions={{headerShown: false}}
      initialRouteName={navigationStrings.HOME}>
      <Stack.Screen name={navigationStrings.HOME} component={Home} />
      <Stack.Screen
        name={navigationStrings.PRODUCT_DETAILS}
        component={ProductDetails}
      />
      <Stack.Screen name={navigationStrings.MAP} component={Map} />
    </Stack.Navigator>
  );
}
