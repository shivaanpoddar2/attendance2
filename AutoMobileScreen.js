import * as React from 'react';
import {Text,View,TouchableOpacity,StyleSheet,Button} from 'react-native';


export default class AutoMobilesScreen extends React.Component {

 goToCarsScreen=()=>{
      this.props.navigation.navigate('switch4')
}
goToBikesScreen=()=>{
      this.props.navigation.navigate('switch3')
}

 render(){
     
   return(
     <View>
           <Text style={styling.hi}>Automobiles
           </Text>
           <Text style={{marginTop:100,width:80,backgroundColor:'red'}}>shivaan</Text>
          <View >

          <Button  title="cars"  onPress={this.goToCarsScreen} ></Button>
          </View>

          <View style={{marginTop:100}}>
          <Button  title="bikes"  onPress={this.goToBikesScreen} ></Button>
          </View>
       
           

     </View>
           
     )

        }
      
}

const styling=StyleSheet.create({
  hi:{
           color:'white',
           backgroundColor:'black',
           textAlign:"center",
           width:200,
           height:50,
           justifyContent:'center',
           fontSize:20,
           fontWeight:'Bold'
  }



})

