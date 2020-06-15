 console.disableYellowBox = true;
 import React from 'react'; import {View} from 'react-native';
 import Navigation from './Nav';

import {connect} from 'react-redux';
import {provider, Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';

import wishList from './reducers/wishList';


const store = createStore(combineReducers({wishList}))

 export default function App(){
  return (

    <Provider store={store}>
        <View style={{flex: 1}}>
          <Navigation />
        </View>
    </Provider>
  )
 }
