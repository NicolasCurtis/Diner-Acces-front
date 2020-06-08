import React from 'react';

import {createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import mapScreens from './screens/mapScreens';
import Login from './screens/Login'
import Favoris from './screens/Favoris'
import HomePage from './screens/HomePage'

import { Ionicons } from '@expo/vector-icons';



const BottomNavigator = createBottomTabNavigator({
  Accueil: HomePage,
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
      } else if (navigation.state.routeName == 'Accueil') {
        iconName = "ios-restaurant";}

      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#eb4d4b',
    inactiveTintColor: '#FFFFFF',
    style: {
      backgroundColor: '#00D1BD',
    }
  }
 

});

const StackNavigator = createStackNavigator({ 
  Home: Login,
  BottomNavigator: BottomNavigator
}, 
{headerMode: 'none'}
);   

const Navigation = createAppContainer(StackNavigator);

export default Navigation;