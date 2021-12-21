import React from 'react';
import {HomeStack, ProfileStack, ExploreStack} from '../Screens';
import navigationStrings from '../Constants/navigationStrings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      // screenOptions={({route}) => ({
      //   tabBarIcon: ({focused, size, color}) => {
      //     let iconName;
      //     if (route.name === navigationStrings.HOMESTACK) {
      //       iconName = 'autoprefixer';
      //       size = focused ? 20 : 15;
      //       //   color = focused ? '#f0f' : '#555';
      //     } else if (route.name === navigationStrings.PROFILESTACK) {
      //       iconName = 'btc';
      //       size = focused ? 20 : 15;
      //       //   color = focused ? '#f0f' : '#555';
      //     } else if (route.name === navigationStrings.EXPLORESTACK) {
      //       iconName = 'space-shuttle';
      //       size = focused ? 20 : 15;
      //       //   color = focused ? '#f0f' : '#555';
      //     }
      //     return <FontAwesome5 name={iconName} size={size} color={color} />;
      //   },
      //   tabBarActiveTintColor: 'blue',
      //   tabBarInactiveTintColor: 'gray',
      // })}
      initialRouteName={navigationStrings.HOMESTACK}
      screenOptions={
        ({headerShown: false},
        ({route}) => ({
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if (route.name === navigationStrings.HOMESTACK) {
              iconName = 'autoprefixer';
              size = focused ? 20 : 15;
              //   color = focused ? '#f0f' : '#555';
            } else if (route.name === navigationStrings.PROFILESTACK) {
              iconName = 'btc';
              size = focused ? 20 : 15;
              //   color = focused ? '#f0f' : '#555';
            } else if (route.name === navigationStrings.EXPLORESTACK) {
              iconName = 'space-shuttle';
              size = focused ? 20 : 15;
              //   color = focused ? '#f0f' : '#555';
            }
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          //   tabBarActiveBackgroundColor: 'pink',
          //   tabBarInactiveBackgroundColor: '#bbb',
          tabBarShowLabel: true,
          tabBarLabelStyle: {fontSize: 12},
          tabBarStyle: {
            position: 'absolute',
            // backgroundColor: 'pink',
            backgroundColor: 'transparent',
            borderRadius: 50,
            bottom: 20,
            marginHorizontal: 16,
          },
        }))
      }>
      <Tab.Screen
        name={navigationStrings.HOMESTACK}
        component={HomeStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={navigationStrings.PROFILESTACK}
        component={ProfileStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={navigationStrings.EXPLORESTACK}
        component={ExploreStack}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
