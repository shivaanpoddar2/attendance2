import * as React from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import {createAppContainer, createSwitchNavigator}  from 'react-navigation';
import HomeScreen from './Screens/HomeScreen';
import AutoMobileScreen from './Screens/AutoMobilesScreen';
import Bikes from './Screens/Bikes';
import Cars from './Screens/Cars';




export default class App extends React.Component {
 
  render() {
    return (
       <AppContainer/>
      
    );
  }
}

var AppNavigator= createSwitchNavigator({
      switch2:AutoMobileScreen,
      switch1:HomeScreen,
      
      switch3:Bikes,
      switch4:Cars,

})

var AppContainer = createAppContainer(AppNavigator);