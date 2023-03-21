import React from "react";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container:{margin:10,padding:0,flex:1},
    image:{
        resizeMode:'contain',
        backgroundColor:'white',
        height:400,
        width:400
    },
    title:{fontWeight:'bold',fontSize:25,margin:5},
    description:{fontSize:16,margin:3},
    price:{fontSize:20,margin:4,textAlign:'right'},
})