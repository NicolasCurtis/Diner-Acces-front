import React from 'react';

import {createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import mapScreens from './screens/mapScreens';
import Login from './screens/Login'
import Favoris from './screens/Favoris'

import { Ionicons } from '@expo/vector-icons';



var BottomNavigator = createBottomTabNavigator({
  Map: mapScreens,
  Favoris: Favoris
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      var iconName;
      if (navigation.state.routeName == 'Map') {
        iconName = "ios-map";
      } else if (navigation.state.routeName == 'Favoris') {
        iconName = "md-heart";
      } 

      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#eb4d4b',
    inactiveTintColor: '#FFFFFF',
    style: {
      backgroundColor: '#1400D2',
    }
  }
 

});

// var StackNavigator = createStackNavigator({ 
//   Home: Login,
//   BottomNavigator: BottomNavigator
// }, 
// {headerMode: 'none'}
// );   

const Navigation = createAppContainer(BottomNavigator);

export default Navigation;