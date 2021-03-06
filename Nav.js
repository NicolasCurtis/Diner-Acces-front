import React from 'react';

import {createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './screens/Login'
import Favoris from './screens/Favoris'
import HomePage from './screens/HomePage'
import MapScreens from './screens/mapScreens'
import information from './screens/information'

import { Ionicons} from '@expo/vector-icons';



const BottomNavigator = createBottomTabNavigator({
  Accueil: HomePage,
  Map: MapScreens,
  Favoris: Favoris,
  Info : information
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
        iconName = "ios-restaurant";
      } else if (navigation.state.routeName == 'Info') {
        iconName = "md-person";} 


      return <Ionicons name={iconName} size={25} color={tintColor} /> 
    },
  }),
  tabBarOptions: {
    activeTintColor: '#16a085',
    inactiveTintColor: '#EDAA27',
    style: {
      backgroundColor: '#ecf0f1',
      
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