console.disableYellowBox = true;

import React from 'react';
import {View} from 'react-native';

import Navigation from './Nav';

export default function App(){
  return (
    <View style={{flex: 1}}>
      <Navigation />
    </View>
  )
}
