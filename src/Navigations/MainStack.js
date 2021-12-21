import React from 'react';
import navigationStrings from '../Constants/navigationStrings';
import {Login} from '../Screens';
import TabRoutes from './TabRoutes';

export default function (Stack) {
  return (
    <>
      <Stack.Screen name={navigationStrings.LOGIN} component={Login} />
      <Stack.Screen
        options={{headerShown: false}}
        name={navigationStrings.TABS}
        component={TabRoutes}
      />

      {/* <Stack.Screen
        name={navigationStrings.PRODUCT_DETAILS}
        component={ProductDetails}
      />
      <Stack.Screen name={navigationStrings.SEARCH} component={Search} />
      <Stack.Screen
        name={navigationStrings.EDIT_PROFILE}
        component={EditProfile}
      /> */}
    </>
  );
}
