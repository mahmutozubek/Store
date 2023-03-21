import React from "react";
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
export default function Input({buttonText,onPress}){
  return(
      <View style ={styles.container}>
        <TouchableOpacity style ={styles.buttonArea} onPress ={onPress}>
          <Text style ={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
  )
}

const styles =StyleSheet.create({
  container:{
    flex:1,
  },
  buttonArea:{

    alignItems:'center',
    margin:15,
    padding:5,
    width:390,
    backgroundColor:'orange'
  },
  buttonText:{
    color:'white',
    fontSize:25
  }
 
})