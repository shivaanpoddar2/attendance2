import * as React from 'react';
import {Text,View,TouchableOpacity,StyleSheet} from 'react-native';



export default class HomeScreen extends React.Component {
  goToAutomobilesScreen=()=>{
      this.props.navigation.navigate('switch2')
  }

 render(){
     
   return(
          <View>
           <Text style={stylo.textStyle}  > attendance app</Text>
           <TouchableOpacity style={stylo.buttonStyle} onPress={this.goToAutomobilesScreen}>Start to take attendance</TouchableOpacity>
         </View>
     )
 }
        
        }


        const stylo = StyleSheet.create({
   
         textStyle:{
             marginTop:10,
              backgroundColor:"lightblue",
             color:"yellow",
             fontSize:30,
             fontWeight:"bold",
             textAlign:"center"
        },
        buttonStyle:{
              marginTop:10,
              marginLeft:50,
              backgroundColor:"yellow",
             color:"orange",
             fontSize:30,
             fontWeight:"bold",
             textAlign:"center",
             width:200,
             borderRadius:100,
        }


         })