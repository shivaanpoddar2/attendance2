import * as React from 'react';
import {Text,View,TouchableOpacity,StyleSheet,Image} from 'react-native';



export default class Cars extends React.Component {

 render(){
     
   return(
     <View>
           <Text>hi cars</Text>
           <Image style={{ width: 50, height: 50, marginTop: -35, marginLeft: 100, }} source={require('./cars.png')} />
        </View>
     )


        }
        




}